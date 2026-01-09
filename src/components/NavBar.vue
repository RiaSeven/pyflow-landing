<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useGame } from '../composables/useGame';
import AuthModal from './AuthModal.vue';

// CORRECTION 1 : On récupère aussi 'userProfile'
const { user, userProfile, logout } = useAuth();
const { userRank, solvedCount, totalExos } = useGame();

const isModalOpen = ref(false);
const isMobileMenuOpen = ref(false);

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleLogout = () => {
  logout();
  closeMobileMenu();
};
</script>

<template>
  <nav
    class="fixed top-0 w-full z-[100] backdrop-blur-[20px] bg-white/5 border-b border-white/10 transition-all duration-300">
    <div class="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">

      <div class="flex items-center gap-3 relative z-[50]">
        <router-link to="/" class="flex items-center gap-3 group" @click="closeMobileMenu">
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            style="background: linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%);">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span
            class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-display">
            PyFlow
          </span>
        </router-link>
      </div>

      <div class="items-center hidden gap-8 md:flex">
        <router-link to="/cours"
          class="text-sm font-medium text-white transition-colors duration-300 hover:text-cyan-400">Cours</router-link>
        <router-link to="/exercices"
          class="text-sm font-medium text-white transition-colors duration-300 hover:text-cyan-400">Exercices</router-link>

        <div v-if="user" class="flex items-center gap-4 pl-6 border-l border-white/10">
          <div class="flex items-center gap-3">
            <span class="text-sm font-bold text-white">
              {{ user.displayName || userProfile?.pseudo || user.email.split('@')[0] }}
            </span>
            <span
              class="text-xs font-bold text-cyan-400 font-mono bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
              XP: {{ solvedCount }}/{{ totalExos }}
            </span>
            <div class="meme-coin meme-coin-sm" :class="userRank.class" :title="userRank.name"></div>
          </div>

          <button @click="logout" title="Déconnexion"
            class="p-2 text-pink-400 transition-colors rounded-lg cursor-pointer hover:bg-white/10 hover:text-pink-300">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>

        <button v-else @click="isModalOpen = true"
          class="px-5 py-2 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 cursor-pointer">
          Connexion
        </button>
      </div>

      <button @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden relative z-[50] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none">
        <span class="block w-6 h-0.5 bg-white transition-all duration-300 transform origin-center"
          :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''"></span>
        <span class="block w-6 h-0.5 bg-white transition-all duration-300"
          :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
        <span class="block w-6 h-0.5 bg-white transition-all duration-300 transform origin-center"
          :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
      </button>

    </div>
  </nav>

  <Transition name="fade">
    <div v-if="isMobileMenuOpen"
      class="fixed inset-0 z-[200] w-full h-[100dvh] flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-xl">

      <button @click="closeMobileMenu"
        class="absolute top-4 right-6 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors z-[210]">
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex flex-col items-center gap-8 mb-8">
        <router-link to="/" @click="closeMobileMenu"
          class="text-3xl font-bold text-white transition-colors font-display hover:text-cyan-400">Accueil</router-link>
        <router-link to="/cours" @click="closeMobileMenu"
          class="text-3xl font-bold text-white transition-colors font-display hover:text-cyan-400">Cours</router-link>
        <router-link to="/exercices" @click="closeMobileMenu"
          class="text-3xl font-bold text-white transition-colors font-display hover:text-cyan-400">Exercices</router-link>
      </div>

      <div class="flex-shrink-0 w-16 h-1 my-6 rounded-full bg-white/10"></div>

      <div v-if="user" class="flex flex-col items-center gap-6 animate-pulse-slow">
        <div
          class="flex flex-col items-center gap-3 px-10 py-6 border shadow-2xl bg-white/5 rounded-3xl border-white/10">
          <div class="meme-coin meme-coin-lg" :class="userRank.class"></div>
          <div class="mt-2 text-center">
            <div class="mb-1 text-2xl font-bold text-white">
              {{ user.displayName || userProfile?.pseudo || user.email.split('@')[0] }}
            </div>
            <div class="font-mono text-base font-bold text-cyan-400">XP: {{ solvedCount }}/{{ totalExos }}</div>
            <div class="mt-2 text-xs tracking-widest uppercase text-slate-500">{{ userRank.name }}</div>
          </div>
        </div>

        <button @click="handleLogout"
          class="flex items-center gap-2 px-6 py-3 mt-4 text-lg font-bold text-pink-400 transition-all hover:text-pink-300 rounded-xl hover:bg-pink-500/10">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Se déconnecter
        </button>
      </div>

      <button v-else @click="isModalOpen = true; closeMobileMenu()"
        class="px-8 py-4 rounded-xl text-lg font-bold text-white shadow-[0_0_30px_rgba(34,211,238,0.4)] border border-cyan-400/30 bg-gradient-to-r from-blue-600 to-cyan-500">
        Connexion / Inscription
      </button>

    </div>
  </Transition>

  <AuthModal :isOpen="isModalOpen" @close="isModalOpen = false" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}
</style>