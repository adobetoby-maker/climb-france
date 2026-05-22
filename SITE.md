# Site Knowledge — Climb France

## Destination Facts

| Field | Value |
|---|---|
| Destination | France — multiple world-class climbing regions |
| Country | France (FR) |
| Currency | EUR |
| Language default | EN (geo-routed to FR/DE by header) |
| Supported languages | EN · FR · DE |
| Emergency — SAMU (ambulance) | 15 |
| Emergency — police | 17 |
| Emergency — fire/rescue | 18 |
| Emergency — European | 112 |
| Coordinates (centroid) | 46.2276° N, 2.2137° E |
| Airports | CDG (Paris), MRS (Marseille), NCE (Nice), LYS (Lyon) |

## Key Climbing Regions & Sectors

| Key | Region | Character | Airport |
|---|---|---|---|
| fontainebleau | Fontainebleau, Île-de-France | World's best bouldering, sandstone, 1h from Paris | CDG |
| verdon | Gorges du Verdon, Provence | 300m limestone walls, multi-pitch, Europe's Grand Canyon | MRS/NCE |
| ceuse | Céüse, Hautes-Alpes | World-class limestone sport 7a–9a, global pilgrimage crag | MRS/LYS |
| calanques | Calanques, Marseille | Sea cliff limestone, multi-pitch, stunning coastal approach | MRS |
| gorges-du-tarn | Gorges du Tarn, Occitanie | Limestone gorge, sport and trad, family-friendly | MRS/LYS |

## GitHub

Repo: https://github.com/adobetoby-maker/climb-france
Branch strategy: main = production, feature branches for significant changes

## Deployment

| Target | URL | How |
|---|---|---|
| Production | climb-france.vercel.app | Push to main → auto-deploys |
| Local dev | localhost:3002 | `npm run dev -- -H 0.0.0.0 -p 3002` |

Platform: Vercel (GitHub auto-deploy — no interactive auth ever needed)

## Affiliate Links & Revenue

### Bergfreunde (Primary — EU)
Program: Awin | Partner ID: `CLIMBFRANCE` (TODO: replace with Awin AWC)
URL: `https://www.bergfreunde.de/search?q=QUERY&awc=CLIMBFRANCE`

### Decathlon France
Program: Commission Junction | ID: `CLIMBFRANCE` (TODO: replace)
URL: `https://www.decathlon.fr/search?Ntt=QUERY&ref=CLIMBFRANCE`
Notes: Massive French brand trust — best for beginner/intermediate gear

### Amazon France (fallback)
Tag: `climbfrance-21` (TODO: replace)
URL: `https://www.amazon.fr/s?k=QUERY&tag=climbfrance-21`

### World Nomads (Travel Insurance)
ID: `CLIMBFRANCE` (TODO: replace with CJ link)
Notes: High conversion — Verdon multi-pitch rescue costs €2,000+

### Booking.com
AID: `CLIMBFRANCE` (TODO: replace with numeric AID)
URL: `https://www.booking.com/searchresults.html?ss=CITY&aid=CLIMBFRANCE`

### GetYourGuide (Guided Climbing)
Partner ID: `CLIMBFRANCE` (TODO: replace)
URL: `https://www.getyourguide.com/s/?q=QUERY&partner_id=CLIMBFRANCE`

### LanguageThreshold (Own Product — 100% margin)
URL: https://languagethreshold.com?ref=france
Module: https://languagethreshold.com/modules/french-climbers?ref=france

### JuniorLinguist (Own Product — 100% margin)
URL: https://juniorlinguist.com/?module=rock-climbing

All affiliate logic: `src/lib/affiliates.ts`

## Monetization Priority
Insurance > LanguageThreshold > GetYourGuide > Accommodation > Gear

## Language Configuration

Geo mapping:
- FR, MC → fr
- DE, AT, CH, LI → de
- All others → en

localStorage key: `climb-france-lang`
Middleware cookie: `climb-france-geo-lang`
