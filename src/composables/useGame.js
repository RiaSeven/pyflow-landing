import { computed } from 'vue';
import { db } from '../services/firebase';
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { useAuth } from './useAuth';

export function useGame() {
  const { user, userProfile } = useAuth();

  // --- Logique de Niveau ---
  // Formule : Niveau = racine carrée de (XP / 100)
  const currentLevel = computed(() => {
    if (!userProfile.value) return 1;
    return Math.floor(Math.sqrt(userProfile.value.xp / 100)) + 1;
  });

  const xpForNextLevel = computed(() => {
    const nextLvl = currentLevel.value + 1;
    return Math.pow(nextLvl - 1, 2) * 100;
  });

  const progressToNextLevel = computed(() => {
    if (!userProfile.value) return 0;
    const currentLvlXpBase = Math.pow(currentLevel.value - 1, 2) * 100;
    const nextLvlXpBase = Math.pow(currentLevel.value, 2) * 100;
    const range = nextLvlXpBase - currentLvlXpBase;
    const progress = userProfile.value.xp - currentLvlXpBase;
    return Math.min(100, Math.max(0, (progress / range) * 100));
  });

  // --- Actions ---

  const addXp = async (amount) => {
    if (!user.value) return;
    
    const userRef = doc(db, "users", user.value.uid);
    await updateDoc(userRef, {
      xp: increment(amount)
    });
    
    // Mise à jour locale optimiste
    if(userProfile.value) userProfile.value.xp += amount;
    
    checkBadges(); // Vérifie si on a débloqué un badge
  };

  const markExerciseSolved = async (exoId) => {
    if (!user.value) return;
    
    // Vérifie si déjà résolu pour ne pas donner l'XP deux fois
    if (userProfile.value.solvedExos.includes(exoId)) return;

    const userRef = doc(db, "users", user.value.uid);
    await updateDoc(userRef, {
      solvedExos: arrayUnion(exoId),
      xp: increment(50) // +50 XP par exo
    });

    // Update local
    userProfile.value.solvedExos.push(exoId);
    userProfile.value.xp += 50;
  };

  // --- Badges ---
  // Définition des badges (extrait de ton code)
  const allBadges = [
    { id: 'first_code', name: 'Hello World', icon: '👋', condition: (p) => p.xp >= 10 },
    { id: 'level_5', name: 'Initié Python', icon: '🐍', condition: (p) => p.xp >= 2500 }, // Niv 5 approx
    { id: 'streak_3', name: 'Régulier', icon: '🔥', condition: (p) => p.streak >= 3 },
  ];

  const checkBadges = async () => {
    if (!userProfile.value) return;
    
    const newBadges = [];
    allBadges.forEach(badge => {
      if (!userProfile.value.badges.includes(badge.id) && badge.condition(userProfile.value)) {
        newBadges.push(badge.id);
      }
    });

    if (newBadges.length > 0) {
      const userRef = doc(db, "users", user.value.uid);
      await updateDoc(userRef, {
        badges: arrayUnion(...newBadges)
      });
      // Notification ou Toast ici : "Nouveau badge débloqué !"
      console.log("Badges débloqués :", newBadges);
    }
  };

  return {
    currentLevel,
    progressToNextLevel,
    xpForNextLevel,
    addXp,
    markExerciseSolved,
    allBadges
  };
}