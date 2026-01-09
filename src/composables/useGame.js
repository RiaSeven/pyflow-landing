import { computed } from 'vue';
import { db } from '../services/firebase';
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { useAuth } from './useAuth';
// On importe les exos pour connaître le total pour le calcul du rang
import { exercices } from '../data/exos.js'; 

export function useGame() {
  const { user, userProfile } = useAuth();

  // ==========================================
  // 1. CALCULS DE PROGRESSION & RANGS
  // ==========================================
  
  const totalExos = exercices ? exercices.length : 1; // Sécurité
  
  const solvedCount = computed(() => {
    return userProfile.value?.solvedExos?.length || 0;
  });

  const progressPercent = computed(() => {
    return Math.round((solvedCount.value / totalExos) * 100);
  });

  // Logique des Rangs (Meme Coin)
  const userRank = computed(() => {
    const p = progressPercent.value;
    
    if (p >= 80) return { class: 'rank-5', name: 'Alien Master', emoji: '👽' };
    if (p >= 60) return { class: 'rank-4', name: 'Roi du Code', emoji: '👑' };
    if (p >= 40) return { class: 'rank-3', name: 'Moai Stoïque', emoji: '🗿' };
    if (p >= 20) return { class: 'rank-2', name: 'Grenouille Agile', emoji: '🐸' };
    return { class: 'rank-1', name: 'Oeuf Novice', emoji: '🥚' };
  });

  // Calcul du niveau (Formule : Niveau = Racine(XP/100))
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


  // ==========================================
  // 2. LISTE DES BADGES (TROPHÉES)
  // ==========================================
  
  const allBadges = [
    { 
      id: 'first_code', 
      name: 'Hello World', 
      icon: '👋', 
      desc: 'Valider le premier exercice',
      condition: (p) => p.solvedExos.length >= 1
    },
    { 
      id: 'streak_3', 
      name: 'On Fire', 
      icon: '🔥', 
      desc: 'Connexion 3 jours de suite',
      condition: (p) => p.streak >= 3 
    },
    { 
      id: 'level_5', 
      name: 'Initié Python', 
      icon: '🐍', 
      desc: 'Atteindre le niveau 5',
      condition: (p) => Math.floor(Math.sqrt(p.xp / 100)) + 1 >= 5
    },
    { 
      id: 'algo_master', 
      name: 'Cerveau Musclé', 
      icon: '🧠', 
      desc: 'Résoudre 10 exercices',
      condition: (p) => p.solvedExos.length >= 10 
    },
    { 
      id: 'bug_hunter', 
      name: 'Bug Hunter', 
      icon: '🐛', 
      desc: 'Trouver une erreur cachée',
      condition: (p) => false // Badge rare manuel
    },
    {
      id: 'early_adopter',
      name: 'Pionnier',
      icon: '🚀',
      desc: 'Inscrit lors de la version Bêta',
      condition: (p) => true 
    }
  ];

  // ==========================================
  // 3. ACTIONS (XP & BADGES)
  // ==========================================

  const checkBadges = async () => {
    if (!userProfile.value || !user.value) return;
    
    const newBadges = [];
    allBadges.forEach(badge => {
      // Si on n'a pas le badge ET que la condition est remplie
      if (!userProfile.value.badges.includes(badge.id) && badge.condition(userProfile.value)) {
        newBadges.push(badge.id);
      }
    });

    if (newBadges.length > 0) {
      const userRef = doc(db, "users", user.value.uid);
      await updateDoc(userRef, {
        badges: arrayUnion(...newBadges)
      });
      // Mise à jour locale
      userProfile.value.badges.push(...newBadges);
      console.log("Badges débloqués :", newBadges);
    }
  };

  const addXp = async (amount) => {
    if (!user.value) return;
    const userRef = doc(db, "users", user.value.uid);
    await updateDoc(userRef, { xp: increment(amount) });
    if(userProfile.value) userProfile.value.xp += amount;
    checkBadges();
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
    checkBadges();
  };

  return {
    // Stats
    currentLevel,
    progressToNextLevel,
    xpForNextLevel,
    solvedCount,
    totalExos,
    progressPercent,
    userRank,
    
    // Données
    allBadges,
    
    // Actions
    addXp,
    markExerciseSolved
  };
}