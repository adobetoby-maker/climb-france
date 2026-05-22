@AGENTS.md
@SITE.md
@INTENT.md

# Climb France — Mandatory Rules

## This Is France, Not Kalymnos or Brasil

SITE.md is the source of truth. Never hardcode:
- Country (France, not Greece or Brazil)
- Emergency numbers (15 SAMU / 17 police / 18 fire — NOT 166/EKAB)
- Language keys (must be: 'en' | 'fr' | 'de' — no 'it', 'el', 'pt', 'es')
- Accent colour (#D4185A French red — not #1B74C8 Aegean blue)
- Coordinates (46.2276° N, 2.2137° E — not Kalymnos or Brasil)

## Clone Checklist — Run This First On Every Task

```bash
grep -r "Kalymnos\|kalymnos\|EKAB\|166\|Kos\|Greece\|greek\|aegean\|Aegean" src/ --include="*.ts" --include="*.tsx" --include="*.json"
grep -r '"it"\|"el"\|it:\|el:\|\"pt\"\|\"es\"' src/ --include="*.ts" --include="*.tsx"
grep -r "climb-kalymnos\|climb-brasil\|worker-bee\.app" src/ wrangler.jsonc package.json 2>/dev/null
```

Fix every match before writing new code.

## TypeScript Discipline

Lang type: `'en' | 'fr' | 'de'` — exactly 3 keys
After ANY Lang change: `npx tsc --noEmit`
Record<Lang, string> requires all 3 keys — TypeScript will catch missing ones

## Vision Review — Required At Each Iteration

After completing code changes:
1. Kill any existing dev server: `lsof -ti :3002 | xargs kill -9 2>/dev/null; sleep 1`
2. Start dev server: `npm run dev -- -H 0.0.0.0 -p 3002 > /tmp/france-dev.log 2>&1 &`
3. Wait for ready: `sleep 10 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3002`
4. Screenshot: `node ~/screenshot.js 3002 0,500,1000,1500`
5. Read each screenshot and check:
   - No Kalymnos/Brasil references visible
   - French red accent (#D4185A) not Aegean blue
   - Language selector shows EN/FR/DE
   - No broken layouts, overlapping text, missing images
6. Fix any issues found before committing

## Commands

```bash
npm run dev -- -H 0.0.0.0 -p 3002    # dev server (always port 3002)
npm run build
npx tsc --noEmit                       # typecheck after Lang changes
node ~/screenshot.js 3002 0,500,1000   # visual review
```

## Deployment

Vercel auto-deploy on push to main.
DO NOT run wrangler deploy — Vercel handles it.
Vercel project: climb-france (create via Vercel dashboard or CLI)
