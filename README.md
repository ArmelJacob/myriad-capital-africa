# Myriad Capital Africa — Site v2 (refonte éditoriale, réf. Meridiam)

Site multi-pages React + Vite + React Router, bilingue FR/EN.

## Structure
- `src/content.js`   ← TOUT le contenu texte (FR + EN). C'est le seul fichier à modifier pour changer un texte.
- `src/styles.css`   ← charte graphique (navy #121F30, or #795C20, beige #F5F3EF)
- `src/ui.jsx`       ← navigation, footer, motif cercles, animations
- `src/pages/`       ← les 6 pages : Home, About, Services, Partners, Team, Contact
- `vercel.json`      ← indispensable : redirige toutes les routes vers index.html (routing SPA)

## Déploiement (workflow habituel GitHub → Vercel)
1. Dans le repo GitHub existant : remplacer les fichiers par ceux-ci
   (garder `public/logo.png` existant — le site l'utilise pour la nav et le favicon).
2. Commit + push → Vercel redéploie automatiquement.

## À VALIDER avant mise en ligne (recherchez "À VALIDER" dans src/content.js)
- Les 3 chiffres clés du bandeau d'accueil
- L'email de contact (contact@myriadcapitalafrica.com par défaut)
- Les bios de l'équipe (rédactions proposées, à ajuster)

## Développement local
npm install
npm run dev
