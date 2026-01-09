<script setup>
import HeroSection from '../components/HeroSection.vue';
import CodeSection from '../components/CodeSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import CtaSection from '../components/CtaSection.vue';
import Badge from '../components/Badge.vue';
import { useAuth } from '../composables/useAuth';
import { useGame } from '../composables/useGame';

const { user, userProfile } = useAuth();
// On récupère TOUT : les infos de rang ET la liste des badges
const { userRank, solvedCount, totalExos, progressPercent, allBadges } = useGame();
</script>

<template>
  <div>
    <section v-if="user && userProfile" class="px-6 pt-32 pb-12">
      <div class="mx-auto max-w-7xl">
        <h2 class="mb-8 text-3xl font-bold font-display">
          Bonjour,
          <span class="text-cyan-400">
            {{ user.displayName || userProfile?.pseudo || user.email.split('@')[0] }}
          </span> 👋
        </h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div
            class="p-6 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-white/10 relative overflow-hidden group flex flex-col justify-between min-h-[200px]">
            <div
              class="absolute top-0 right-0 p-32 bg-purple-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/30 transition-all duration-1000">
            </div>

            <div class="relative z-10 flex items-start justify-between mb-4">
              <div>
                <h3 class="text-xs font-bold tracking-widest uppercase text-slate-400">Progression Globale</h3>
                <div class="flex items-baseline gap-2 mt-1">
                  <span class="text-4xl text-white font-display">{{ solvedCount }}</span>
                  <span class="font-mono text-sm text-slate-500">/ {{ totalExos }} exos</span>
                </div>

                <div class="mt-2 text-xs font-bold tracking-widest text-yellow-400 uppercase">
                  {{ userRank.name }}
                </div>
              </div>

              <div class="meme-coin meme-coin-lg" :class="userRank.class"></div>
            </div>

            <div class="relative z-10">
              <div class="relative w-full h-3 mb-2 overflow-hidden border rounded-full bg-white/5 border-white/5">
                <div
                  class="bg-gradient-to-r from-cyan-400 to-purple-500 h-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  :style="{ width: progressPercent + '%' }">
                  <div class="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs font-bold tracking-widest uppercase">
                <span class="text-slate-500">Avancement</span>
                <span class="text-cyan-400">{{ progressPercent }}%</span>
              </div>
            </div>
          </div>

          <div
            class="md:col-span-2 p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-white/10 flex flex-col justify-center min-h-[200px]">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold tracking-widest uppercase text-slate-400">Mes Trophées</h3>
              <span class="px-3 py-1 font-mono text-xs border rounded-full text-slate-500 bg-white/5 border-white/5">
                {{ userProfile.badges ? userProfile.badges.length : 0 }} / {{ allBadges.length }} débloqués
              </span>
            </div>

            <div class="flex gap-6 p-6 -mx-6 overflow-x-auto scrollbar-hide">
              <div class="flex gap-6 px-2">
                <Badge v-for="badge in allBadges" :key="badge.id" :badge="badge"
                  :isUnlocked="userProfile.badges && userProfile.badges.includes(badge.id)" :showTooltip="false" />
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