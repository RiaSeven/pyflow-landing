let pyodideInstance = null;

export const pyodideService = {
  async load() {
    if (pyodideInstance) return pyodideInstance;
    
    console.log("Chargement de Pyodide...");
    // On suppose que le script CDN est dans index.html ou chargé dynamiquement
    // Si tu utilises npm : import { loadPyodide } from "pyodide";
    pyodideInstance = await loadPyodide(); 
    return pyodideInstance;
  },

  async runCode(code, context = {}) {
    const py = await this.load();
    
    // Redirection de la sortie standard (print)
    let output = [];
    py.setStdout({ batched: (msg) => output.push(msg) });

    try {
      // On injecte les variables de contexte (ex: variables prédéfinies)
      for (const [key, value] of Object.entries(context)) {
        py.globals.set(key, value);
      }
      
      const result = await py.runPythonAsync(code);
      return { success: true, result, output: output.join('\n') };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};