<script setup>
import { useGame } from '../composables/useGame';
import Badge from './Badge.vue';

const { allBadges } = useGame();

const features = [
  {
    title: "Performance Extrême",
    desc: "Exécution ultra-rapide avec optimisation JIT via Pyodide.",
    iconColorClass: "from-yellow-500 to-orange-500",
    progressClass: "from-yellow-500 to-orange-500",
    path: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Sécurité Renforcée",
    desc: "Détection automatique des vulnérabilités.",
    iconColorClass: "from-purple-500 to-pink-500",
    progressClass: "from-purple-500 to-pink-500",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
];
</script>

<template>
  <section id="features" class="relative px-6 py-24 overflow-hidden">
    <div
      class="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none">
    </div>

    <h2 class="text-4xl md:text-5xl font-display font-black text-center mb-16 leading-[1.3]">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
        Pourquoi PyFlow ?
      </span>
    </h2>

    <div class="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 max-w-7xl">

      <div
        class="md:col-span-2 p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-white/10 relative group hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500">

        <div class="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
          <div
            class="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-colors">
          </div>
        </div>

        <div class="relative z-10 flex flex-col items-center gap-8 md:flex-row">

          <div class="flex-1 text-center md:text-left">
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 mx-auto md:mx-0 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <span class="text-3xl">🏆</span>
            </div>
            <h3 class="mb-3 text-2xl font-bold text-white font-display">Système de Récompenses</h3>
            <p class="mb-4 text-lg text-slate-400">
              L'apprentissage ne doit pas être ennuyeux. Débloquez des trophées uniques en codant.
            </p>
            <p class="text-sm font-bold tracking-widest uppercase text-cyan-400 animate-pulse">
              Passez la souris sur les badges !
            </p>
          </div>

          <div class="relative flex flex-wrap justify-center flex-1 gap-4">
            <div
              class="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl">
            </div>

            <Badge v-for="badge in allBadges" :key="badge.id" :badge="badge" :isUnlocked="false"
              class="transition-transform duration-300 transform hover:scale-110" />
          </div>

        </div>

        <div class="relative z-10 h-1 mt-8 overflow-hidden rounded-full bg-slate-800">
          <div
            class="h-full w-0 transition-[width] duration-1000 ease-out group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-400">
          </div>
        </div>

      </div>

      <div v-for="(feature, idx) in features" :key="idx"
        class="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-500 cursor-pointer group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">

        <div
          class="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 rounded-2xl group-hover:rotate-12 bg-gradient-to-br"
          :class="feature.iconColorClass">
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.path" />
          </svg>
        </div>

        <h3 class="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400 font-display">
          {{ feature.title }}
        </h3>
        <p class="text-lg text-slate-400">{{ feature.desc }}</p>

        <div class="h-1 mt-6 overflow-hidden rounded-full bg-slate-800">
          <div class="h-full w-0 transition-[width] duration-1000 ease-out group-hover:w-full bg-gradient-to-r"
            :class="feature.progressClass"></div>
        </div>
      </div>

    </div>
  </section>
</template>