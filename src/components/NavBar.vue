<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useGame } from '../composables/useGame';
import AuthModal from './AuthModal.vue'; // On importe la modale

const { user, logout } = useAuth();
const { currentLevel, progressToNextLevel, allBadges } = useGame(); // Pour récupérer les infos de jeu

const isModalOpen = ref(false);
</script>

<template>
  <nav class="fixed top-0 w-full z-[100] backdrop-blur-[20px] bg-white/5 border-b border-white/10">
    <div class="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">

      <div class="flex items-center gap-3">
        <router-link to="/" class="flex items-center gap-3 group">
          <div
            class="flex items-center justify-center w-10 h-10 transition-transform duration-300 rounded-xl group-hover:rotate-12"
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

          <div class="flex flex-col items-end">
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-white">{{ user.displayName || user.email.split('@')[0] }}</span>
              <span class="text-xs bg-blue-500/20 text-blue-300 px-1.5 rounded border border-blue-500/30">Niv. {{
                currentLevel }}</span>
            </div>
            <div class="w-24 h-1 mt-1 overflow-hidden rounded-full bg-slate-800">
              <div class="h-full bg-cyan-400" :style="{ width: progressToNextLevel + '%' }"></div>
            </div>
          </div>

          <button @click="logout" title="Déconnexion"
            class="p-2 transition-colors rounded-lg hover:bg-white/10 text-slate-400 hover:text-red-400">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
  </nav>

  <AuthModal :isOpen="isModalOpen" @close="isModalOpen = false" />
</template>