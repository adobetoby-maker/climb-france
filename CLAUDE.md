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

## Images — Source Record

All images in `public/images/routes/` are from Pexels (free commercial license, no attribution required).
Every image was visually verified on 2026-05-24. Previous set was entirely wrong (tulips, nude couple, airport, roses, etc.) — fully replaced.

| File | Pexels ID | Subject |
|---|---|---|
| france-calanques-bay.jpg | 29824824 | Calanques limestone cove with turquoise water from above |
| france-calanques-cliff.jpg | 29824820 | Calanques white limestone cliff above deep blue sea |
| france-calanques-route.jpg | 33169568 | Climber on grey limestone wall, rope visible |
| france-calanques-sea.jpg | 28376228 | Calanques aerial — limestone headlands, Med sea |
| france-ceuse-approach.jpg | 24592777 | B&W — two climbers rappelling massive rock face |
| france-ceuse-crag.jpg | 28622725 | Female sport climber on limestone, helmet, red rope |
| france-ceuse-crux.jpg | 17926530 | Climbers at base of tall limestone crag |
| france-ceuse-view.jpg | 2734521 | Verdon Gorge aerial — turquoise river, kayaks, canyon walls |
| france-font-boulder.jpg | 14788384 | Person at mossy sandstone boulder formation in forest |
| france-font-circuit.jpg | 15688413 | Orange sandstone wall in autumn forest |
| france-font-crux.jpg | 5487463 | Sandstone boulders with forest path between them |
| france-font-forest.jpg | 22882430 | Dark rocky sandstone towers in pine forest |
| france-tarn-gorge.jpg | 12266799 | Turquoise river through limestone gorge, cliff overhead |
| france-tarn-river.jpg | 11267239 | Aerial — turquoise gorge river with bridge |
| france-tarn-route.jpg | 35555500 | Climber on overhanging limestone, gear on harness |
| france-tarn-village.jpg | 11267241 | Aerial — turquoise river winding through deep limestone gorge |
| france-tarn-wall.jpg | 28751636 | Climber on grey-green limestone wall, vintage |
| france-verdon-canyon.jpg | 7975105 | Verdon Gorge — vertical limestone walls, turquoise river below |
| france-verdon-gorge.jpg | 878164 | Verdon Gorge — narrow canyon, brilliant turquoise water |
| france-verdon-rappel.jpg | 11708153 | Verdon Gorge — turquoise water filling canyon, limestone walls |
| france-verdon-wall.jpg | 34523816 | Aerial — Verdon canyon with paddleboards and kayaks |

To replace any image: `curl -sL "https://images.pexels.com/photos/PEXELS_ID/pexels-photo-PEXELS_ID.jpeg?auto=compress&cs=tinysrgb&w=1600" -o public/images/routes/FILENAME.jpg`

## Deployment

Vercel auto-deploy on push to main.
DO NOT run wrangler deploy — Vercel handles it.
Vercel project: climb-france (create via Vercel dashboard or CLI)
