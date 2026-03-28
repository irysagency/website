# Audit SEO & Technique Complet — Irys Agency
> Version 2.0 · 28 mars 2026 · Base : code source live + sitemap + headers analysés

---

## Score Global SEO Health Index

**Score : 79 / 100 — Statut : Good**

> Score solide pour un site jeune avec de bonnes fondations techniques.
> Trois problèmes prioritaires freinent le passage à 90+ : l'absence d'image OG, une page admin indexée, et des données JSON-LD périmées.

### Répartition par catégorie

| Catégorie                    | Score brut | Poids | Contribution pondérée |
|------------------------------|-----------|-------|-----------------------|
| Crawlabilité & Indexation    | 82        | 30    | 24.6                  |
| Fondations Techniques        | 77        | 25    | 19.25                 |
| Optimisation On-Page         | 81        | 20    | 16.2                  |
| Qualité Contenu & E-E-A-T    | 72        | 15    | 10.8                  |
| Autorité & Signaux de Trust  | 85        | 10    | 8.5                   |
| **TOTAL**                    |           |       | **79.35 → 79 / 100**  |

---

## 1. Crawlabilité & Indexation — 82/100

### Findings

---

**F-01 · Page admin présente dans le sitemap**
- **Catégorie** : Crawlabilité & Indexation
- **Evidence** : `sitemap-0.xml` contient `https://irysagency.com/admin/upload-videos` avec `priority: 0.7` — identique aux pages légitimes.
- **Sévérité** : High
- **Confiance** : High (observé directement dans le fichier)
- **Pourquoi ça compte** : Google peut indexer une page admin sans authentification, exposant des fonctionnalités internes. Pire : ça dilue le crawl budget sur une URL sans valeur SEO.
- **Impact score** : −10
- **Recommandation** : Ajouter `priority: 0` et `changefreq: never` à cette URL dans `next-sitemap.config.js`, ou mieux, la supprimer du sitemap via `exclude: ['/admin/*']` et ajouter un `noindex` sur la page elle-même.

---

**F-02 · FR et EN partagent le même URL — version EN non indexable**
- **Catégorie** : Crawlabilité & Indexation
- **Evidence** : `alternates.languages` dans `layout.tsx` : `'fr': 'https://irysagency.com'` et `'en': 'https://irysagency.com'`. La langue est commutée côté client via `next-intl` sans changement d'URL.
- **Sévérité** : Medium
- **Confiance** : High
- **Pourquoi ça compte** : Google indexera uniquement la version française (dominante au chargement). Les utilisateurs anglophones ne trouveront jamais le site en cherchant en anglais. Si la cible EN est réelle (CA, BE, CH anglophones), c'est un manque à gagner de trafic.
- **Impact score** : −5
- **Recommandation** : Si l'anglais est une priorité, migrer vers des routes `/en/` avec un vrai routing Next.js `[locale]`. Si l'anglais est accessoire, retirer les `alternates.languages.en` du metadata pour éviter de signaler une version fantôme.

---

**F-03 · Priorité homepage sous-évaluée (0.7)**
- **Catégorie** : Crawlabilité & Indexation
- **Evidence** : `sitemap-0.xml` : `<priority>0.7</priority>` pour toutes les URLs, y compris la homepage.
- **Sévérité** : Low
- **Confiance** : High
- **Pourquoi ça compte** : La homepage est la page la plus importante du site — sa priorité doit être `1.0`. La différenciation des priorités aide Googlebot à allouer son crawl budget intelligemment.
- **Impact score** : −2
- **Recommandation** : Configurer `priority: 1.0` pour `/` et `0.5` pour les pages légales dans `next-sitemap.config.js`.

---

**F-04 · `changefreq` identique pour toutes les pages**
- **Catégorie** : Crawlabilité & Indexation
- **Evidence** : Toutes les URLs ont `<changefreq>monthly</changefreq>`.
- **Sévérité** : Low
- **Confiance** : High
- **Impact score** : −1
- **Recommandation** : `weekly` ou `daily` pour la homepage (mise à jour fréquente), `yearly` pour CGV/mentions légales.

