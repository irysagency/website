# IRYS AGENCY — Site Web V1

## Voir le site en local

Double-clique sur `index.html` — ça s'ouvre directement dans ton navigateur.

## Mettre en ligne sur Vercel (gratuit)

1. Va sur **vercel.com** et crée un compte (ou connecte-toi avec GitHub/Google)
2. Clique sur **"Add New..." → "Project"**
3. En bas de la page, clique sur **"Import Third-Party Git Repository"** ou utilise **"Upload"** si disponible
4. **Méthode la plus simple** : utilise le CLI Vercel
   - Installe le CLI : `npm install -g vercel`
   - Ouvre un terminal dans ce dossier
   - Tape `vercel` et suis les instructions
5. Ton site est en ligne !

### Alternative encore plus simple : Vercel via GitHub

1. Crée un compte GitHub (github.com)
2. Crée un nouveau "repository" et uploade tous les fichiers de ce dossier
3. Sur Vercel, connecte ton compte GitHub
4. Importe le repository → le site se déploie automatiquement

## Ce qu'il faut personnaliser

- **Vidéos portfolio** : remplace les placeholders dans `index.html` par tes vrais thumbnails et Vimeo IDs
- **Calendly** : remplace `https://calendly.com/irysagency` par ton vrai lien Calendly dans `index.html` et `script.js`
- **Liens sociaux** : mets tes vrais liens Instagram, TikTok, LinkedIn dans le footer
- **Mentions légales** : complète les infos dans `mentions-legales.html`
- **Favicon** : remplace le favicon par un vrai fichier dans le dossier
- **OG Image** : crée une image `og-image.jpg` (1200×630px) pour le partage sur les réseaux sociaux
- **Plausible** : décommente la ligne du script Plausible dans le `<head>` de `index.html` quand tu auras un compte

## Structure des fichiers

```
irys-site/
├── index.html            ← Page principale (one-page)
├── mentions-legales.html ← Page mentions légales
├── style.css             ← Tous les styles
├── script.js             ← Toutes les interactions
├── robots.txt            ← SEO
└── README.md             ← Ce fichier
```
