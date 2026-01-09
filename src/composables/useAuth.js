import { ref, onMounted } from 'vue';
import { auth, db } from '../services/firebase';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut as firebaseSignOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const user = ref(null);
const userProfile = ref(null); // Pour stocker les données Firestore (XP, niveau...)

export function useAuth() {
  
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // Après connexion, on vérifie/crée le profil utilisateur
      await checkUserProfile(result.user);
    } catch (error) {
      console.error("Erreur connexion:", error);
    }
  };

  const logout = async () => {
    await firebaseSignOut(auth);
    user.value = null;
    userProfile.value = null;
  };

  const checkUserProfile = async (firebaseUser) => {
    const docRef = doc(db, "users", firebaseUser.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      // Cas : Nouvel utilisateur, on crée le profil
      const newProfile = {
        email: firebaseUser.email,
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
      // Cas : Utilisateur existant
      const data = docSnap.data();
      
      // On fusionne les données Firebase avec des valeurs par défaut
      // pour éviter les plantages si la base de données est incomplète
      userProfile.value = {
        badges: [],      // Sécurité anti-crash
        solvedExos: [],  // Sécurité anti-crash
        xp: 0,
        streak: 0,
        ...data          // On écrase les défauts avec les vraies données récupérées
      };
    }
  };

  // Écouteur global d'état (se lance une seule fois)
  onMounted(() => {
    onAuthStateChanged(auth, async (u) => {
      user.value = u;
      if (u) await checkUserProfile(u);
    });
  });

  return { user, userProfile, loginWithGoogle, logout };
}