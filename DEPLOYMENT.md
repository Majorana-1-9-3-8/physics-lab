# Publier Physics Lab avec GitHub

## Recommandation : GitHub pour le code, Vercel pour le site

GitHub stocke et versionne le code. **GitHub Pages** sert surtout les sites statiques ; pour cette application Next.js, la méthode la plus simple est de stocker le code sur GitHub puis de connecter le dépôt à **Vercel**, qui construit et héberge le site.

## 1. Quels fichiers envoyer sur GitHub ?

Envoyer le contenu du dossier `physics_lab/` :

- `app/`
- `globals.css`
- `package.json` et `package-lock.json`
- `next.config.mjs`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `next-env.d.ts`
- `README.md`, `DEPLOYMENT.md`, `.gitignore`

Ne pas envoyer :

- `node_modules/` : les dépendances seront réinstallées avec `npm install` ou `npm ci`.
- `.next/` : les fichiers générés par Next.js seront reconstruits lors du déploiement.
- `.env*` contenant des clés, mots de passe ou autres secrets.

Le fichier `.gitignore` du projet exclut déjà ces fichiers générés et locaux.

## 2. Envoyer le projet avec Visual Studio Code

1. Télécharger et décompresser l'archive source de Physics Lab.
2. Dans Visual Studio Code, ouvrir le dossier décompressé `physics_lab` (celui qui contient `package.json`).
3. Sur GitHub, créer un dépôt vide nommé par exemple `physics-lab`. Pour cette méthode, ne pas lui ajouter un deuxième README ou `.gitignore`.
4. Dans VS Code, ouvrir **Contrôle de code source** (icône branche), choisir **Initialiser le dépôt**, puis ajouter les fichiers, faire un commit initial et choisir **Publier la branche sur GitHub**. Se connecter à GitHub si VS Code le demande.
5. Choisir si le dépôt sera public ou privé. Ne jamais y déposer de secrets.

### Variante en terminal

Dans le terminal intégré de VS Code, depuis le dossier qui contient `package.json` :

```bash
git init -b main
git add .
git commit -m "Initial commit - Physics Lab"
git remote add origin https://github.com/VOTRE-PSEUDO/physics-lab.git
git push -u origin main
```

Remplacer `VOTRE-PSEUDO` par votre nom GitHub. Si Git indique que le dépôt distant contient déjà des fichiers, créer un dépôt vide ou synchroniser d'abord les deux dépôts.

## 3. Publier l'application avec Vercel

1. Créer/ouvrir un compte Vercel et choisir **Continue with GitHub**.
2. Autoriser Vercel à accéder au dépôt `physics-lab`.
3. Choisir **Add New → Project**, puis **Import** à côté du dépôt.
4. Garder les réglages détectés : framework **Next.js**, dossier racine `./`, commande de build `npm run build`.
5. Cliquer sur **Deploy**. Vercel affiche une URL publique en `vercel.app` à la fin du déploiement.
6. Ensuite, chaque nouveau commit envoyé à GitHub déclenche automatiquement un nouveau déploiement.

Pour associer un nom de domaine personnel, le configurer dans les réglages du projet Vercel, puis suivre les instructions DNS fournies par Vercel.

## 4. Si vous voulez absolument GitHub Pages

GitHub Pages ne lance pas une application Next.js comme un serveur Node.js. Il faut configurer Next.js en export statique (`output: "export"`) et ajouter une action GitHub qui construit puis publie le dossier `out/`. Pour un dépôt de projet hébergé sous `pseudo.github.io/nom-du-depot`, il faut aussi gérer le chemin de base (`basePath`) afin que les pages et fichiers CSS/JS soient trouvés. Cette version n'est pas configurée pour GitHub Pages ; Vercel est donc la voie la plus simple pour commencer.

## 5. Vérifications avant de partager

- `npm install` puis `npm run build` fonctionnent dans la version du projet.
- `npm audit --omit=dev` ne signale actuellement aucune vulnérabilité de dépendance de production.
- Les pages actuellement disponibles sont `/`, `/formation`, `/projets` et `/progression`.
- La plateforme reste un prototype : les pages de modules détaillées et la sauvegarde persistante de la progression sont encore à construire.
