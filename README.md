# Physics Lab

Plateforme d'apprentissage personnelle pour apprendre le C++ et l'appliquer à la physique et aux simulations. Le site est construit avec Next.js, React, TypeScript et Tailwind CSS.

## État actuel

Cette version est un **prototype de site** comprenant la page d'accueil, les pages Formation, Projets et Progression. Le contenu détaillé des leçons, plusieurs pages de modules et l'enregistrement durable de la progression restent à développer. La page Progression est actuellement une maquette locale et ne sauvegarde pas encore les changements.

## Prérequis

- Node.js 20.9 ou supérieur
- npm

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Vérifier la compilation de production

```bash
npm run build
npm run start
```

## Publier le site

Le dépôt GitHub conserve le code source. Pour publier facilement cette application Next.js, importez le dépôt dans **Vercel** (connexion avec GitHub, puis *Add New → Project*). Vercel détecte normalement Next.js et lance `npm run build` automatiquement. Chaque nouveau push sur la branche principale déclenchera ensuite un nouveau déploiement.

Consultez `DEPLOYMENT.md` pour le guide détaillé.

## Fichiers importants

- `app/` : pages et mise en page du site
- `globals.css` : styles globaux
- `package.json` et `package-lock.json` : dépendances et scripts
- `next.config.mjs`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js` : configuration
- `.gitignore` : fichiers locaux à ne pas envoyer sur GitHub