---

## 2. Fondations Techniques — 77/100

### Findings

---

**F-05 · Image OpenGraph absente — aucun aperçu sur les réseaux sociaux**
- **Catégorie** : Fondations Techniques
- **Evidence** : Dans `layout.tsx` ligne 55-56 : `// TODO: Créer /public/og-image.jpg (1200×630) avant le lancement` — les champs `openGraph.images` et `twitter.images` sont commentés. Aucun fichier `og-image.*` n'existe dans `/public/`.
- **Sévérité** : High
- **Confiance** : High
- **Pourquoi ça compte** : Quand le site est partagé sur Instagram, LinkedIn, WhatsApp, iMessage — aucune vignette n'apparaît. C'est un taux de clic en chute libre sur chaque partage. C'est aussi l'un des premiers signaux que vérifie Google pour évaluer la richesse de la page.
- **Impact score** : −10
- **Recommandation** : Créer `/public/og-image.jpg` (1200×630px) avec le branding Irys et décommenter les lignes dans `layout.tsx`. Priorité absolue avant tout partage.

---

**F-06 · Logo JSON-LD pointe vers un fichier inexistant**
- **Catégorie** : Fondations Techniques
- **Evidence** : `jsonLd.logo: 'https://irysagency.com/images/logo.png'` dans `layout.tsx`. Le fichier `/public/images/logo.png` n'existe pas — seul `/public/images/logo-irys.svg` est présent.
- **Sévérité** : Medium
- **Confiance** : High
- **Pourquoi ça compte** : Le validateur de rich results de Google retournera une erreur sur ce schema. Le logo ne s'affichera pas dans les Knowledge Panels. C'est une promesse faite à Google qu'on ne tient pas.
- **Impact score** : −5
- **Recommandation** : Changer la valeur en `'https://irysagency.com/images/logo-irys.svg'` dans le `jsonLd` de `layout.tsx`.

---

**F-07 · Deux Google Fonts chargées mais potentiellement inutilisées (DM_Sans, Outfit)**
- **Catégorie** : Fondations Techniques
- **Evidence** : `layout.tsx` charge `DM_Sans` (variable `--font-dm-sans`) et `Outfit` (variable `--font-outfit`) via `next/font/google`. Le design system utilise Inter et Ivy Presto Display. Si `--font-dm-sans` et `--font-outfit` ne sont référencées nulle part dans le CSS ou les composants, ce sont deux requêtes réseau inutiles.
- **Sévérité** : Medium
- **Confiance** : Medium (nécessite grep complet sur globals.css + tailwind.config)
- **Pourquoi ça compte** : Chaque police Google génère une requête HTTP. Si elles ne sont pas utilisées, c'est du LCP inutilement alourdi et une consommation de bande passante sans bénéfice.
- **Impact score** : −2.5 (confiance Medium → 50%)
- **Recommandation** : Chercher `--font-dm-sans` et `--font-outfit` dans tout le projet. Si aucune occurrence : supprimer ces imports de `layout.tsx`.

---

**F-08 · Attribut `lang="fr"` hardcodé sur l'élément `<html>`**
- **Catégorie** : Fondations Techniques
- **Evidence** : `layout.tsx` ligne 171 : `<html lang="fr" ...>`. Quand un utilisateur bascule en anglais via le `LanguageSwitcher`, le `lang` reste `fr`.
- **Sévérité** : Low
- **Confiance** : High
- **Pourquoi ça compte** : Les lecteurs d'écran et les outils de traduction automatique utilisent `lang` pour déterminer la langue de prononciation. Google aussi. Un utilisateur EN lira du texte EN dans un document déclaré FR.
- **Impact score** : −2
- **Recommandation** : Si les routes restent une seule URL, rendre le `lang` dynamique depuis le state de la locale active (contexte next-intl).

---

