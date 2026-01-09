import 'katex/dist/katex.min.css';
import 'highlight.js/styles/atom-one-dark.css';
import { createApp } from 'vue'
import './style.css'
import 'highlight.js/styles/atom-one-dark.css'
import App from './App.vue'
import router from './router' // Import du routeur

createApp(App)
  .use(router) // Utilisation du routeur
  .mount('#app')