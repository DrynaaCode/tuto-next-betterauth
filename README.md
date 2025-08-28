# Next.js + Better Auth + shadcn UI

Ce projet est une application Next.js utilisant Better Auth pour l'authentification et shadcn UI pour l'interface utilisateur.

## Fonctionnalités
- Authentification sociale et email avec Better Auth
- UI moderne avec shadcn (sidebar, avatar, dropdown, skeleton loader)
- Sécurisation des pages et affichage dynamique de l'utilisateur
- Gestion du logout
- Skeleton loader pendant le chargement des données

## Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/<utilisateur>/<repo>.git
   cd my-app
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   # ou npm install ou yarn install
   ```

3. **Configurer l'environnement**
   - Crée un fichier `.env` avec tes variables (Better Auth, DB, etc.)
   - Exemple :
     ```env
     # Base de données
     DATABASE_URL=postgres://user:password@host:port/dbname

     # Better Auth
     BETTER_AUTH_CLIENT_ID=your-client-id
     BETTER_AUTH_CLIENT_SECRET=your-client-secret
     BETTER_AUTH_REDIRECT_URI=http://localhost:3000/api/auth/callback
     BETTER_AUTH_SECRET=your-better-auth-secret

     # Providers sociaux (exemple Google, Github)
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     GITHUB_CLIENT_ID=your-github-client-id
     GITHUB_CLIENT_SECRET=your-github-client-secret

     # Next.js
     NEXT_PUBLIC_APP_URL=http://localhost:3000

  
     ```

4. **Lancer le projet**
   ```bash
   pnpm dev
   # ou npm run dev ou yarn dev
   ```

## Dépendances principales
- next
- better-auth
- drizzle-orm (si tu utilises PostgreSQL)
- shadcn/ui
- @tabler/icons-react

## shadcn UI installés
- DropdownMenu
- Avatar
- Skeleton

Commandes utilisées :
```bash
pnpm dlx shadcn@latest add dropdown-menu avatar skeleton
```

## Structure principale
- `components/` : UI (NavUser, Sidebar, etc.)
- `app/api/auth/[...all]/route.ts` : endpoints Better Auth
- `app/api/session/route.ts` : infos publiques utilisateur
- `app/home/page.tsx` : page d'accueil protégée
- `lib/auth.ts` : config Better Auth
- `.gitignore` : fichiers à ignorer

## Initialisation Git
```bash
git init
git add .
git commit -m "Initial commit: Next.js + Better Auth + shadcn UI"
git branch -M main
git remote add origin https://github.com/<utilisateur>/<repo>.git
git push -u origin main
```

## Pour personnaliser
- Modifie les composants dans `components/`
- Ajoute d'autres UI shadcn avec `pnpm dlx shadcn@latest add <composant>`
- Configure Better Auth dans `lib/auth.ts`

## Liens utiles
- [Better Auth Docs](https://www.better-auth.com/docs/integrations/next)
- [shadcn UI Docs](https://ui.shadcn.com/docs/components/skeleton)
- [Next.js Docs](https://nextjs.org/docs)

---
