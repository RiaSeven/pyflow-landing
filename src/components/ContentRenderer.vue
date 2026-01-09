<script setup>
import { computed } from 'vue';
import MarkdownIt from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import hljs from 'highlight.js';

// Configuration du parseur
const md = new MarkdownIt({
  html: true, // Autorise le HTML dans le markdown
  linkify: true,
  typographer: true,
  // Fonction de coloration syntaxique automatique
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>';
      } catch (__) { }
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

// Configuration des Maths ($ et $$)
md.use(texmath, {
  engine: katex,
  delimiters: 'dollars', // Supporte $...$ (inline) et $$...$$ (block)
  katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
});

const props = defineProps({
  content: {
    type: String,
    required: true
  }
});

// Transformation du Markdown en HTML
const renderedContent = computed(() => {
  return md.render(props.content);
});
</script>

<template>
  <div class="markdown-body text-slate-300 leading-relaxed" v-html="renderedContent"></div>
</template>

<style>
/* Styles spécifiques pour intégrer le contenu généré dans ton design */

/* Code Blocks */
.markdown-body pre {
  background: #1e1e1e !important;
  /* Fond sombre éditeur */
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow-x: auto;
}

/* Inline Code (`var`) */
.markdown-body :not(pre)>code {
  background: rgba(59, 130, 246, 0.15);
  /* Bleu très léger */
  color: #22d3ee;
  /* Cyan */
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.9em;
}

/* Maths rendering fixes */
.markdown-body .katex {
  font-size: 1.1em;
  color: #e2e8f0;
  /* Slate-200 */
}

/* Titres dans le cours */
.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  color: white;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.markdown-body h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.markdown-body p {
  margin-bottom: 1rem;
}

.markdown-body ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
</style>