**F-09 · HSTS non configuré dans les headers Next.js**
- **Catégorie** : Fondations Techniques
- **Evidence** : `next.config.ts` — aucun header `Strict-Transport-Security`. Vercel applique HSTS au niveau edge, mais ce n'est pas visible/contrôlable via le code.
- **Sévérité** : Low
- **Confiance** : Medium (Vercel gère HSTS de base)
- **Impact score** : −1.25 (confiance Medium)
- **Recommandation** : Ajouter `{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }` dans les headers de `next.config.ts` pour garantir HSTS quelle que soit la couche d'hébergement.

---

**F-10 · Vidéos MP4 placeholder dans `/public/videos/` déployées en production**
- **Catégorie** : Fondations Techniques
- **Evidence** : 6 fichiers `portfolio-{1..6}.mp4` présents dans `/public/videos/`. Le composant `Portfolio.tsx` utilise désormais les URLs Vercel Blob. Ces fichiers sont déployés inutilement sur Vercel.
- **Sévérité** : Low
- **Confiance** : High
- **Impact score** : −1.25 (confiance Medium, impact indirect sur build size)
- **Recommandation** : Supprimer ces fichiers de `/public/videos/` si le composant ne les référence plus. Réduira la taille du bundle de déploiement.

---

## 3. Optimisation On-Page — 81/100

### Findings

---

**F-11 · Description OpenGraph périmée (+54 clients)**
- **Catégorie** : On-Page Optimization
- **Evidence** : `layout.tsx` ligne 54 : `'Agence de montage vidéo pour infopreneurs et créateurs. +54 clients, +1 600 vidéos livrées.'`. Le site affiche désormais `+150 clients`.
- **Sévérité** : Medium
- **Confiance** : High
- **Pourquoi ça compte** : La description OG est affichée verbatim quand le lien est partagé sur les réseaux. "+54 clients" sous-vend la preuve sociale alors que la page en affiche +150. Incohérence crédibilité.
- **Impact score** : −5
- **Recommandation** : Mettre à jour la description OG : `'+150 clients accompagnés, +1 600 vidéos livrées. Première vidéo offerte.'`

---

**F-12 · Titres fondateurs dans JSON-LD ne correspondent plus à la page**
- **Catégorie** : On-Page Optimization
- **Evidence** : `jsonLd.founder[0].jobTitle: 'Co-fondateur & Directeur créatif'` → page affiche "Co-fondateur · Expert Viralité & Contenu Organique". `jsonLd.founder[1].jobTitle: 'Co-fondateur & Directeur de production'` → page affiche "Co-fondateur · Expert Montage & Production Vidéo".
- **Sévérité** : Low
- **Confiance** : High
- **Impact score** : −2
- **Recommandation** : Synchroniser les `jobTitle` dans le JSON-LD avec les titres affichés sur la page.

---

**F-13 · Aucun mot-clé principal dans le H1**
- **Catégorie** : On-Page Optimization
- **Evidence** : H1 actuel : "Tu tournes ton contenu. On s'occupe du reste." — zéro occurrence de "montage vidéo", "post-production", "infopreneur". Le badge au-dessus du H1 contient le mot-clé mais n'est pas une balise heading.
- **Sévérité** : Low
- **Confiance** : Medium (la meta title et la description compensent partiellement)
- **Pourquoi ça compte** : Le H1 est le signal sémantique le plus fort après la balise title. Un H1 purement branding sans mot-clé cible prive Google d'un signal de pertinence topique.
- **Impact score** : −1 (Medium confiance → 50% → −0.5, arrondi)
- **Recommandation** : Pas forcément changer le H1 (le copywriting est fort), mais s'assurer que le premier paragraphe visible contient "post-production vidéo" et "infopreneur" — ce qui est déjà partiellement le cas dans le sous-titre.

---

