<script setup>
const features = [
  {
    title: "Code Intelligent",
    desc: "Autocomplétion IA qui comprend votre contexte",
    iconColorClass: "from-blue-500 to-cyan-400",
    progressClass: "from-blue-500 to-cyan-400",
    path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    title: "Performance Extrême",
    desc: "Exécution ultra-rapide avec optimisation JIT",
    iconColorClass: "from-yellow-500 to-orange-500",
    progressClass: "from-yellow-500 to-orange-500",
    path: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Sécurité Renforcée",
    desc: "Détection automatique des vulnérabilités",
    iconColorClass: "from-purple-500 to-pink-500",
    progressClass: "from-purple-500 to-pink-500",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
];
</script>

<template>
  <section id="features" class="px-6 py-24">
    <h2 class="mb-16 text-5xl font-black text-center md:text-6xl">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
        Devenez un Expert
      </span>
    </h2>

    <div class="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 max-w-7xl">
      <div v-for="(feature, idx) in features" :key="idx"
        :class="['p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-500 cursor-pointer group hover:bg-white/10 hover:scale-105 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)]', idx === 0 ? 'md:col-span-2' : '']">

        <div
          class="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 rounded-2xl group-hover:rotate-12 bg-gradient-to-br"
          :class="feature.iconColorClass">
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.path" />
          </svg>
        </div>

        <h3 class="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
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