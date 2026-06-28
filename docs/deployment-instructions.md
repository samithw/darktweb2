# 🛠️ NEXT.JS FUTURE WORKFLOW GUIDE (TERMINAL SCRIPT VERSION)

### PHASE 1: DEVELOP & TEST (DEVELOPMENT SITE)
1. Open `next.config.ts` and **UNCOMMENT** the dev lines so it looks like this:

```typescript
// 👇 uncomment for darktweb2 or origin - comment for prod
const repoName = 'darktweb2'

// 👇 uncomment for darktweb2 or origin - comment for prod
  basePath: isProd ? `/${repoName}` : '', // <-- ensures GitHub Pages paths work
  assetPrefix: isProd ? `/${repoName}/` : '', // <-- fixes static assets path 2
```

2. Save the file, write your features, and test them locally on your machine.
3. Open your terminal and run these commands to push to your staging environment:

```bash
git add .
git commit -m "feat: updates for dev site"
git push origin main
```

4. Go to GitHub, navigate to the **darktweb2** repository, look under Actions, and manually trigger the **workflows/main.yml** workflow to deploy.

---

### PHASE 2: DEPLOY TO PRODUCTION (PRODUCTION SITE)
5. Open `next.config.ts` and **COMMENT OUT** those lines so they look like this:

```typescript
// 👇 uncomment for darktweb2 or origin - comment for prod
// const repoName = 'darktweb2'

// 👇 uncomment for darktweb2 or origin - comment for prod
//   basePath: isProd ? `/${repoName}` : '', // <-- ensures GitHub Pages paths work
//   assetPrefix: isProd ? `/${repoName}/` : '', // <-- fixes static assets path 2
```

6. Open your terminal and run these commands to force-update production:

```bash
git add .
git commit -m "config: comment out dev config for prod"
git push prod main --force
```

7. Go to GitHub, navigate to the **darktwebssg** repository, look under Actions, and manually trigger the **workflows/main.yml** workflow to deploy.

---

### PHASE 3: RESET FOR NEXT TIME (RESET LOCAL STATE)
8. Open `next.config.ts` and **UNCOMMENT** the lines back to how they were in Phase 1.
9. Open your terminal and run these commands to reset your workspace:

```bash
git add .
git commit -m "config: restore dev comments"
git push origin main
```

*💡 Note: If you ever install a new package via `npm install`, always commit both your `package.json` and `package-lock.json` files to keep the strict automated `npm ci` pipelines running smoothly!*