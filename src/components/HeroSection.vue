<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const gridPattern = ref(null);

const handleScroll = () => {
  if (gridPattern.value) {
    const scrollY = window.scrollY;
    gridPattern.value.style.transform = `perspective(500px) rotateX(60deg) translateY(${scrollY * 0.5}px)`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 pb-8 px-6 overflow-hidden">
    <div class="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
      <div ref="gridPattern" class="absolute inset-0 origin-top grid-pattern"></div>
    </div>

    <div class="max-w-7xl relative z-10 text-center">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 backdrop-blur-md mb-8 animate-pulse-slow"
        style="background: linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(34, 211, 238, 0.2) 100%);">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        <span class="text-sm text-cyan-400">New: AI-Powered Debugging 2025</span>
      </div>

      <h1 class="text-6xl md:text-8xl font-black leading-[1.3] mb-6">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-pulse-slow">
          Python
        </span><br>
        <span class="shadow-glow">Réinventé</span>
      </h1>

      <p class="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        L'IDE Python nouvelle génération propulsé par l'IA.
        <span class="font-semibold text-cyan-400">Codez 10x plus vite</span>, détectez les bugs avant qu'ils n'existent.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button
          class="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(34,211,238,0.5)] border-none cursor-pointer"
          style="background: linear-gradient(90deg, #2563eb 0%, #0891b2 100%);">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Démarrer gratuitement
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <button
          class="px-8 py-4 rounded-2xl font-bold text-lg text-white border-2 border-slate-700 bg-transparent hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300 cursor-pointer">
          Voir la démo
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        <div v-for="(stat, index) in stats" :key="index"
          class="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
          <div class="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            {{ stat.value }}
          </div>
          <div class="text-sm text-slate-400 mt-1">{{ stat.label }}</div>
        </div>
      </div>

      <div class="animate-bounce-slow inline-block">
        <svg width="32" height="32" fill="none" stroke="#22d3ee" opacity="0.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { value: '500K+', label: 'Développeurs' },
        { value: '99.9%', label: 'Uptime' },
        { value: '10x', label: 'Plus rapide' },
        { value: '4.9/5', label: 'Rating' }
      ]
    }
  }
}
</script>

<style scoped>
/* Ce pattern spécifique est difficile à reproduire purement avec des classes utilitaires Tailwind */
.grid-pattern {
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(60deg);
}

.shadow-glow {
  text-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
}
</style>