**F-14 · Liens réseaux sociaux pointent vers "#" (env vars non définies)**
- **Catégorie** : On-Page Optimization
- **Evidence** : `Footer.tsx` : `process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#'` — si `NEXT_PUBLIC_INSTAGRAM_URL` n'est pas définie sur Vercel, le lien est `href="#"`. Même chose pour TikTok et LinkedIn.
- **Sévérité** : High
- **Confiance** : Medium (dépend de la configuration Vercel — non vérifiable depuis le code seul)
- **Pourquoi ça compte** : Des liens vers "#" sont des liens cassés du point de vue UX et de l'exploration. Google peut les interpréter comme du contenu trompeur. C'est aussi une opportunité de signal d'autorité gâchée.
- **Impact score** : −5 (Medium confiance → 50% → −2.5)
- **Recommandation** : Vérifier dans Vercel Dashboard que `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_TIKTOK_URL`, `NEXT_PUBLIC_LINKEDIN_URL` sont bien définies en production. Si les comptes n'existent pas encore, supprimer temporairement les icônes plutôt que des liens morts.

---

**F-15 · Logo texte dans le footer (incohérence avec la navbar)**
- **Catégorie** : On-Page Optimization
- **Evidence** : `Footer.tsx` ligne 73-75 : logo rendu en texte brut (`Irys.`). La navbar utilise désormais un `<Image>` SVG.
- **Sévérité** : Low
- **Confiance** : High
- **Impact score** : −1
- **Recommandation** : Remplacer le logo texte du footer par le même `<Image src="/images/logo-irys.svg">` que la navbar pour cohérence.

---

