<script setup>
import HeroSection from '../components/HeroSection.vue';
import CodeSection from '../components/CodeSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import CtaSection from '../components/CtaSection.vue';
import { useAuth } from '../composables/useAuth';
import { useGame } from '../composables/useGame';

const { user, userProfile } = useAuth();
const { currentLevel, progressToNextLevel, allBadges } = useGame();
</script>

<template>
  <div>
    <section v-if="user && userProfile" class="px-6 pt-32 pb-12">
      <div class="mx-auto max-w-7xl">
        <h2 class="mb-8 text-3xl font-bold">Bonjour, <span class="text-cyan-400">{{ user.displayName }}</span> 👋</h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div
            class="relative p-6 overflow-hidden border rounded-3xl backdrop-blur-xl bg-slate-900/50 border-white/10 group">
            <div
              class="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 group-hover:opacity-100">
            </div>

            <div class="relative z-10 flex items-center justify-between mb-4">
              <span class="text-sm font-bold uppercase text-slate-400">Niveau Actuel</span>
              <span class="text-3xl font-black text-white">{{ currentLevel }}</span>
            </div>

            <div class="w-full h-4 mb-2 overflow-hidden rounded-full bg-slate-800">
              <div class="h-full transition-all duration-1000 bg-gradient-to-r from-blue-500 to-cyan-400"
                :style="{ width: progressToNextLevel + '%' }"></div>
            </div>
            <div class="text-xs text-right text-slate-500">{{ Math.round(progressToNextLevel) }}% vers niveau {{
              currentLevel + 1 }}</div>
          </div>

          <div class="p-6 border md:col-span-2 rounded-3xl backdrop-blur-xl bg-slate-900/50 border-white/10">
            <h3 class="mb-4 text-sm font-bold uppercase text-slate-400">Derniers Badges</h3>
            <div class="flex gap-4 pb-2 overflow-x-auto">
              <div v-for="badge in allBadges" :key="badge.id"
                class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 text-2xl transition-all duration-300 border cursor-pointer rounded-2xl group"
                :class="userProfile.badges && userProfile.badges.includes(badge.id)
                  ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-white/5 border-white/5 text-slate-600 grayscale opacity-50'">

                {{ badge.icon }}

                <div
                  class="absolute px-3 py-1 mb-2 text-xs transition-opacity -translate-x-1/2 border rounded-lg opacity-0 pointer-events-none bottom-full left-1/2 bg-black/90 whitespace-nowrap group-hover:opacity-100 border-white/10">
                  {{ badge.name }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <HeroSection v-else />

    <CodeSection />
    <FeaturesSection />
    <CtaSection />
  </div>
</template>