import { ref, onMounted } from 'vue';
import { auth, db } from '../services/firebase';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut as firebaseSignOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile // Important pour le pseudo
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const user = ref(null);
const userProfile = ref(null);

export function useAuth() {
  
  // --- Google ---
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await checkUserProfile(result.user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // --- Email Login ---
  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await checkUserProfile(result.user);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // --- Email Register (CORRIGÉ) ---
  const registerWithEmail = async (email, password, pseudo) => {
    try {
      // 1. Créer le compte
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // 2. Mettre à jour le profil Auth immédiatement
      await updateProfile(result.user, { displayName: pseudo });
      
      // 3. Forcer la mise à jour locale de l'objet user pour l'affichage immédiat
      // (Sinon Vue attend le prochain rafraîchissement pour voir le pseudo)
      const updatedUser = { ...result.user, displayName: pseudo };
      user.value = updatedUser;

      // 4. Créer le profil en base de données avec le pseudo
      await checkUserProfile(updatedUser, pseudo);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    await firebaseSignOut(auth);
    user.value = null;
    userProfile.value = null;
    window.location.hash = '/'; 
  };

  // On ajoute un paramètre optionnel 'forcePseudo' pour l'inscription
  const checkUserProfile = async (firebaseUser, forcePseudo = null) => {
    const docRef = doc(db, "users", firebaseUser.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const newProfile = {
        email: firebaseUser.email,
        // On sauvegarde le pseudo ici aussi par sécurité
        pseudo: forcePseudo || firebaseUser.displayName || "Explorateur",
        xp: 0,
        level: 1,
        solvedExos: [],
        badges: [],
        streak: 0,
        lastLogin: new Date().toISOString()
      };
      await setDoc(docRef, newProfile);
      userProfile.value = newProfile;
    } else {
      const data = docSnap.data();
      userProfile.value = {
        badges: [],      
        solvedExos: [],  
        xp: 0,
        streak: 0,
        ...data          
      };
    }
  };

  onMounted(() => {
    onAuthStateChanged(auth, async (u) => {
      user.value = u;
      if (u) await checkUserProfile(u);
    });
  });

  return { 
    user, 
    userProfile, 
    loginWithGoogle, 
    loginWithEmail, 
    registerWithEmail, 
    logout 
  };
}