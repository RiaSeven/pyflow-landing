# 🛠 Guide Technique - PyFlow

## 1. Vue d'ensemble
PyFlow est une Single Page Application (SPA) éducative permettant l'apprentissage de Python. Elle intègre un éditeur de code, un interpréteur Python dans le navigateur (WebAssembly) et un système de gamification.

## 2. Stack Technique (Cœur)

* **Framework Frontend** : [Vue.js 3](https://vuejs.org/) (Composition API, `<script setup>`)
* **Build Tool** : [Vite](https://vitejs.dev/) (Pour un démarrage instantané et HMR)
* **Langage** : JavaScript (ES Modules) / HTML5 / CSS3
* **Routing** : `vue-router@4`

## 3. UI & Styling

* **Framework CSS** : [Tailwind CSS v3](https://tailwindcss.com/)
* **Préprocesseur** : PostCSS + Autoprefixer
* **Icônes** : SVG natifs (Optimisés)
* **Design System** : "Glassmorphism" (Utilisation intensive de flous, transparences et bordures fines).

## 4. Services & Logique Métier

### A. Exécution de Code (Client-side)
* **Moteur Python** : [Pyodide](https://pyodide.org/) (Python compilé en WebAssembly). Permet d'exécuter du code Python directement dans le navigateur sans serveur backend pour l'exécution.
* **Éditeur** : Monaco Editor (via `@guolao/vue-monaco-editor` ou intégration directe) pour l'expérience type VS Code.

### B. Backend & Data (Serverless)
* **Plateforme** : Firebase (Google)
* **Authentification** : Firebase Auth (Google Provider + Email/Pass)
* **Base de données** : Cloud Firestore (NoSQL). Stocke les profils utilisateurs, l'XP, et les badges.

### C. Rendu de Contenu
* **Markdown** : `markdown-it` pour transformer les cours écrits en MD vers HTML.
* **Mathématiques** : `katex` + `markdown-it-texmath` pour le rendu LaTeX ($$E=mc^2$$).
* **Syntax Highlighting** : `highlight.js` avec le thème *Atom One Dark*.

## 5. Architecture du Dossier `src/`

Nous suivons le pattern **Services / Composables** :

* `components/` : Éléments visuels réutilisables (Boutons, Cards, Navbar).
* `views/` : Les pages principales (Home, Cours, Exercices).
* `services/` : Logique pure, indépendante de Vue (ex: config Firebase, chargement Pyodide).
* `composables/` : Logique réactive (Hooks) commençant par `use...` (ex: `useAuth`, `useGame`).
* `data/` : Données statiques (Liste des cours, énoncés des exos).

## 6. Installation et Démarrage

Pour éviter les erreurs de dépendances manquantes, voici la procédure standard :

```bash
# 1. Installer les dépendances (lit package.json)
npm install

# 2. Installer les modules spécifiques (si ajoutés récemment)
npm install firebase vue-router markdown-it katex highlight.js

# 3. Lancer le serveur de développement
npm run dev

# 4. Construire pour la production
npm run build