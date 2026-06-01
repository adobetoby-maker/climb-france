# KAIZEN — Climb France
Continuous improvement log. Review on every session. Close items when fixed.

---

## Open

### HIGH — Correctness
- [ ] **Missing 18 pages** — Site currently only has route/area pages. Missing: `/gear`, `/learn`, `/guided-tours`, `/travel-tips`, `/blog`, `/contact`, 5 base city pages (Paris, Lyon, Marseille, Nice, Toulouse or climbing-relevant cities), 3 itinerary pages, 3 blog posts. Parity with climb-utah/kalymnos feature set.
- [ ] **Amazon affiliate tag `climbfrance-20` unconfirmed** — Verify this tag exists and is active in Amazon Associates. If not, replace with `climbing00bb-20` (the confirmed working tag) across all gear references. Run `grep -r "climbfrance-20" src/`.

### MEDIUM — Affiliate
- [ ] **No gear callout on blog posts** — Blog posts (once added) need `gearLinks` arrays with France-specific gear: alpine draws, dry-treated ropes for Verdon, bouldering pads for Fontainebleau. Follow the pattern in climb-utah/climb-kalymnos.
- [ ] **No blog posts exist yet** — `src/lib/blog.ts` is either empty or has placeholder content. Add 3 posts minimum: Fontainebleau bouldering guide, Verdon Gorge sport climbing, Ceuse approach and conditions.

### LOW — Quality
- [ ] **Image alt text audit** — All 21 replaced images should have descriptive alt text in `src/lib/routes.ts` or wherever image metadata is defined. Verify no `alt=""` or generic `alt="climbing"` strings. Found: 2026-05-24 (not checked yet).
- [ ] **French emergency numbers** — Confirm 15/17/18 (SAMU/police/fire) appear correctly in any safety or contact content. CLAUDE.md mandate: never show 166/EKAB.

---

## Closed

| Date fixed | Item |
|---|---|
| 2026-05-24 | All 21 production images were wrong (tulips, nude couple, airport, roses) → fully replaced with verified Pexels climbing/France photos |
| 2026-05-24 | `france-ceuse-crag.jpg` was a nude couple photo (Pexels, lifestyle category) → replaced with Pexels 28622725 (female sport climber on limestone) |
| 2026-05-24 | Image sources documented in `CLAUDE.md` Images section with Pexels IDs and verified subjects |
| 2026-05-24 | ADR-0015 written — root cause of image content failure, new visual verification protocol |
