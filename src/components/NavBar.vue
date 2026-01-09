<script setup>
// Navigation logic
</script>

<template>
  <nav class="fixed top-0 w-full z-[100] backdrop-blur-[20px] bg-white/5 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 hover:rotate-12"
          style="background: linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%);">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          PyFlow
        </span>
      </div>

      <div class="hidden md:flex items-center gap-8">
        <router-link to="/"
          class="text-sm text-white hover:text-cyan-400 transition-colors duration-300">Accueil</router-link>
        <router-link to="/cours"
          class="text-sm text-white hover:text-cyan-400 transition-colors duration-300">Cours</router-link>
        <router-link to="/exercices"
          class="text-sm text-white hover:text-cyan-400 transition-colors duration-300">Exercices</router-link>
        <button
          class="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(34,211,238,0.5)] border-none cursor-pointer"
          style="background: linear-gradient(90deg, #2563eb 0%, #0891b2 100%);">
          Get Started
        </button>
      </div>
    </div>
  </nav>
</template>