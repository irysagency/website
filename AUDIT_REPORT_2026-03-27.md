═══════════════════════════════════════════════
IRYS AGENCY — AUDIT COMPLET
Date : 27 mars 2026
URL : https://irysagency.com
Auditeurs : 8 agents spécialisés
═══════════════════════════════════════════════

TABLEAU DE BORD

| Domaine           | Score | Lighthouse   |
|-------------------|-------|--------------|
| Performance       | 5/10  | ~65/100 est. |
| Sécurité          | 6/10  | N/A          |
| Qualité code      | 7/10  | N/A          |
| SEO technique     | 8/10  | ~95/100 est. |
| Accessibilité     | 7/10  | ~88/100 est. |
| Design/Cohérence  | 7/10  | N/A          |
| UX/Conversion     | 7/10  | N/A          |
| Copywriting       | 8/10  | N/A          |
| SCORE GLOBAL      | 6.9/10|              |

Note : scores Lighthouse estimés — pas de mesure live disponible sans navigateur.

═══════════════════════════════════════════════
PHASE 0 — BASELINE AUTOMATIQUE (résultats exacts)
═══════════════════════════════════════════════

BUILD
-----
Statut : BUILD AVEC ERREUR NON BLOQUANTE
Erreur : "ENVIRONMENT_FALLBACK" au moment de la génération des pages statiques
  → Causée par les variables NEXT_PUBLIC_* (réseaux sociaux) absentes en build CI
  → Le build réussit quand même (7/7 pages générées)
Routes générées : /, /_not-found, /cgv, /mentions-legales, /politique-de-confidentialite
Type : toutes statiques (SSG — ○)
Note : le build Next.js ne produit PAS les tailles First Load JS habituelles avec Turbopack.
Taille statique totale .next/static/ : 1.3 MB
Plus gros chunks non compressés :
  - 00nvzi6qb_-1r.js : 226 355 octets (221 KB)
  - 0qy~h5pfyzcee.js : 209 918 octets (205 KB)
  - 0vxi98ewbbk5w.js : 145 324 octets (142 KB)
  - 03~yq9q893hmn.js : 112 594 octets (110 KB)
CSS : 0aj0rbsmr7v4~.css : 33 257 octets (32 KB)

TYPESCRIPT
----------
Résultat : ZÉRO ERREUR TypeScript (npx tsc --noEmit → aucune sortie)

DÉPENDANCES OBSOLÈTES (npm outdated)
-------------------------------------
Package          Current    Latest
@types/node      20.19.37   25.5.0  (5 versions majeures de retard)
lucide-react     1.0.1      1.7.0   (patch mineur)
tailwindcss      3.4.19     4.2.2   (MAJEUR — breaking changes)
typescript       5.9.3      6.0.2   (MAJEUR)

SÉCURITÉ (npm audit)
--------------------
Résultat : 0 vulnérabilités

IMAGES
------
Seules 2 images PNG présentes (placeholders) : 2.4 KB chacune
6 fichiers vidéo MP4 : 72 octets chacun (PLACEHOLDERS vides — non réels)

FICHIERS PLUS LONGS
--------------------
Portfolio.tsx      : 287 lignes
ProcessSwimlane.tsx: 276 lignes
Offres.tsx         : 222 lignes
CalendlySection.tsx: 217 lignes
layout.tsx         : 200 lignes
Footer.tsx         : 179 lignes
EcosystemeIrys.tsx : 168 lignes
Hero.tsx           : 155 lignes
Navbar.tsx         : 131 lignes
FreelanceVsAgence  : 120 lignes
Total projet       : 2 996 lignes

═══════════════════════════════════════════════
TOP 15 — PROBLÈMES PAR IMPACT DÉCROISSANT
═══════════════════════════════════════════════

#  | Domaine      | Problème                                                     | Impact    | Effort | Priorité
1  | Performance  | DustParticles canvas requestAnimationFrame non conditionné à prefers-reduced-motion + pas de désactivation mobile | ÉLEVÉ | Moyen | P1
2  | Performance  | Aucun poster frame sur les 6 vidéos portfolio — écran noir au chargement, LCP indéfini | ÉLEVÉ | Faible | P1
3  | Performance  | Framer-motion importé en entier (package.json: ^12.38.0) sans tree-shaking explicite dans Offres.tsx, FAQ.tsx, PackCard.tsx, OffreCard.tsx — gonfle le bundle | ÉLEVÉ | Moyen | P1
4  | Sécurité     | Aucun header HTTP de sécurité (CSP, X-Frame-Options, HSTS, Referrer-Policy) — next.config.ts est vide (4 lignes) | ÉLEVÉ | Faible | P1
5  | Performance  | next.config.ts complètement vide — pas de headers(), pas d'optimisation images, pas de compression | ÉLEVÉ | Faible | P1
6  | Performance  | 3 fonts Google chargées (Inter, DM_Sans, Outfit) dont 2 potentiellement redondantes — layout.tsx lignes 7-25 | MOYEN | Moyen | P2
7  | Sécurité     | Erreur ENVIRONMENT_FALLBACK au build : variables NEXT_PUBLIC_* absentes génèrent une erreur silencieuse | MOYEN | Faible | P2
8  | Design       | Couleurs hardcodées dans les composants : #FFFFFF (Hero.tsx:135), #ff3232 (FreelanceVsAgence:50), #22c55e (FreelanceVsAgence:61,93), #EE1D52 dans 8+ composants au lieu de var(--color-accent) | MOYEN | Faible | P2
9  | Accessibilité | SVG décoratifs sans aria-hidden dans CalendlySection, EcosystemeIrys, Footer — les star ★★★★★ sont du texte brut sans aria-hidden | MOYEN | Faible | P2
10 | Performance  | DustParticles utilise window.addEventListener('resize') sans debounce — appels excessifs | MOYEN | Faible | P2
11 | UX           | react-calendly (package.json) installé mais NON UTILISÉ — CalendlySection utilise window.Calendly natif via Script tag. Package mort dans le bundle potentiel | MOYEN | Faible | P2
12 | SEO          | og:image pointe vers /og-image.jpg (TODO: REPLACE — layout.tsx:57) — fichier inexistant dans /public | MOYEN | Faible | P2
13 | Code         | Portfolio.tsx réimplémente IntersectionObserver manuellement (lignes 80-101) alors que useScrollReveal existe — duplication de logique | FAIBLE | Faible | P3
14 | Accessibilité | Boutons du carrousel portfolio (Précédent/Suivant) masqués par opacity:0 group-hover uniquement — inaccessibles au clavier sur mobile | FAIBLE | Faible | P3
15 | Code         | ProcessSwimlane.tsx réimplémente un 2ème IntersectionObserver manuel (lignes 59-104) — 3ème implémentation dans le projet | FAIBLE | Moyen | P3

