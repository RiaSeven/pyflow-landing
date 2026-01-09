import { computed } from 'vue';
import { db } from '../services/firebase';
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { useAuth } from './useAuth';
// On importe les exos pour connaître le total
import { exercices } from '../data/exos.js'; 

export function useGame() {
  const { user, userProfile } = useAuth();

  // --- Calculs de Progression ---
  
  const totalExos = exercices.length || 1; // Sécurité division par zéro
  
  const solvedCount = computed(() => {
    return userProfile.value?.solvedExos?.length || 0;
  });

  const progressPercent = computed(() => {
    return Math.round((solvedCount.value / totalExos) * 100);
  });

  // --- Logique des Rangs (Meme Coin) ---
  const userRank = computed(() => {
    const p = progressPercent.value;
    
    if (p >= 80) return { class: 'rank-5', name: 'Alien Master', emoji: '👽' };
    if (p >= 60) return { class: 'rank-4', name: 'Roi du Code', emoji: '👑' };
    if (p >= 40) return { class: 'rank-3', name: 'Moai Stoïque', emoji: '🗿' };
    if (p >= 20) return { class: 'rank-2', name: 'Grenouille Agile', emoji: '🐸' };
    return { class: 'rank-1', name: 'Oeuf Novice', emoji: '🥚' };
  });

  // --- Logique existante (XP, Badges...) ---
  
  // (Garde ici ta liste allBadges que nous avons faite à l'étape précédente)
  // ... Je ne la remets pas pour ne pas surcharger le message, mais garde-la ! ...
  const allBadges = [
     // ... tes badges ...
  ];

  const addXp = async (amount) => {
    if (!user.value) return;
    const userRef = doc(db, "users", user.value.uid);
    await updateDoc(userRef, { xp: increment(amount) });
    if(userProfile.value) userProfile.value.xp += amount;
  };

  const markExerciseSolved = async (exoId) => {
    if (!user.value) return;
    if (userProfile.value.solvedExos.includes(exoId)) return;

    const userRef = doc(db, "users", user.value.uid);
    await updateDoc(userRef, {
      solvedExos: arrayUnion(exoId),
      xp: increment(50)
    });
    userProfile.value.solvedExos.push(exoId);
    userProfile.value.xp += 50;
  };

  return {
    solvedCount,
    totalExos,
    progressPercent,
    userRank, // <-- On exporte le rang calculé
    allBadges,
    addXp,
    markExerciseSolved
  };
}