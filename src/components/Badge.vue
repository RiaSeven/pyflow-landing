<script setup>
defineProps({
  badge: Object,
  isUnlocked: Boolean
});
</script>

<template>
  <div class="relative flex flex-col items-center group">

    <div
      class="relative flex items-center justify-center w-20 h-20 transition-all duration-500 ease-out transform rounded-2xl"
      :class="isUnlocked
        ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-110 hover:-rotate-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] cursor-pointer'
        : 'bg-white/5 border border-white/5 opacity-40 grayscale cursor-not-allowed'">

      <div v-if="isUnlocked"
        class="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 group-hover:opacity-100">
      </div>

      <span
        class="z-10 text-4xl transition-transform duration-300 transform select-none filter drop-shadow-lg group-hover:scale-110">
        {{ badge.icon }}
      </span>

      <div v-if="!isUnlocked" class="absolute p-1 border rounded-full -top-2 -right-2 bg-slate-900 border-white/10">
        <svg class="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>

    </div>

    <span class="mt-3 text-xs font-bold tracking-wider uppercase transition-colors duration-300"
      :class="isUnlocked ? 'text-cyan-400' : 'text-slate-600'">
      {{ badge.name }}
    </span>

    <div
      class="absolute z-50 px-3 py-2 mb-3 text-xs text-white transition-all duration-300 translate-y-2 border rounded-lg opacity-0 pointer-events-none bottom-full bg-black/90 backdrop-blur-md border-white/20 whitespace-nowrap group-hover:opacity-100 group-hover:translate-y-0">
      {{ badge.desc }}
      <div class="absolute -translate-x-1/2 border-8 border-transparent top-full left-1/2 border-t-black/90"></div>
    </div>

  </div>
</template>