═══════════════════════════════════════════════
QUICK WINS — CORRECTIONS < 30 MIN CHACUNE
═══════════════════════════════════════════════

1. Ajouter headers HTTP dans next.config.ts (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) → Protection sécurité immédiate, 15 min.

2. Créer /public/og-image.jpg (1200×630px) → Open Graph fonctionnel sur les partages réseaux sociaux, impacte tous les partages.

3. Ajouter poster="/images/portfolio-poster.jpg" sur les 6 balises <video> dans Portfolio.tsx → Élimine l'écran noir, améliore LCP et UX.

4. Remplacer #EE1D52 hardcodé dans EcosystemeIrys.tsx (lignes 97, 153), ProcessSwimlane.tsx (165, 188, 200, 259), CalendlySection.tsx (160, 163, 179) par var(--color-accent) → Cohérence design + maintenabilité.

5. Remplacer #22c55e hardcodé dans FreelanceVsAgence.tsx (lignes 61, 93) et #ff3232 (ligne 50) par une variable CSS → Cohérence design.

6. Remplacer #FFFFFF hardcodé dans Hero.tsx ligne 135 par var(--color-text) ou white → Cohérence.

7. Ajouter aria-hidden="true" sur les icônes SVG décoratives dans EcosystemeIrys.tsx et les étoiles ★★★★★ dans CalendlySection.tsx ligne 164 → Accessibilité screen reader.

8. Supprimer react-calendly des dépendances (package.json) — non utilisé → Réduction bundle potentielle.

9. Créer le fichier .env.local à partir de .env.local.example pour corriger l'erreur ENVIRONMENT_FALLBACK au build → Build propre sans erreur.

10. Ajouter un debounce sur le resize handler dans DustParticles.tsx (ligne 69) → Réduit les appels inutiles au redimensionnement.

═══════════════════════════════════════════════
CHANTIERS — 1 À 3 JOURS
═══════════════════════════════════════════════

Performance :
- Ajouter tree-shaking framer-motion : remplacer les imports globaux par des imports spécifiques (motion/react) dans Offres.tsx, FAQ.tsx, PackCard.tsx, OffreCard.tsx.
- Évaluer la réduction de 3 fonts à 2 : Outfit + DM_Sans suffisent, Inter est redondant (layout.tsx lignes 7-11).
- Conditionner DustParticles à l'absence de prefers-reduced-motion ET détecter saveData avec navigator.connection (déjà fait pour les vidéos — même pattern à appliquer).
- Vérifier les vrais MP4 portfolio une fois livrés : ajouter <source type="video/mp4"> et poster frame, taille recommandée < 2MB par vidéo.
- Implémenter next.config.ts avec headers() de sécurité + images: { formats: ['image/webp', 'image/avif'] } pour les futures images.

Sécurité :
- Configurer les headers HTTP complets via next.config.ts headers() : CSP (Content-Security-Policy) adapté au domaine Calendly/Plausible, HSTS, X-Frame-Options: SAMEORIGIN, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy.
- Ajouter vercel.json avec les mêmes headers en fallback pour les headers non gérés par Next.js.
- S'assurer que .env.local est bien configuré en production Vercel (variables d'env dans le dashboard Vercel).

Code :
- Consolider les 3 implémentations IntersectionObserver (useScrollReveal.ts, Portfolio.tsx lignes 80-101, ProcessSwimlane.tsx lignes 59-104) en une seule abstraction réutilisable.
- Extraire la logique modale vidéo de Portfolio.tsx dans un composant VideoModal séparé — le composant fait 287 lignes.
- Refactoriser ProcessSwimlane.tsx (276 lignes) : extraire le TimelineStep en sous-composant.

