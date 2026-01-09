<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { courseData } from '../data/cours.js';
import hljs from 'highlight.js';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/dist/contrib/auto-render';

// --- ÉTAT ---
const activePartId = ref(0); // ID du cours actuel
const openCategories = ref([]); // Liste des catégories ouvertes (ex: ['Introduction'])

// --- DONNÉES STRUCTURÉES (Group By Category) ---
const groupedCourses = computed(() => {
  const groups = {};
  courseData.forEach(part => {
    if (!groups[part.category]) {
      groups[part.category] = [];
    }
    groups[part.category].push(part);
  });
  return groups;
});

// --- COURS ACTUEL ---
const currentPart = computed(() => {
  return courseData.find(c => c.id === activePartId.value) || courseData[0];
});

// --- NAVIGATION ---
const hasNext = computed(() => activePartId.value < courseData.length - 1);
const hasPrev = computed(() => activePartId.value > 0);

const selectPart = (id) => {
  activePartId.value = id;
  // Scroll doux vers le haut
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const nextPart = () => {
  if (hasNext.value) selectPart(activePartId.value + 1);
};

const prevPart = () => {
  if (hasPrev.value) selectPart(activePartId.value - 1);
};

// --- LOGIQUE ACCORDÉON ---
const toggleCategory = (category) => {
  if (openCategories.value.includes(category)) {
    openCategories.value = openCategories.value.filter(c => c !== category);
  } else {
    openCategories.value.push(category);
  }
};

// --- SYNCHRONISATION & RENDU ---

// Fonction pour colorer le code et afficher les maths
const renderRichContent = () => {
  nextTick(() => {
    // 1. Highlight.js
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
    // 2. KaTeX (Maths)
    const contentBox = document.getElementById('course-content');
    if (contentBox) {
      renderMathInElement(contentBox, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ]
      });
    }
  });
};

// Observateur : Quand on change de cours, on ouvre la bonne catégorie et on relance le rendu
watch(activePartId, (newId) => {
  const part = courseData.find(c => c.id === newId);
  if (part && !openCategories.value.includes(part.category)) {
    openCategories.value.push(part.category);
  }
  renderRichContent();
}, { immediate: true });

onMounted(() => {
  // Ouvre la première catégorie au démarrage
  if (currentPart.value) {
    openCategories.value.push(currentPart.value.category);
  }
  renderRichContent();
});
</script>

<template>
  <div class="min-h-screen bg-[#0A0F1E] flex flex-col md:flex-row pt-20 h-screen overflow-hidden">

    <aside
      class="z-40 flex flex-col w-full h-full overflow-hidden bg-transparent border-r md:w-80 border-white/5 shrink-0">
      <div class="p-6 border-b border-white/5 bg-[#0A0F1E] shrink-0">
        <h2 class="text-xl tracking-widest text-white uppercase font-display">Sommaire</h2>
      </div>

      <nav class="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">

        <div v-for="(parts, category) in groupedCourses" :key="category" class="pb-2 border-b border-white/5">

          <button @click="toggleCategory(category)"
            class="flex items-center justify-between w-full p-3 text-left transition-colors rounded-lg text-slate-300 hover:text-white group hover:bg-white/5">
            <span class="text-sm font-bold tracking-wider uppercase font-display">{{ category }}</span>
            <svg class="w-4 h-4 transition-transform duration-300 text-slate-500 group-hover:text-cyan-400"
              :class="openCategories.includes(category) ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-show="openCategories.includes(category)" class="pl-2 mt-1 space-y-1">
            <button v-for="part in parts" :key="part.id" @click="selectPart(part.id)"
              class="w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-200 border-l-2" :class="activePartId === part.id
                ? 'bg-blue-500/10 text-cyan-400 border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'">
              {{ part.title }}
            </button>
          </div>
        </div>

      </nav>
    </aside>

    <main
      class="flex-1 flex flex-col h-full min-w-0 bg-[#0A0F1E] relative overflow-y-auto custom-scrollbar scroll-smooth">

      <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none">
      </div>

      <div class="z-10 flex-1 w-full max-w-4xl p-6 mx-auto md:p-12">

        <div class="mb-6">
          <span
            class="inline-block px-3 py-1 text-xs font-bold tracking-widest text-blue-400 uppercase border rounded-full bg-blue-500/10 border-blue-500/20">
            {{ currentPart.category }}
          </span>
        </div>

        <h1 class="mb-8 text-3xl font-black leading-tight text-white md:text-5xl font-display">
          {{ currentPart.title }}
        </h1>

        <article id="course-content" class="prose-custom" v-html="currentPart.content">
        </article>

        <div class="flex items-center justify-between pt-12 mt-16 border-t border-white/10">

          <button @click="prevPart" :disabled="!hasPrev"
            class="flex items-center gap-3 px-6 py-3 transition-all border rounded-xl border-white/10 group disabled:opacity-0 disabled:pointer-events-none"
            :class="hasPrev ? 'hover:bg-white/5 text-slate-300 hover:text-white' : ''">
            <span class="transition-transform group-hover:-translate-x-1">←</span>
            <div class="text-left">
              <div class="text-xs uppercase text-slate-500">Précédent</div>
              <div class="font-bold" v-if="hasPrev">{{ courseData[activePartId - 1].title }}</div>
            </div>
          </button>

          <button @click="nextPart" :disabled="!hasNext"
            class="flex items-center gap-3 px-6 py-3 text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 group disabled:opacity-50 disabled:grayscale"
            :class="hasNext ? 'hover:scale-105 hover:shadow-cyan-500/25' : ''">
            <div class="text-right">
              <div class="text-xs text-blue-100 uppercase">Suivant</div>
              <div class="font-bold" v-if="hasNext">{{ courseData[activePartId + 1].title }}</div>
            </div>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </button>

        </div>

        <div class="h-24"></div>
      </div>
    </main>
  </div>
</template>