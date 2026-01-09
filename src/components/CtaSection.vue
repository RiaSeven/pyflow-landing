<template>
  <section class="py-24 px-6 relative">
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[60px]"></div>

      <div
        class="relative backdrop-blur-[40px] bg-slate-900/50 border-2 border-cyan-400/30 rounded-3xl p-12 shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
        <h2 class="text-5xl md:text-6xl font-black mb-6 shadow-glow">
          Prêt à coder différemment ?
        </h2>
        <p class="text-xl text-slate-300 mb-8">
          Rejoignez les 500,000+ développeurs qui ont adopté PyFlow
        </p>

        <button
          class="inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_60px_rgba(34,211,238,0.5)] border-none cursor-pointer"
          style="background: linear-gradient(90deg, #22d3ee 0%, #3b82f6 100%);">
          Commencer maintenant
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <p class="text-sm text-slate-500 mt-6">Gratuit pour toujours · Pas de carte bancaire</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-glow {
  text-shadow: 0 0 30px rgba(34, 211, 238, 0.6);
}
</style>