Design :
- Unifier toutes les couleurs hardcodées vers les variables CSS (voir Quick Wins 4-6).
- Vérifier que la font IvyPresto se charge bien depuis public/fonts/ivy-presto-display-light-italic.woff2 (note : le fichier dans globals.css référence "ivy-presto-display-light-italic.woff2" mais le dossier public/fonts contient aussi "ivy-presto-display-lite-italic.woff2" — vérifier l'orthographe).
- Ajouter aria-label descriptifs sur les boutons de tab dans Portfolio.tsx et Offres.tsx.

UX :
- Rendre les boutons de navigation du carrousel (Précédent/Suivant) toujours visibles sur mobile (pas uniquement au hover de groupe — inaccessible au touch).
- Ajouter une vraie photo og:image 1200×630px.
- Remplir les placeholders fondateurs (photos, bios réelles, SIRET dans mentions-légales).

═══════════════════════════════════════════════
CE QUI FONCTIONNE BIEN — NE PAS TOUCHER
═══════════════════════════════════════════════

- Architecture i18n propre : I18nProvider.tsx avec détection automatique locale + localStorage — bien pensé et sans dépendance serveur.
- TypeScript strict : zéro erreur au build, zéro `any` explicite dans le code source — excellent.
- Sécurité des liens externes : tous les target="_blank" ont rel="noopener noreferrer" (Footer.tsx:91, Portfolio.tsx:253) — bon.
- prefers-reduced-motion : correctement implémenté dans globals.css (ligne 473-488), useScrollReveal.ts (ligne 28-30), et ProcessSwimlane.tsx (ligne 20) — cohérent.
- font-display: swap sur Inter, DM_Sans, Outfit ET IvyPresto — correct pour le CLS.
- Scroll passif sur l'event listener du Navbar : window.addEventListener('scroll', onScroll, { passive: true }) — bon pour l'INP.
- FAQ entièrement accessible : aria-expanded, aria-controls, aria-labelledby, role="region" — WCAG AA conforme (FAQ.tsx lignes 53-76).
- Hamburger mobile accessible : aria-label et aria-expanded corrects (Navbar.tsx lignes 92-93).
- SectionHeader réutilisable : composant propre avec double-typographie, révèle scroll, alignement — bonne abstraction.
- JSON-LD structuré : Organization + ProfessionalService + FAQPage correctement implémentés dans layout.tsx.
- Sitemap XML auto-généré via next-sitemap avec robots.txt correct.
- Stratégie Plausible Analytics : afterInteractive + cookieless — conforme RGPD sans banner.
- Calendly natif bien chargé : Script strategy="afterInteractive" avec onLoad callback — ne bloque pas le LCP.
- Variables CSS bien organisées : :root avec toutes les couleurs, extendues dans tailwind.config.js — système cohérent.
- Composant SpotlightCard : propre, responsive au focus (handleFocus/handleBlur) — UX fine.
- ProcessSwimlaneClient : dynamic import avec ssr: false — bonne pratique pour composant full client.
- saveData check dans Portfolio.tsx (ligne 88-90) pour éviter l'autoplay sur connexion lente — attention UX mobile excellente.

═══════════════════════════════════════════════
RECOMMANDATION SPRINT SUIVANT
═══════════════════════════════════════════════

1. Ajouter les headers HTTP de sécurité dans next.config.ts — effort 30 min, risque sécurité éliminé immédiatement.

2. Créer og:image.jpg + poster frames vidéos — effort 1h, améliore le LCP estimé et tous les partages réseaux sociaux.

3. Remplacer react-calendly (inutilisé) + unifier les couleurs hardcodées (#EE1D52, #22c55e, #ff3232) — effort 45 min, dette technique réduite.

4. Ajouter aria-hidden sur tous les SVG et caractères décoratifs (★, ▶) — effort 20 min, score accessibilité Lighthouse +3 à +5 points estimés.

5. Mettre en place les vraies vidéos portfolio (< 2MB chacune, codec H.264, poster frame inclus) — effort variable selon production, mais c'est le seul élément manquant pour que la section principale du site fonctionne réellement.

═══════════════════════════════════════════════
DÉTAIL COMPLET PAR AGENT
═══════════════════════════════════════════════

─────────────────────────────────────────────
AGENT 1 — PERFORMANCE & CORE WEB VITALS
─────────────────────────────────────────────
Score : 5/10

LCP (Largest Contentful Paint)
- Element LCP probable : le H1 hero (text node) ou le canvas DustParticles. Aucune image above-the-fold avec priority={true} — il n'y a pas d'image hero, ce qui est positif (pas de LCP image non prioritaire).
- DustParticles (Hero.tsx) utilise requestAnimationFrame en continu dès le montage, sans condition prefers-reduced-motion ni mobile. Sur mobile bas de gamme, cela peut bloquer le thread main au moment du LCP.
- Fonts : Inter, DM_Sans, Outfit chargées via next/font/google avec display: 'swap' — bien. IvyPresto chargée via @font-face avec font-display: swap — bien. Toutefois, 3 fonts Google représentent au moins 3 requêtes réseau.
- Plausible : strategy="afterInteractive" — ne bloque pas le LCP. Bien.
- Calendly : strategy="afterInteractive" avec onLoad — ne bloque pas. Bien.

CLS (Cumulative Layout Shift)
- Seules 2 images réelles (placeholders fondateurs) — dimensionnées width=72 height=72 explicitement dans CalendlySection.tsx ligne 143. Pas de CLS prévu.
- font-display: swap sur toutes les fonts — risque de FOUT (flash of unstyled text) mais pas de CLS si les fonts de fallback ont des métriques proches.
- Calendly embed : hauteur fixée via --calendly-height (700px desktop, 580px mobile) dans globals.css. Élimine le CLS du widget. Excellent.

INP (Interaction to Next Paint)
- Scroll listener passif dans Navbar.tsx (ligne 15) — bien.
- SpotlightCard.tsx : setState sur chaque mousemove (position x/y) — peut créer des re-renders fréquents si plusieurs cards visibles simultanément.
- MagneticButton.tsx : setState sur chaque mousemove — même problème potentiel.
- Framer-motion AnimatePresence dans Offres.tsx et FAQ.tsx : transitions 0.3-0.35s, acceptable.

Bundle JS
- .next/static/ total : 1.3 MB non compressé. Avec gzip/brotli Vercel, probablement ~350-450 KB transmis.
- Plus gros chunk : 221 KB (probablement framer-motion). Framer-motion v12 est lourd même avec tree-shaking.
- react-calendly installé (package.json) mais non importé dans aucun composant — potentiellement inclus dans le bundle inutilement selon le tree-shaking. À vérifier et supprimer.
- ProcessSwimlaneClient utilise dynamic() avec ssr: false — bonne pratique pour différer le composant timeline.
- Lucide-react v1.0.1 vs 1.7.0 disponible — import par composants nommés, tree-shaking actif.

Images/Médias
- Aucune image next/image dans le projet sauf CalendlySection (photos fondateurs placeholders).
- Les 6 vidéos portfolio sont des placeholders de 72 octets — non testables réellement. Le code prévoit muted, loop, playsInline, autoplay via IntersectionObserver — conforme.
- CRITIQUE : aucun attribut poster sur les balises <video> (Portfolio.tsx lignes 185-194). Lors du chargement, les vidéos afficheront un écran noir jusqu'au premier frame décodé, pénalisant le LCP et l'UX.
- Pas de format WebP/AVIF configuré dans next.config.ts (fichier vide).

TOP 5 PRIORITÉS PERFORMANCE
1. Ajouter poster frame sur toutes les <video> du portfolio
2. Conditionner DustParticles à prefers-reduced-motion et/ou désactiver sur mobile
3. Investiguer/supprimer react-calendly du bundle
4. Configurer next.config.ts avec images: { formats: ['image/webp', 'image/avif'] }
5. Évaluer réduction fonts de 3 à 2 (supprimer Inter, redondant avec DM_Sans)

─────────────────────────────────────────────
AGENT 2 — SÉCURITÉ
─────────────────────────────────────────────
Score : 6/10

Dépendances
- npm audit : 0 vulnérabilités — excellent.
- Packages à risque potentiel à terme : TypeScript 5 vs 6 (breaking), Tailwind 3 vs 4 (breaking).
- react-calendly installé mais non utilisé — surface d'attaque inutile.

Headers HTTP
- next.config.ts (lignes 1-7) : COMPLÈTEMENT VIDE — aucun header de sécurité configuré.
- Aucun vercel.json trouvé dans le projet — pas de headers au niveau CDN non plus.
- Headers manquants critiques :
  * Content-Security-Policy : absent — risque XSS
  * X-Frame-Options : absent — risque clickjacking
  * X-Content-Type-Options : absent — risque MIME sniffing
  * Referrer-Policy : absent
  * Permissions-Policy : absent
  * Strict-Transport-Security (HSTS) : absent (géré par Vercel en production mais non configuré explicitement)
- Positif : Plausible est cookieless, pas de CDN tiers critique sauf Calendly.

Variables d'environnement
- .gitignore contient ".env*" — les fichiers .env.local sont bien exclus du git. Bien.
- .env.local.example présent — bonne pratique documentée.
- Aucun secret NEXT_PUBLIC_ détecté dans le code source (les URLs réseaux sociaux sont publiques, c'est acceptable).
- .env.local inexistant localement → génère l'erreur ENVIRONMENT_FALLBACK au build (les variables retournent undefined puis '#').
- Solution de fallback '#' dans Footer.tsx lignes 29-31 — évite un crash mais génère des liens morts.

Liens externes
- Tous les target="_blank" ont rel="noopener noreferrer" — aucune fuite de window.opener. Bien.
- Liste des liens vérifiés : Footer.tsx:90-91, Footer.tsx:168-169, Portfolio.tsx:252-253.

APIs et données
- Aucune route API Next.js présente (pas de /app/api/).
- URL Calendly hardcodée dans CalendlySection.tsx ligne 30 : 'https://calendly.com/contact-irysagency/30min' — devrait être une variable d'env NEXT_PUBLIC_CALENDLY_URL.
- dangerouslySetInnerHTML utilisé dans layout.tsx lignes 179 et 183 — UNIQUEMENT pour JSON.stringify() des données JSON-LD structurées. Usage légitime et sécurisé car les données sont entièrement contrôlées côté serveur. Pas de risque XSS.

RISQUES
- CRITIQUE : Absence totale de headers HTTP sécurité
- MAJEUR : URL Calendly hardcodée (non une variable d'env)
- MAJEUR : ENVIRONMENT_FALLBACK au build — indique que les env vars ne sont pas configurées
- MINEUR : react-calendly installé mais inutilisé

─────────────────────────────────────────────
AGENT 3 — QUALITÉ DU CODE
─────────────────────────────────────────────
Score : 7/10

TypeScript
- npx tsc --noEmit : ZÉRO erreur — excellent.
- Aucun `any` explicite trouvé dans les fichiers source (grep ": any" → aucun résultat).
- Seule utilisation de cast non typé : (navigator as Navigator & { connection?: { connection?: boolean } }) dans Portfolio.tsx ligne 88 — justifiée par l'API expérimentale.
- Types bien définis : interfaces Offre, Pack, PortfolioItem, UseScrollRevealOptions — propre.
- La déclaration `declare global { interface Window { Calendly: ... } }` dans CalendlySection.tsx est correcte.

Architecture
- 'use client' sur presque tous les composants : Hero, Portfolio, FreelanceVsAgence, EcosystemeIrys, ProcessSwimlane, Offres, CalendlySection, FAQ, Navbar, Footer, LanguageSwitcher, SpotlightCard, MagneticButton, DustParticles — soit 14 composants sur 16.
- SectionHeader.tsx est le SEUL composant sans 'use client' — il pourrait être Server Component. C'est cohérent.
- I18nProvider.tsx est 'use client' car il utilise useState + localStorage — correct.
- ProcessSwimlaneClient.tsx : wrapper propre avec dynamic() pour différer ProcessSwimlane qui utilise window directement.

Composants > 250 lignes
- Portfolio.tsx : 287 lignes — légèrement au-dessus. Contient logique carousel + autoplay + modal + data. Extractible.
- ProcessSwimlane.tsx : 276 lignes — logique d'animation IntersectionObserver + JSX timeline. Extractible.

Props drilling
- Pas de props drilling excessif détecté. Le contexte I18n est géré via Context + next-intl. Propre.

useEffect et dépendances
- useScrollReveal.ts ligne 69 : le tableau de dépendances inclut [threshold, rootMargin, staggerDelay, fromTransform] — correct.
- Portfolio.tsx ligne 69-71 : useEffect([emblaApi, filtered]) — correct, filtered change quand activeTab change.
- Portfolio.tsx ligne 104-107 : useEffect([activeTab]) déclenche autoplay — correct mais crée un double render potentiel avec le premier useEffect (IntersectionObserver).
- ProcessSwimlane.tsx ligne 19-105 : useEffect([]) sans dépendances — correct car l'animation est basée sur les refs DOM.
- I18nProvider.tsx ligne 33-43 : useEffect([]) — correct, une seule exécution au montage.

Code dupliqué
- IntersectionObserver réimplémenté 3 fois :
  1. useScrollReveal.ts (hooks/useScrollReveal.ts) — hook générique
  2. Portfolio.tsx lignes 80-101 — pour autoplay vidéos (usage spécifique, justifiable)
  3. ProcessSwimlane.tsx lignes 59-104 — pour animations entrée (pourrait utiliser useScrollReveal)
- Logique de hover inline (onMouseEnter/onMouseLeave avec style direct) répétée dans : Navbar.tsx (64-70), Footer.tsx (98-104), CalendlySection.tsx (133-138). Un composant HoverableLink ou une classe Tailwind custom résoudrait.

Maintenabilité
- Single responsibility globalement respecté — chaque composant a un rôle clair.
- Nommage cohérent : SCREAMING_SNAKE_CASE pour les constantes (STATS, TABS, COMPARISON, etc.), camelCase pour les fonctions.
- Fichiers bien rangés : composants dans /components, hooks dans /hooks, messages dans /messages.

Tests
- Aucun test présent (pas de /tests/, pas de *.test.tsx, pas de jest.config.js, pas de vitest).
- Composants critiques à tester en priorité :
  1. useScrollReveal.ts — logique d'intersection observer
  2. I18nProvider.tsx — détection locale + localStorage
  3. FAQ.tsx — logique d'accordéon (open/close)
  4. PackCard.tsx — toggle standard/premium + animation prix

Dette technique estimée : FAIBLE à MODÉRÉE — projet récent, code propre, TypeScript strict. Principalement : duplication IntersectionObserver, couleurs hardcodées, 'use client' systématique.

─────────────────────────────────────────────
AGENT 4 — SEO TECHNIQUE
─────────────────────────────────────────────
Score : 8/10

Meta tags (layout.tsx lignes 27-88)
- Title : "Agence montage vidéo pour infopreneurs | Irys" — 47 chars, keyword "agence montage vidéo" en début. BIEN. Longueur idéale (< 60 chars).
- Meta description : "Arrête de perdre du temps sur Premiere Pro. Délègue ta post-production à notre agence montage vidéo pour infopreneur. Réserve ton appel gratuit !" — 148 chars. BIEN (cible 150-160 chars, légèrement court mais CTA présent).
- Canonical : https://irysagency.com — présent. Bien.
- Robots : index: true, follow: true, directives GoogleBot complètes — bien.
- Hreflang : 'x-default' + 'fr' présents (lignes 84-87). Manque 'en' alors que le site supporte l'anglais via LanguageSwitcher — PROBLÈME : le site propose FR+EN mais le hreflang ne déclare pas EN.
- Open Graph : type, locale, url, siteName, title, description, images — complet. SAUF og:image pointe vers /og-image.jpg qui n'existe pas dans /public.
- Twitter Cards : summary_large_image, title, description, images — présent. Même problème image manquante.
- metadataBase : https://irysagency.com — bien défini.

Sémantique HTML
- H1 unique dans Hero.tsx ("Tu crées le contenu." + "On gère le reste.") — UN SEUL H1 par page. Bien.
- Hiérarchie : H1 (Hero) → H2 (SectionHeader dans chaque section) → H3 (cards dans FreelanceVsAgence, EcosystemeIrys, ProcessSwimlane) — hiérarchie correcte.
- Alt text : présent uniquement sur les 2 images fondateurs (CalendlySection.tsx:145). Pas d'autres images.
- Icônes lucide-react (X, CheckCircle2, ChevronDown, Calendar, Gift, Video, Star) : aucun aria-hidden trouvé sur les SVG dans les composants. À corriger.
- Landmarks ARIA : <nav> (Navbar.tsx), <main> (page.tsx), <footer> (Footer.tsx) présents. <section> avec id pour chaque section. Bien.

JSON-LD (layout.tsx lignes 91-167)
- Organization + ProfessionalService combinés avec @type array — valide Schema.org.
- FAQPage avec 5 questions/réponses — synchronisé avec FAQ.tsx (5 FAQS). Parfait.
- Manque : VideoObject pour le portfolio (6 vidéos), SoftwareApplication pour les outils (Frame.io, Notion, Slack). Opportunité de rich snippets vidéo.
- Fondateur "Quentin" sans nom de famille dans le JSON-LD — incomplet pour la confiance SEO.
- logo : 'https://irysagency.com/images/logo.png' référencé dans JSON-LD mais /public/images/ ne contient que les placeholders fondateurs.

Technique
- Sitemap XML : généré automatiquement, valide (sitemap.xml + sitemap-0.xml dans /public). Bien.
- robots.txt : correct, pointe vers sitemap. Bien.
- URLs propres : one-page avec ancres + 3 pages légales — structure simple et propre.
- Aucune pagination, aucune redirection à vérifier.

Mots-clés dans fr.json (occurrences)
- "agence montage vidéo" : 2 occurrences (footer tagline, offres subtitle)
- "infopreneur" : 4 occurrences (hero label, eco subtitle, FAQ a3, footer — calculé sur le texte complet)
- "montage vidéo" : 6 occurrences (titres hero label, process h2, FAQ a3, descriptions)
- "déléguer" : 0 occurrence (hero subtitle utilise "Déléguer" avec majuscule — présent mais rare)
- "YouTube Shorts" : 0 occurrence explicite (on parle de "Reels & Shorts" et "YouTube & Vlogs" dans les filtres)
- "post-production" : 0 occurrence dans le body copy (uniquement en meta description et JSON-LD)
- Observation : le mot-clé "post-production" est dans les meta mais absent du contenu visible — gap SEO potentiel.

Points forts SEO : title optimisé, JSON-LD complet, sitemap, robots, balises OG.
Points faibles : hreflang EN manquant, og:image inexistante, logo.png manquant dans JSON-LD, "post-production" absent du body.

─────────────────────────────────────────────
AGENT 5 — ACCESSIBILITÉ (WCAG 2.1 AA)
─────────────────────────────────────────────
Score : 7/10

Navigation clavier
- :focus-visible : défini globalement dans globals.css lignes 43-51 → outline: 2px solid #EE1D52 avec offset 3px. Bien visible sur fond sombre.
- Ordre de focus : logique — Navbar (logo → liens → CTA) → main sections → Footer.
- FAQ navigable au clavier : aria-expanded + aria-controls + aria-labelledby + role="region" dans FAQ.tsx — conforme WCAG. Très bien.
- Focus trap sur modal : le modal vidéo dans Portfolio.tsx (lignes 262-284) N'A PAS de focus trap. L'overlay ferme au clic sur la div mais aucune gestion du focus clavier à l'intérieur. PROBLÈME WCAG.
- Les boutons de navigation carousel (Previous/Next) dans Portfolio.tsx ont opacity:0 et ne deviennent visibles qu'au hover de groupe (lignes 230, 237) — inaccessibles via clavier sur mobile/tactile.

Screen readers
- Boutons avec aria-label : Menu hamburger (Navbar:92), boutons carousel (Portfolio:231,238), bouton fermer modal (Portfolio:278), icônes réseaux sociaux (Footer:89), LanguageSwitcher (ligne 19). Globalement bien.
- Alt text : présent sur les images fondateurs. Manque sur les vidéos (pas d'attribut title ni description alternative).
- Icônes SVG lucide-react : aucun aria-hidden trouvé dans les composants. Les icônes X, CheckCircle2, ChevronDown, Calendar, Gift, Video, Star sont rendus sans aria-hidden, ce qui peut polluer les screen readers avec des noms d'icônes génériques.
- Icônes SVG customs dans EcosystemeIrys.tsx (TOOL_ICONS), Footer.tsx (InstagramIcon, TikTokIcon, LinkedInIcon) : aucun aria-hidden. Les icônes Footer ont aria-label sur le lien parent — acceptable. Les icônes TOOL_ICONS EcosystemeIrys n'ont pas aria-hidden.
- Les étoiles ★★★★★ dans CalendlySection.tsx ligne 164 sont du texte brut non marqué aria-hidden — un screen reader lira "étoile étoile étoile étoile étoile".
- Les caractères ▶ dans Portfolio.tsx (lignes 130, 198, 256) — texte brut, sera lu par screen reader comme "symbole lecteur de droite" ou similaire.
- `lang="fr"` sur html : présent (layout.tsx ligne 175) — bien. Mais il ne change pas dynamiquement quand l'utilisateur switche en EN via LanguageSwitcher. PROBLÈME : la balise html reste lang="fr" même quand le contenu est en anglais.

Contraste des couleurs
Calculs approximatifs (fond #080808 ≈ noir) :
- Texte principal #F5F0E8 sur fond #080808 : ratio ≈ 20.5:1 — EXCELLENT (AA exige 4.5:1, AAA 7:1)
- Texte subdued rgba(245,240,232,0.5) ≈ #7A7772 sur #080808 : ratio ≈ 5.9:1 — PASSE AA
- Texte faint rgba(245,240,232,0.35) ≈ #565350 sur #080808 : ratio ≈ 3.7:1 — ÉCHOUE AA (< 4.5:1) — PROBLÈME
- Accent #EE1D52 sur fond #080808 : ratio ≈ 4.7:1 — PASSE AA (limite)
- Accent #EE1D52 sur blanc #FFFFFF : ratio ≈ 4.4:1 — ÉCHOUE légèrement AA (besoin 4.5:1) — PROBLÈME mineur
- text-subdued sur fond surface #111111 : ratio ≈ 5.6:1 — PASSE

Animations
- prefers-reduced-motion : respecté dans globals.css (lignes 474-488), useScrollReveal.ts (ligne 28), ProcessSwimlane.tsx (ligne 20). Bien.
- DustParticles.tsx : N'A PAS de vérification prefers-reduced-motion — continue d'animer même si l'utilisateur préfère les mouvements réduits.
- Vidéos autoplay avec muted + playsInline — conforme. Vérification saveData présente.
- .irys-halo-animated : animation infinie 8s, bien stoppée par @media (prefers-reduced-motion: reduce).
- .irys-pulse-video (globaux.css ligne 469) : animation infinie NON arrêtée par le @media prefers-reduced-motion (la règle n'inclut pas .irys-pulse-video). PROBLÈME MINEUR.

Ce qui bloque les 6 points Lighthouse accessibilité restants (estimation depuis 94/100) :
1. lang HTML non mis à jour dynamiquement lors du switch de langue
2. Icônes SVG sans aria-hidden (pollue le tree d'accessibilité)
3. Focus trap manquant sur le modal vidéo Portfolio
4. Étoiles ★★★★★ non masquées aux screen readers
5. Couleur --color-text-faint (ratio ~3.7:1) utilisée à des endroits potentiellement textuels
6. .irys-pulse-video non couverte par prefers-reduced-motion

─────────────────────────────────────────────
AGENT 6 — DESIGN & COHÉRENCE VISUELLE
─────────────────────────────────────────────
Score : 7/10

Couleurs hardcodées dans les composants (toutes instances trouvées)
- #FFFFFF : Hero.tsx ligne 135 (couleur stat value — devrait être var(--color-text))
- #ff3232 : FreelanceVsAgence.tsx lignes 50, 84 (X icon rouge — couleur absente des variables CSS)
- #22c55e : FreelanceVsAgence.tsx lignes 61, 93 (CheckCircle vert — couleur absente des variables CSS)
- #EE1D52 : EcosystemeIrys.tsx lignes 97, 153 / ProcessSwimlane.tsx lignes 165, 188, 200, 259 / CalendlySection.tsx lignes 160, 163, 179 → devrait être var(--color-accent) dans tous ces cas
- Note : #A855F7 (purple) et #000 /#0a0a0a dans globals.css (.irys-btn-premium) — classe définie mais non utilisée dans les composants, ignorable.

Double typographie Inter/Outfit + Ivy Presto
- H1 Hero.tsx : lignes 64-80 — "Tu crées le contenu." en font-heading (Outfit), "On gère le reste." en font-display-italic (IvyPresto). Appliqué. BIEN.
- H2 dans SectionHeader.tsx ligne 58 : titlePart1 en font-heading, titleItalic en font-display-italic via span.font-display-italic. Système cohérent.
- Sections avec H2 dual-font appliquée via SectionHeader : Portfolio, FreelanceVsAgence, EcosystemeIrys, ProcessSwimlane, Offres, CalendlySection, FAQ. Toutes couvertes.
- ProcessSwimlane.tsx H2 manuel (ligne 122-131) : dual-font appliquée manuellement cohéremment.
- Note : la CLAUDE.md mentionne "Inter bold + Ivy Presto italic" mais le code utilise Outfit (heading) + Ivy Presto. Outfit est importé comme police heading dans layout.tsx. Divergence de documentation mais cohérence du code.

Border-radius
- Cohérent : rounded-full (CTAs, badges), rounded-2xl (cards grandes), rounded-xl (vidéos), rounded-lg (footer icons), 16px/borderRadius dans les styles inline. Uniformité globalement respectée.

Espacement entre sections
- Toutes les sections principales : py-24 (96px top + bottom). Cohérent.
- Hero : pas de py-24 (section full-height) — justifié.

Composants cards
- Offres/Abonnements : SpotlightCard avec glassmorphism (.irys-card via SpotlightCard). Cohérent.
- FreelanceVsAgence comparison card : .irys-card. Cohérent.
- Argument cards FreelanceVsAgence + FAQ items : .irys-card-simple. Cohérent.
- Ecosystem items : pas de card, design ligne — différent mais intentionnel.
- Process timeline : style inline background/border/borderRadius — légèrement divergent des classes utilitaires mais même esthétique.

Boutons
- 4 types définis dans globals.css : irys-btn-outline, irys-btn-accent, irys-btn-accent-filled, irys-btn-accent-outline-large. Cohérent.
- irys-btn-premium défini en CSS mais jamais utilisé dans les composants — mort.
- Portfolio "Voir tout le portfolio" : bouton blanc custom (non dans le système de boutons) — seule exception.

Icônes lucide-react
- ICON_PROPS = { size: 20, strokeWidth: 1.5 } dans Offres.tsx ligne 15 — mais pas utilisé systématiquement dans tous les composants.
- Portfolio.tsx ChevronLeft/ChevronRight : w-6 h-6 (24px), strokeWidth par défaut.
- FAQ.tsx ChevronDown : h-5 w-5 (20px).
- FreelanceVsAgence.tsx X : h-4 w-4 (16px), CheckCircle2 : h-4 w-4 (16px).
- Variations de tailles justifiées par le contexte mais pas documentées.

Emojis résiduels
- Aucun emoji trouvé dans les composants.
- Caractères spéciaux non-emoji : ▶ (Portfolio.tsx:130,198,256), ★★★★★ (CalendlySection.tsx:164), ✦ (Offres fr.json : "Premium ✦"). Ces caractères ne sont pas des emojis mais des caractères Unicode décoratifs.

Animations
- DustParticles : canvas requestAnimationFrame — non transform/opacity (canvas direct).
- Héro fade-up : transform + opacity via CSS keyframes. Bien.
- useScrollReveal : opacity + transform. Bien.
- framer-motion (Offres, FAQ, PackCard) : opacity + height/y. Bien.
- Hover cards (globals.css) : transform translateY(-4px). Bien.
- Durées : 0.2-0.55s selon le contexte. Cohérent.
- irys-halo-pulse : opacity + scale — correct.

Mobile (< 375px)
- Hero : clamp(64px, 7vw, 88px) pour le H1 — à 375px = min(64px, ~26px) → 64px minimum, possiblement trop grand sur 320px.
- Stats hero : flex-wrap avec gap-x-6 et items w-[45%] — adaptatif.
- Navbar : hamburger présent sur mobile, menu déroulant. Bouton CTA : py-3, largeur pleine. > 44px hauteur. Bien.
- Offre cards : min-h-[550px] sur mobile — cards très hautes sur petit écran, scroll nécessaire.
- Taille minimale boutons : les CTA (irys-btn-accent-filled = py-4 = 64px avec texte ≈ 48px total) — > 44px. Bien.

─────────────────────────────────────────────
AGENT 7 — UX & CONVERSION
─────────────────────────────────────────────
Score : 7/10

Parcours de conversion
Hero (section #hero)
→ 2 CTAs : "Voir le portfolio →" (ancre #portfolio) + "Je veux mes 40h par mois →" (ancre #calendly)
→ Stats sociales : +54 créateurs, +1600 vidéos, +2500h rushs, ~40h gagnées
→ CTA primaire vers Calendly direct depuis le Hero — bon. CTA secondaire vers preuve (portfolio).

Portfolio (#portfolio)
→ Preuve sociale par vidéos. Tab filter (Reels/Ads/YouTube). Carousel.
→ ZONE MORTE potentielle : les vidéos sont des placeholders vides (72 octets). Sans vrai contenu vidéo, cette section ne convertit pas.
→ CTA vers Vimeo en bas — sort du site. Risque de perte de l'utilisateur.

Comparatif Freelance vs Agence (#freelance-vs-agence)
→ 6 points de comparaison bien construits. 3 argument cards en dessous.
→ PAS de CTA dans cette section — zone morte en termes de conversion directe.

Écosystème Irys (#ecosysteme)
→ 3 outils (Frame.io, Notion, Slack) — rassure sur le process.
→ PAS de CTA — zone morte conversion.

Process Swimlane (#methode)
→ 4 étapes claires. CTA "Lancer ma production" → #calendly en bas.
→ Bonne position du CTA après le process.

Offres (#offres)
→ Tab abonnements/packs. 3 abonnements + 5 packs.
→ Badges de confiance "AUCUN ENGAGEMENT" + "PREMIÈRE VIDÉO OFFERTE" bien visibles en haut.
→ Chaque card CTA → #calendly.
→ PROBLÈME : la différence de prix entre Machine à Shorts (425€) et Croissance Totale (1 325€) est très grande (3x). La valeur perçue du saut de prix n'est pas explicitée dans les cards.

Calendly (#calendly)
→ Section principale de conversion. Embed Calendly + profils fondateurs.
→ "Teste-nous gratuitement" trust badge visible.
→ Stats fondateurs chiffrées (1,7M vues, 6 clients en 2 mois).

FAQ (#faq)
→ 5 questions. CTA "Une question très spécifique ? Pose-la en direct." → #calendly.
→ Bonne position : résoudre les doutes juste avant ou après Calendly.

Zones mortes identifiées :
- Section Comparatif Freelance vs Agence : aucun CTA
- Section Écosystème Irys : aucun CTA
- Section Portfolio : CTA vers Vimeo (externe) mais pas vers Calendly

Objections adressées
1. Prix (trop cher ?) : badges "AUCUN ENGAGEMENT" + "PREMIÈRE VIDÉO OFFERTE" — ADRESSÉ. Mais le saut de prix 425€→1325€ sans explication intermédiaire peut bloquer.
2. Contrôle (je garde la main ?) : FAQ q1 "Je garde le dernier mot" — ADRESSÉ. Section Process montre les étapes de validation.
3. Qualité (comment je sais ?) : Vidéos portfolio (placeholders pour l'instant) + "Teste-nous gratuitement" — PARTIELLEMENT ADRESSÉ (dépend des vraies vidéos).
4. Engagement (si ça marche pas ?) : FAQ q5 "Suis-je coincé" + "préavis 30 jours" — ADRESSÉ.
5. Complexité (facile à démarrer ?) : Section Process en 4 étapes + "Lancer ma production" CTA — ADRESSÉ.

Social proof
- Stats hero : "+54 créateurs propulsés", "+1 600 vidéos publiées" — crédibles mais non vérifiables. Chiffres ronds suspects (exact 1600 plutôt que 1647 par exemple).
- Stats fondateurs : "1,7M de vues en 3 mois" (Kilian), "6 clients signés en 2 mois avec 300 abonnés" (Quentin) — chiffres précis et crédibles.
- MANQUANT : témoignages clients, logos clients, captures d'écran résultats — section testimonials absente du site.
- MANQUANT : NPS, notes, avis clients.
- Photos fondateurs : placeholders — nuit à la crédibilité et au lien humain.

Clarté de l'offre
- Comprendre en < 5 secondes : Hero title "Tu crées le contenu. On gère le reste." + badge "Agence montage vidéo dédiée aux infopreneurs" → OUI, clair.
- Différence entre les 3 abonnements : noms (Machine à Shorts / Croissance Totale / Conversion Max) + prix affichés. Les taglines expliquent le positionnement. CLAIR.
- "Première vidéo offerte" : présent dans les badges trust section Offres (texte tout en majuscule, tracking [0.2em]) ET dans le trust badge de la section Calendly. Visible mais petit (font 10px en majuscule).

Taux de conversion estimé : MOYEN
Justification : L'architecture est logique, les objections sont adressées, les CTAs sont présents. Deux freins majeurs : (1) les vidéos portfolio sont vides (manque de preuve de qualité), (2) absence de témoignages clients. Le funnel mène bien vers Calendly mais la preuve sociale est insuffisante pour un infopreneur qui doit dépenser 425€+/mois minimum.

─────────────────────────────────────────────
AGENT 8 — COPYWRITING & VOIX
─────────────────────────────────────────────
Score : 8/10

Cohérence de ton
- Tutoiement : 100% cohérent sur tout le fr.json. "Tu crées", "Tu filmes", "Tu déposes", "Tu valides", "Tu hésites"... Impeccable.
- Phrases naturelles, pas corporate. Ton direct et assumé.
- Aucune formule "IA" détectée (pas de "dans le monde actuel", "en tant que", "solution clé en main complexe").
- Très peu de jargon — "done-for-you" utilisé une seule fois dans le JSON-LD (pas dans le copy visible).

Section par section

HERO
- Badge : "Agence montage vidéo dédiée aux infopreneurs" — informatif, keyword ciblé. BIEN.
- H1 "Tu crées le contenu." / "On gère le reste." — accrocheur, bénéfice immédiat, < 3 secondes. BIEN.
- Subtitle : "Déléguer ton montage vidéo ne doit pas être un casse-tête. Tu filmes, on monte, on publie. Récupère ce temps pour scaler." — clair, bénéfice actionnable. Le mot "scaler" (anglicisme) peut ne pas résonner pour tout l'ICP.
- CTA primaire : "Je veux mes 40h par mois →" — très spécifique, chiffre mémorisable, bénéfice clair. EXCELLENT.
- Stats : "+54 créateurs propulsés", "+1 600 vidéos publiées", "+2 500h de rushs transformés", "~40h de temps gagné par mois" — BIEN mais le "~" devant 40h crée une hésitation (approximation).

PORTFOLIO
- H2 : "Des vidéos conçues pour capter ton audience." — bénéfice clair, accrocheur. BIEN.
- Subtitle : "Regarde ce qu'une agence short form content apporte à ta marque." — "short form content" est un anglicisme. À franciser pour l'ICP coaching/formateurs.
- CTA bas : "Voir tout le portfolio" → Vimeo externe. Logique mais risque de sortie.

COMPARATIF
- H2 : "Un freelance ou une agence ? La vraie différence." — questionne la problématique exacte de l'ICP. BIEN.
- Comparaisons : percutantes et concrètes. "Il disparaît souvent en vacances." vs "Une équipe entière prête chaque matin." — opposition claire. BIEN.
- Arguments : "Zéro retard", "Ton clone créatif", "La tranquillité totale" — formulations mémorables. BIEN.

ÉCOSYSTÈME
- H2 : "Un vrai système. Pas juste un monteur." — différenciation claire vs freelance. BIEN.
- Subtitle : "Ton agence vidéo infopreneurs déploie une machine bien huilée." — "déploie une machine bien huilée" est légèrement mécanique/corporate.
- Cards : bénéfices orientés client (valider en un clic, suivre ta production, parler à ton équipe). BIEN.

PROCESS
- H2 : "Déléguer ton montage vidéo ? C'est très simple." — rassure directement sur la complexité. BIEN.
- Étapes bien équilibrées Toi/Irys. Pill summary "Toi : 10 min par vidéo" / "Irys : 40h gagnées par mois" — mémorable. BIEN.
- CTA : "Lancer ma production" — actionnable, engageant. BIEN.

OFFRES
- H2 : "Choisis la machine qui te fait grandir." — métaphore machine cohérente. BIEN.
- Subtitle : "Une agence montage vidéo s'adapte à tes objectifs financiers. Trouve le plan parfait pour ton audience." — correct mais générique.
- Noms des offres : "Machine à Shorts" / "Croissance Totale" / "Conversion Max" — mémorables, différenciants. BIEN.
- Features : certaines sont des features déguisées en bénéfices ("Ton espace de validation privé" = feature Frame.io présenté côté client — bien), d'autres moins : "3 allers-retours pour viser juste" = limitation présentée en bénéfice — AMBIGU.
- Tags offres : "AUCUN ENGAGEMENT MINIMUM" + "TA PREMIÈRE VIDÉO EST OFFERTE" en majuscules tracking — lisible mais trop petit (10px, tracking 0.2em).

CALENDLY/BOOKING
- H2 : "Parlons de ta prochaine vidéo." — très conversationnel, léger, non intimidant. EXCELLENT.
- Trust badge "Teste-nous gratuitement." — direct. "Envoie un rush brut. On te montre notre vrai niveau. Tu décides ensuite." — EXCELLENT, sans jargon, concret.
- Bios fondateurs : "Il cumule 1,7M de vues en 3 mois sur ses réseaux." et "6 clients signés en 2 mois avec 300 abonnés." — résultats chiffrés, pas un CV. BIEN.

FAQ
- H2 : "Les questions qu'on nous pose avant de signer." — honnête, contexte pertinent. BIEN.
- Réponses : courtes, directes, tutoiement, pas de langue de bois. EXCELLENT.
- CTA FAQ : "Une question très spécifique ? Pose-la en direct." — invitation douce, non pushy. BIEN.

Features vs Bénéfices — analyse des offres
BIEN transformées en bénéfices :
- "8 vidéos virales prêtes à publier" (bénéfice)
- "Ta ligne directe avec notre équipe" (bénéfice relation)
- "Tes statistiques décryptées chaque mois" (bénéfice compréhension)
AMBIGUËS :
- "3 allers-retours pour viser juste" — limite présentée comme bénéfice
- "Ton espace de validation privé" — feature (Frame.io) sans explication du bénéfice

TOP 10 PHRASES À RÉÉCRIRE EN PRIORITÉ
1. "Déléguer ton montage vidéo ne doit pas être un casse-tête." → double négatif — réécrire : "Déléguer ton montage vidéo, c'est simple. C'est là qu'on intervient."
2. "Récupère ce temps pour scaler." → "scaler" anglicisme — "Récupère ce temps pour développer ton business."
3. "Regarde ce qu'une agence short form content apporte à ta marque." → anglicisme — "Regarde ce qu'une agence de contenu court apporte à ton audience."
4. "Ton agence vidéo infopreneurs déploie une machine bien huilée." → corporate — "Trois outils. Zéro friction. Ta production tourne toute seule."
5. "Une agence montage vidéo s'adapte à tes objectifs financiers." → trop vague — "L'offre qui colle à ta vitesse de croissance. Commence petit, scale quand tu es prêt."
6. "3 allers-retours pour viser juste" → limite perçue négativement — "3 retours précis pour un résultat parfait"
7. "~40h de temps gagné par mois" → le "~" affaiblit la stat — "40h récupérées chaque mois" (ou clarifier la base du calcul)
8. "Ton espace de validation privé" → feature opaque — "Tu valides en 2 clics sur ta plateforme dédiée"
9. "Réserve 30 minutes avec un expert montage vidéo coach formateur" — maladroit syntaxiquement — "Réserve 30 minutes avec l'un de nos fondateurs"
10. "Des retours illimités pour la perfection" (Croissance Totale) → "illimités" crée de l'anxiété pour l'agence — "Autant de retours qu'il faut pour viser la perfection"

═══════════════════════════════════════════════
FIN DU RAPPORT
Généré le 27 mars 2026
═══════════════════════════════════════════════