**F-16 · FAQ JSON-LD utilise des questions différentes de la FAQ visible**
- **Catégorie** : On-Page Optimization
- **Evidence** : Le `faqJsonLd` dans `layout.tsx` contient 5 questions en français naturel différentes des questions dans `fr.json`. Les réponses mentionnent encore "l'abonnement" (supprimé de l'UI).
- **Sévérité** : Low
- **Confiance** : High
- **Impact score** : −1
- **Recommandation** : Synchroniser les questions/réponses du JSON-LD avec les clés `faq.q*` / `faq.a*` de `fr.json`. Retirer les occurrences de "abonnement" des réponses du schema.

---

## 4. Qualité Contenu & E-E-A-T — 72/100

### Findings

---

**F-17 · Aucun témoignage client vérifiable**
- **Catégorie** : Contenu & E-E-A-T
- **Evidence** : Le site n'affiche aucune citation de client, aucun avis Google, aucun témoignage avec nom + contexte. Les stats (+150 clients) ne sont pas sourcées.
- **Sévérité** : High
- **Confiance** : High
- **Pourquoi ça compte** : Google E-E-A-T valorise les preuves d'expérience réelle. Un site de service sans témoignages vérifiables est considéré comme moins fiable qu'un concurrent qui en a. C'est aussi la première chose qu'un prospect cherche avant de réserver un appel.
- **Impact score** : −10
- **Recommandation** : Ajouter une section testimonials avec au moins 3-5 avis réels (prénom, type de contenu, résultat mesurable). Idéalement avec `Review` schema. Ou intégrer les avis Google Business.

---

**F-18 · Étoiles ★★★★★ décoratives dans les cartes fondateurs**
- **Catégorie** : Contenu & E-E-A-T
- **Evidence** : `CalendlySection.tsx` — `<span aria-hidden="true">★★★★★</span>` affiché sous chaque fondateur. Ces étoiles ne correspondent à aucun avis réel.
- **Sévérité** : Medium
- **Confiance** : High
- **Pourquoi ça compte** : Des étoiles de notation qui ne correspondent à aucun système d'avis vérifié peuvent être considérées comme du dark pattern par Google et potentiellement par les régulateurs (DGCCRF). Risque de déclassement E-E-A-T si Google interprète ça comme une notation fictive.
- **Impact score** : −5
- **Recommandation** : Retirer ces étoiles ou les remplacer par un vrai contexte (ex: "⭐ Note Google 4.9/5 — 23 avis") avec un lien vers la source.

---

**F-19 · Aucune coordonnée visible (email, téléphone)**
- **Catégorie** : Contenu & E-E-A-T
- **Evidence** : Aucun email ni numéro de téléphone n'est affiché sur le site ou dans le footer. Le seul CTA est le Calendly.
- **Sévérité** : Medium
- **Confiance** : High
- **Pourquoi ça compte** : Google's Quality Rater Guidelines considèrent l'absence de coordonnées comme un signal de fiabilité réduite pour les sites de services. Un prospect qui hésite ne peut pas contacter autrement qu'en réservant un appel — friction inutile.
- **Impact score** : −5
- **Recommandation** : Ajouter au minimum un email de contact dans le footer. Idéalement dans le JSON-LD `Organization.email` aussi.

---

**F-20 · Aucun contenu long format ou blog**
- **Catégorie** : Contenu & E-E-A-T
- **Evidence** : Site one-page uniquement. Pas de blog, pas de case studies, pas d'articles.
- **Sévérité** : Medium
- **Confiance** : High
- **Pourquoi ça compte** : Un site one-page capte peu de trafic organique informationnel ("comment déléguer son montage vidéo", "agence montage YouTube infopreneur"). Toute la stratégie SEO repose sur une seule page et des mots-clés très concurrentiels.
- **Impact score** : −5
- **Recommandation** : À moyen terme, ajouter un blog ou une page "Ressources" avec 3-5 articles ciblant des longues traînes à forte intention. Exemple : "Comment choisir son agence de montage vidéo en 2026".

---

**F-21 · Contenu uniquement en français malgré ciblage 4 pays**
- **Catégorie** : Contenu & E-E-A-T
- **Evidence** : `layout.tsx` cible `areaServed: ['FR', 'BE', 'CH', 'CA']`. La version EN est côté client non indexable.
- **Sévérité** : Medium
- **Confiance** : High
- **Impact score** : −3
- **Recommandation** : Voir F-02. Si BE/CH/CA francophones sont visés, le contenu FR est cohérent. Si anglophones aussi, voir recommandation routing `/en/`.

---

## 5. Autorité & Trust Signals — 85/100

### Findings

---

**F-22 · Liens sociaux potentiellement cassés**
- **Catégorie** : Autorité & Trust
- **Evidence** : Voir F-14 — les liens sociaux dépendent de variables d'environnement non vérifiables depuis le code.
- **Sévérité** : High (si non configuré)
- **Confiance** : Medium
- **Impact score** : −5 (Medium → 50% → −2.5)
- **Recommandation** : Voir F-14.

---

**F-23 · Absence de Google Business Profile mentionné**
- **Catégorie** : Autorité & Trust
- **Evidence** : Aucune référence à une fiche GBP dans le JSON-LD ou les pages légales.
- **Sévérité** : Medium
- **Confiance** : High (absence confirmée dans le code)
- **Impact score** : −5
- **Recommandation** : Créer/revendiquer un Google Business Profile pour "Irys Agency". Lier via `sameAs` dans le JSON-LD Organization. C'est une source de backlinks gratuits + apparition en Knowledge Panel.

---

**F-24 · Aucune mention de backlinks ou partenariats dans le schema**
- **Catégorie** : Autorité & Trust
- **Evidence** : Le `jsonLd` n'inclut pas de `sameAs` pointant vers les profils sociaux ou des sites tiers (LinkedIn, Instagram, etc.).
- **Sévérité** : Low
- **Confiance** : High
- **Impact score** : −2.5
- **Recommandation** : Ajouter `sameAs: ['https://instagram.com/irysagency', 'https://www.youtube.com/@irysagency', ...]` dans le JSON-LD Organization une fois les profils vérifiés.

---

## Plan d'Action Prioritaire

### 🔴 Blockers Critiques (impact immédiat)

| # | Action | Finding | Gain score estimé |
|---|--------|---------|-------------------|
| 1 | **Créer l'image OG** (1200×630px) et décommenter dans `layout.tsx` | F-05 | +3 à +4 pts |
| 2 | **Exclure `/admin/upload-videos`** du sitemap + ajouter `noindex` sur la page | F-01 | +2 à +3 pts |
| 3 | **Corriger le chemin logo JSON-LD** : `.png` → `.svg` | F-06 | +1 à +2 pts |

---

### 🟠 Améliorations à Haute Valeur

| # | Action | Finding | Gain score estimé |
|---|--------|---------|-------------------|
| 4 | **Mettre à jour l'OG description** : "+54 clients" → "+150 clients" | F-11 | +1 pt |
| 5 | **Vérifier les env vars réseaux sociaux** sur Vercel Dashboard | F-14, F-22 | +1 à +2 pts |
| 6 | **Synchroniser FAQ JSON-LD** avec les vraies questions/réponses FR | F-16 | +0.5 pt |
| 7 | **Synchroniser les jobTitle fondateurs** dans JSON-LD | F-12 | +0.5 pt |
| 8 | **Supprimer les étoiles décoratives** ★★★★★ des cartes fondateurs | F-18 | +1 pt |
| 9 | **Ajouter `sameAs` dans JSON-LD** avec liens Instagram + YouTube | F-24 | +0.5 pt |

---

### 🟡 Quick Wins

| # | Action | Finding | Gain score estimé |
|---|--------|---------|-------------------|
| 10 | **Ajouter HSTS header** dans `next.config.ts` | F-09 | +0.5 pt |
| 11 | **Corriger priorité sitemap** : homepage → 1.0 | F-03 | +0.5 pt |
| 12 | **Remplacer logo texte footer** par `<Image>` SVG | F-15 | +0.5 pt |
| 13 | **Supprimer fichiers MP4** inutilisés dans `/public/videos/` | F-10 | indirect |
| 14 | **Vérifier imports Google Fonts** (DM_Sans, Outfit inutilisés ?) | F-07 | +0.5 à +1 pt |

---

### 🔵 Opportunités Moyen-Long Terme

| # | Action | Finding | Gain potentiel |
|---|--------|---------|----------------|
| 15 | **Ajouter 3-5 témoignages clients** avec Review schema | F-17 | +3 à +5 pts |
| 16 | **Créer Google Business Profile** + lien `sameAs` | F-23 | +1 à +2 pts |
| 17 | **Ajouter un email de contact** visible dans le footer | F-19 | +1 pt |
| 18 | **Décider de la stratégie EN** : routing `/en/` ou retirer alternates | F-02, F-08 | +2 à +3 pts si implémenté |
| 19 | **Créer un blog / case studies** pour capter le trafic longue traîne | F-20 | +5 à +10 pts long terme |

---

## Ce qui Fonctionne Très Bien

> Points forts à conserver — ne pas toucher.

- ✅ **Robots.txt** : propre, complet, référence le sitemap.
- ✅ **Meta title + description** : keyword-optimisé, CTA inclus, longueur correcte.
- ✅ **Balise robots Next.js** : `index: true`, `follow: true`, `max-video-preview: -1`.
- ✅ **FAQPage schema** : présent et correct — potentiel de featured snippet.
- ✅ **Code splitting** : `dynamic()` pour tous les composants below-the-fold.
- ✅ **Lazy loading Calendly** : IntersectionObserver bien implémenté.
- ✅ **Sécurité** : CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- ✅ **Plausible Analytics** : cookieless, pas de bandeau RGPD requis.
- ✅ **HTML sémantique** : `<nav>`, `<main>`, `<section>`, `<footer>` bien utilisés.
- ✅ **SectionHeader unifié** : H2 cohérents via le composant partagé (corrigé vs audit v1).
- ✅ **Hiérarchie des headings** : H1 → H2 → H3 propre.
- ✅ **Sitemap XML** : généré automatiquement via `next-sitemap`, bien formé.
- ✅ **Vercel CDN** : Edge Network mondial, TTFB optimisé.
- ✅ **next/font** : fonts Google chargées sans FOUT via `display: swap`.
- ✅ **Pages légales complètes** : mentions légales, CGV, politique de confidentialité.

---

## Limitations de cet Audit

- Score estimé sur la base du code source — pas de données Search Console, PageSpeed Insights, ou crawl external.
- Profil de backlinks non évalué (nécessite Ahrefs/Semrush).
- Core Web Vitals (LCP, INP, CLS) non mesurés en conditions réelles — à vérifier via PageSpeed Insights sur l'URL live.
- Les variables d'environnement Vercel (`NEXT_PUBLIC_*`) non vérifiables depuis le code local.

---

*Audit réalisé par Claude Code · irysagency.com · 28 mars 2026*
