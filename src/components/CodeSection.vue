<template>
  <section class="py-24 px-6 relative">
    <div class="max-w-6xl mx-auto relative group">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-4">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Code Sublime
        </span>
      </h2>
      <p class="text-xl text-slate-300 text-center mb-16">Expérience de développement redéfinie</p>

      <div
        class="absolute inset-[-4px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500">
      </div>

      <div
        class="relative backdrop-blur-[40px] bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
        <div class="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-slate-800/50">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span class="text-sm text-slate-400 ml-4">main.py</span>
        </div>

        <pre class="p-8 overflow-x-auto font-mono text-sm md:text-base leading-relaxed text-slate-300"><code><span class="text-purple-400"># PyFlow - Smart Python Development</span>
<span class="text-blue-400">import</span> pyflow <span class="text-blue-400">as</span> pf

<span class="text-yellow-400">@pf.optimize</span>(level=<span class="text-green-400">"max"</span>)
<span class="text-blue-400">async def</span> <span class="text-yellow-200">analyze_data</span>(dataset):
    <span class="text-slate-500">"""AI-powered data analysis"""</span>
    insights = <span class="text-blue-400">await</span> pf.ai.analyze(
        data=dataset,
        visualize=<span class="text-blue-400">True</span>,
        optimize=<span class="text-blue-400">True</span>
    )
    <span class="text-blue-400">return</span> insights.summarize()

<span class="text-slate-500"># Run with one line</span>
results = <span class="text-blue-400">await</span> analyze_data(my_data)</code></pre>

        <div
          class="absolute bottom-6 right-6 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg animate-pulse-slow"
          style="background: linear-gradient(90deg, rgba(34, 211, 238, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%); backdrop-filter: blur(20px);">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span class="text-sm font-medium text-white">AI optimizing your code...</span>
        </div>
      </div>
    </div>
  </section>
</template>