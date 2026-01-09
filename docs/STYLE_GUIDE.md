# 🎨 Guide de Style - PyFlow

## 1. Philosophie du Design
PyFlow utilise une esthétique **"Dark Modern Glassmorphism"**.
* **Ambiance** : Sombre, immersive, technologique.
* **Matériaux** : Verre dépoli (`backdrop-blur`), bordures subtiles (`border-white/10`), lueurs néons.
* **Formes** : Arrondies (`rounded-3xl` pour les cards, `rounded-xl` pour les boutons).

## 2. Palette de Couleurs (Tailwind)

### Backgrounds
* **Fond principal** : `bg-slate-900` ou Gradient `from-[#020617] via-[#1e3a8a] to-[#0f172a]`.
* **Surface (Verre)** : `bg-white/5` ou `bg-slate-900/50` avec `backdrop-blur-xl`.

### Accents & Gradients
* **Primaire (Action)** : Gradient `from-blue-500 to-cyan-400`.
* **Secondaire (Logic/Code)** : Gradient `from-purple-500 to-pink-500`.
* **Validation (Succès)** : `text-emerald-400` / `bg-emerald-500/20`.
* **Attention (Warning)** : `text-yellow-400`.

### Texte
* **Titres** : `text-white` (Souvent avec `font-black`).
* **Corps** : `text-slate-300` ou `text-slate-400` (jamais blanc pur pour le corps, trop agressif).
* **Liens/Hover** : `text-cyan-400`.

## 3. Typographie

* **Titres (Display)** : `Archivo Black` ou `sans-serif` (system). Pour les gros titres impactants.
* **Corps (Body)** : `Inter` ou `sans-serif`. Pour la lisibilité.
* **Code** : `JetBrains Mono` ou `Courier New`. Pour les blocs de code et terminaux.

*Note : Assurez-vous d'importer ces polices via Google Fonts dans `index.html`.*

## 4. Composants UI Standards

### Boutons
* **CTA Principal** : Gradient bleu/cyan, ombre colorée (`shadow-[0_20px_60px_rgba(...)]`), texte blanc.
    * *Classes* : `bg-gradient-to-r from-primary-blue to-primary-cyan rounded-2xl hover:scale-105 transition-all`
* **Secondaire** : Bordure transparente, fond vitré au survol.
    * *Classes* : `border border-white/10 hover:bg-white/10 rounded-2xl`

### Cards (Cartes)
Toute carte (Cours, Badge, Feature) doit respecter cette structure :
* **Bordure** : `border border-white/10`
* **Fond** : `bg-white/5` (ou `bg-slate-900/50`)
* **Effet** : `backdrop-blur-xl`
* **Hover** : `hover:bg-white/10 hover:scale-[1.02] transition-all duration-300`

### Badges & Tags
* Utiliser des fonds très transparents avec des bordures fines.
* *Exemple (Tag Débutant)* : `bg-blue-500/20 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1 text-xs`.

## 5. Animations & Micro-interactions
* **Hover** : Toujours utiliser `duration-300` pour une fluidité naturelle.
* **Glow** : Les éléments importants doivent "briller" (box-shadow coloré).
* **Pulse** : Utiliser `animate-pulse-slow` pour les éléments qui attendent une action (IA, curseur).