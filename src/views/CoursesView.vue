<script setup>
import ContentRenderer from '../components/ContentRenderer.vue';

// Exemple de contenu de cours (simulant une donnée reçue d'une API/Base de données)
const courseExample = `
## Introduction aux algorithmes

En Python, une fonction se définit avec \`def\`. Voici une fonction qui calcule une suite mathématique.

### La formule mathématique
La complexité de notre algorithme est calculée ainsi :
$$ T(n) = \\sum_{i=1}^n i = \\frac{n(n+1)}{2} $$

Si on cherche la limite quand $n \\to \\infty$, c'est une autre histoire.

### Implémentation Python

\`\`\`python
def somme_entiers(n):
    """Calcule la somme de 1 à n"""
    if n <= 0:
        return 0
    # Formule directe (O(1))
    return n * (n + 1) // 2

result = somme_entiers(10)
print(f"Le résultat est {result}")
\`\`\`
`;
</script>

<template>
  <div class="pt-32 pb-20 px-6 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl font-black mb-12 text-center leading-[1.3]">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Cours Python
        </span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div v-for="i in 3" :key="i" class="p-6 rounded-3xl bg-white/5 border border-white/10">
          <h3 class="font-bold text-white">Module {{ i }}</h3>
        </div>
      </div>

      <div class="p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-white/10 shadow-2xl">
        <div class="mb-6 pb-6 border-b border-white/10">
          <span class="text-cyan-400 text-sm font-bold uppercase tracking-wider">Démonstration du Lecteur</span>
        </div>

        <ContentRenderer :content="courseExample" />

      </div>

    </div>
  </div>
</template>