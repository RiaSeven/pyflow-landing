<template>
  <div class="pt-32 pb-20 px-6 min-h-screen flex flex-col">
    <div class="max-w-7xl mx-auto w-full flex-grow flex flex-col lg:flex-row gap-6">

      <div class="lg:w-1/3 flex flex-col gap-6">
        <div class="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 flex-grow">
          <h2 class="text-2xl font-bold mb-4 text-cyan-400">Exercice 1 : Hello World</h2>
          <p class="text-slate-300 leading-relaxed mb-6">
            Créez une variable appelée <code>message</code> contenant le texte "Hello PyFlow", puis affichez-la.
          </p>
          <div class="bg-slate-900/50 p-4 rounded-xl border border-white/5 font-mono text-sm text-slate-400">
            Résultat attendu :<br>
            <span class="text-green-400">Hello PyFlow</span>
          </div>
        </div>

        <div class="p-6 rounded-3xl backdrop-blur-xl bg-black/40 border border-white/10 h-48 font-mono text-sm">
          <div class="text-slate-500 border-b border-white/10 pb-2 mb-2">Terminal</div>
          <div class="text-green-400">> Prêt à exécuter...</div>
        </div>
      </div>

      <div class="lg:w-2/3 relative group">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity">
        </div>
        <div
          class="relative w-full h-[600px] rounded-3xl backdrop-blur-xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl flex flex-col">

          <div class="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-white/5">
            <span class="text-sm text-slate-300">script.py</span>
            <button
              class="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all">
              ▶ Exécuter
            </button>
          </div>

          <div class="flex-grow flex items-center justify-center text-slate-500">
            [ Zone réservée pour Monaco Editor ]
          </div>
        </div>
      </div>

    </div>
  </div>
</template>