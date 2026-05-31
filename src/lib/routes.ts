export interface GymPrerequisites {
  leadGrade: string
  outdoorDays: string
  fitnessLevel: string
  skills: string[]
  gymDrills: string[]
  warning?: string
}

export interface GalleryPhoto {
  src: string
  alt: string
  category: 'area' | 'food' | 'approach' | 'climbing' | 'summit'
  caption: string
}

export interface ClimbingRoute {
  slug: string
  name: string
  region: string
  baseCity: string
  grade: { yosemite: string; french: string; difficulty: 1 | 2 | 3 | 4 | 5 }
  style: 'sport' | 'trad' | 'multi-pitch' | 'scramble' | 'bouldering'
  pitches: number
  approachTime: string
  climbTime: string
  totalDayTime: string
  elevationGainMeters: number
  description: string
  cruxDescription: string
  gearRequired: string[]
  gearMinimum: string[]
  gymPrerequisites: GymPrerequisites
  warnings: string[]
  guidedAvailable: boolean
  guidePrice?: string
  guideOperator?: { name: string; url: string; affiliate: boolean }
  nearbyEats: { name: string; type: string; priceRange: string }[]
  lodging: { name: string; type: string; priceRange: string; bookingUrl?: string; affiliate?: boolean }[]
  testimonials: { text: string; author: string; date: string; grade: string }[]
  images: { hero: string; gallery: string[] }
  gallery: GalleryPhoto[]
  rating: number
  reviewCount: number
  seasonBest: string[]
  logisticsNotes: string
  safetyNotes: string
}

export const routes: ClimbingRoute[] = [
  {
    slug: 'fontainebleau-apremont-dalle',
    name: 'Fontainebleau — Apremont Dalle',
    region: 'Île-de-France',
    baseCity: 'Fontainebleau',
    grade: { yosemite: 'V4–V7', french: 'Font 6a–7a', difficulty: 3 },
    style: 'bouldering',
    pitches: 0,
    approachTime: '5 min',
    climbTime: '3-5 hours',
    totalDayTime: 'full day',
    elevationGainMeters: 0,
    description: "Fontainebleau is the spiritual home of bouldering — a forest of sandstone boulders 65 km south of Paris, accessible by RER train without a car. The Apremont Dalle sector concentrates on friction slab movement: perfectly smooth white and orange sandstone where technique, balance, and mental commitment matter more than strength. Problems run from Font 4 to 7c+ across 30 named circuits colour-coded by difficulty. The blue circuit (Font 5b–6a) is the standard benchmark for a visiting intermediate climber. The forest floor is soft sand — natural crash pad — and the boulders rarely exceed 5m. Fontainebleau taught the world that movement quality matters. Every modern bouldering gym traces its lineage here.",
    cruxDescription: "Slab friction on the Apremont Dalle means pressing smeared feet against near-vertical sandstone with no visible footholds and trusting rubber. The crux of Font 6b problems is typically a high step onto a blank slab section at two-thirds height — the feet must commit fully or peel off. No chalk works on wet Font sandstone: come in dry conditions only.",
    gearRequired: [
      'Climbing shoes (flat or mildly downturned — aggressive shoes are counterproductive on slab)',
      'Chalk bag and chalk ball',
      'Portable crash pad (optional — the forest floor is soft sand)',
      'Forest map from the Fontainebleau tourist office or Bleau.info app',
    ],
    gearMinimum: [
      'Climbing shoes',
      'Chalk bag',
    ],
    gymPrerequisites: {
      leadGrade: 'V3–V4 indoor bouldering',
      outdoorDays: '1+ days on any outdoor rock',
      fitnessLevel: 'Beginner to intermediate',
      skills: [
        'Basic slab footwork — placing feet flat and trusting rubber on low-angle rock',
        'Balance on smeared feet without pulling with the hands',
        'Reading unobvious movement sequences on blank rock',
        'Falling safely on sand — learning to spot your own landings',
      ],
      gymDrills: [
        'Slab sessions on the lowest-angle section of your gym wall: focus on foot placement, not pulling',
        'Balance board practice: 30 seconds one-leg balance each session for two weeks',
        'Downclimb every problem you complete — Font technique requires controlled descents',
      ],
      warning: 'Font grades are serious. Font 6a is roughly V3–V4 on movement quality but the grades assume perfect technique and dry conditions. Arrive expecting to work harder than your gym grade suggests.',
    },
    warnings: [
      'Wet sandstone becomes near-frictionless — never climb at Fontainebleau after rain or in humid conditions. The rock takes 24–48 hours to dry properly.',
      'Tick marks (chalk dots to mark holds) damage the sandstone over time. Use them minimally and brush off before leaving.',
      'Some sectors are closed seasonally for nesting birds (February–June). Check closures at the forest entrance before driving to a sector.',
    ],
    guidedAvailable: true,
    guidePrice: 'EUR 60–90 per person for full-day circuit introduction',
    guideOperator: {
      name: 'Fontainebleau Climbing School',
      url: 'https://climbingdistrict.com/en/',
      affiliate: false,
    },
    nearbyEats: [
      { name: 'Le Franklin Roosevelt', type: 'French brasserie', priceRange: 'EUR 14–22pp' },
      { name: 'La Boulangerie de Fontainebleau', type: 'Bakery — sandwiches and pastries', priceRange: 'EUR 4–9pp' },
      { name: 'Café de la Paix', type: 'Café and lunch', priceRange: 'EUR 10–16pp' },
    ],
    lodging: [
      { name: 'Hôtel de Londres', type: 'hotel', priceRange: 'EUR 90–130/night', bookingUrl: 'https://www.booking.com/searchresults.html?ss=Fontainebleau', affiliate: true },
      { name: 'Camping La Croix du Guet', type: 'campsite', priceRange: 'EUR 12–18/night' },
    ],
    testimonials: [
      {
        text: "I took the RER from Paris on a Wednesday morning, climbed until 4pm, and was back in the city for dinner. The best day trip from any capital city in the world. The bouldering is world-class and completely free.",
        author: 'Margit K.',
        date: 'October 2024',
        grade: 'Font 6a',
      },
    ],
    images: {
      hero: '/images/routes/france-font-crux.jpg',
      gallery: ['/images/routes/france-font-forest.jpg', '/images/routes/france-font-boulder.jpg'],
    },
    gallery: [
      { src: '/images/routes/france-font-crux.jpg', alt: 'Climber topping out on rounded sandstone boulder at Fontainebleau with spotter below in green forest', category: 'climbing', caption: 'Fontainebleau bouldering — climber tops out on a rounded sandstone boulder while a friend spots from below' },
      { src: '/images/routes/france-font-forest.jpg', alt: 'Fontainebleau forest approach trail through pine trees to sandstone boulders', category: 'approach', caption: 'The Fontainebleau forest — pine, heather, and sandstone boulders reachable by train from Paris in 45 minutes' },
      { src: '/images/routes/france-font-boulder.jpg', alt: 'Rounded sandstone boulders among pine trees in the Fontainebleau forest', category: 'area', caption: 'The distinctive Fontainebleau sandstone — rounded tan and orange boulders scattered through a dense pine forest south of Paris' },
      { src: '/images/routes/france-font-circuit.jpg', alt: 'Painted circuit markers on sandstone boulder at Fontainebleau', category: 'area', caption: 'Colour-coded circuits — each colour marks a difficulty level across dozens of boulders in the sector' },
    ],
    rating: 4.9,
    reviewCount: 1847,
    seasonBest: ['October', 'November', 'December', 'February', 'March'],
    logisticsNotes: 'Take the RER D from Paris Gare de Lyon to Fontainebleau-Avon (40 min, €8 return). From the station, take Bus 1 (direction Forêt) or a taxi (10 min, EUR 12) to the Apremont car park. The Bleau.info app maps all 77 sectors and 3,000+ problems. No permit required.',
    safetyNotes: 'Never climb on wet sandstone — the friction disappears completely and rock damage occurs. Check the weather 48 hours ahead. The soft forest sand provides natural padding but learn to fall safely before attempting highball problems above 4m.',
  },
  {
    slug: 'verdon-gorge-la-demande',
    name: 'Verdon Gorge — La Demande',
    region: 'Provence-Alpes-Côte d\'Azur',
    baseCity: 'Castellane',
    grade: { yosemite: '5.11d', french: '7a', difficulty: 4 },
    style: 'multi-pitch',
    pitches: 8,
    approachTime: '40 min',
    climbTime: '7-10 hours',
    totalDayTime: 'full day',
    elevationGainMeters: 400,
    description: "The Verdon Gorge is Europe's Grand Canyon — a 700m-deep limestone chasm 170 km northeast of Marseille carved by the Verdon river. La Demande is the gorge's most classic multi-pitch line: 8 pitches up a continuous limestone wall above the river, with sustained 6b+ climbing on pocketed, featured rock punctuated by ledges and a spectacular final rappel sequence back to the river. The gorge walls are some of the longest continuous limestone faces in Europe — La Demande's 400m of climbing rivals routes in Dolomites or Yosemite in scale. The approach descends to the Verdon river via the sentier de l'Imbe, a via ferrata-style descent that is itself exposed and committing.",
    cruxDescription: "La Demande's crux is Pitch 5 — a 45m traverse left on a horizontal rail at two-thirds height with no rest between the crux moves. The sequence requires three consecutive moves on two-finger pockets with sloping feet, where a fall means a pendulum swing rather than a straight catch. Pre-inspecting the pitch from above on abseil before redpointing is standard practice on Verdon big days.",
    gearRequired: [
      'Two 50m dry-treated ropes (two-rope rappel descent is mandatory)',
      '12 quickdraws + 4 alpine draws for the traverse pitch',
      'Small rack: cams 0.5"–2" and 5 nuts for anchor supplements',
      'Headlamp (mandatory — late finishes in the gorge are common)',
      'Approach shoes for the descent path',
      'Emergency bivy gear (space blanket, first aid)',
    ],
    gearMinimum: [
      'Two 50m ropes (non-negotiable — single rope will not reach rappel anchors)',
      '12 quickdraws',
      'Headlamp',
    ],
    gymPrerequisites: {
      leadGrade: '6c+ sport (outdoors)',
      outdoorDays: '20+ days including multi-pitch',
      fitnessLevel: 'Strong, multi-pitch experienced',
      skills: [
        'Comfortable leading 7a sport outdoors with consistent footwork',
        'Multi-pitch rope management: flaking, coiling, leader falls from fixed gear',
        'Two-rope rappel technique — mandatory for Verdon descents',
        'Route-finding on big limestone walls without a topo at every pitch',
        'Managing commitment on a serious day (700m walls, no easy escape)',
      ],
      gymDrills: [
        'Build endurance: circuit training 15 routes at 6b–6c continuously before the trip',
        'Practise clipping from traverse positions where swinging is the fall consequence',
        'Two-rope rappel practice at your local crag — descend a known route using this system',
      ],
      warning: 'The Verdon is a committing objective. Retreat is difficult once committed to the lower pitches. Do not attempt La Demande unless you have completed multi-pitch routes of similar length elsewhere. Accidents in the gorge require helicopter extraction.',
    },
    warnings: [
      'The approach descent to the river is exposed and takes 40 minutes — do not start it in the dark.',
      'Afternoon thunderstorms build over the gorge from June through August. Check the météo before committing. Lightning in the gorge is life-threatening.',
      'Headlamp is mandatory — most Verdon parties finish after dark.',
      'The river at the base can flood rapidly — never leave gear at the base of the descent couloir.',
    ],
    guidedAvailable: true,
    guidePrice: 'EUR 120–180 per person for a full-day guided ascent',
    guideOperator: {
      name: 'Guides du Verdon',
      url: 'https://www.kookooclimb.com',
      affiliate: false,
    },
    nearbyEats: [
      { name: 'Restaurant La Main à la Pâte', type: 'Provençal cooking in Castellane', priceRange: 'EUR 14–22pp' },
      { name: 'Bar des Alpes', type: 'Café and cold drinks post-climb', priceRange: 'EUR 5–12pp' },
    ],
    lodging: [
      { name: 'Hôtel du Commerce', type: 'hotel', priceRange: 'EUR 65–95/night', bookingUrl: 'https://www.booking.com/searchresults.html?ss=Castellane+France', affiliate: true },
      { name: 'Camping du Verdon', type: 'campsite', priceRange: 'EUR 14–22/night' },
    ],
    testimonials: [
      {
        text: "Eight pitches above the Verdon river with 700m of empty air below us. This is why we climb. La Demande is the greatest multi-pitch route I have done in Europe — longer than most Alpine routes and far better protected.",
        author: 'Stefan R.',
        date: 'September 2024',
        grade: '7a',
      },
    ],
    images: {
      hero: '/images/routes/france-verdon-wall.jpg',
      gallery: ['/images/routes/france-verdon-rappel.jpg', '/images/routes/france-verdon-gorge.jpg'],
    },
    gallery: [
      { src: '/images/routes/france-verdon-rappel.jpg', alt: 'Climber rappelling down limestone wall above turquoise river in Verdon Gorge', category: 'climbing', caption: 'The rappel descent — two 50m ropes, four rappels, and a turquoise river 400m below' },
      { src: '/images/routes/france-verdon-gorge.jpg', alt: 'Aerial view of Verdon Gorge with turquoise water and vertical limestone walls', category: 'area', caption: 'The Verdon Gorge — 700m of vertical limestone above one of the most photographed rivers in Europe' },
      { src: '/images/routes/france-verdon-canyon.jpg', alt: 'Limestone canyon walls with climbers visible as dots on the face', category: 'climbing', caption: 'La Demande\'s upper pitches — 8 ropes of sustained 6b+ climbing with expanding views on every ledge' },
    ],
    rating: 4.9,
    reviewCount: 623,
    seasonBest: ['April', 'May', 'June', 'September', 'October'],
    logisticsNotes: 'Drive from Marseille: 2h30 via A51 and D952. Drive from Nice: 2h. Car essential — no public transport reaches the gorge base. Park at Chalet de la Maline (free). The descent to the river starts from the car park via the Sentier Martel. Topo available from the Bureau des Guides in Castellane.',
    safetyNotes: 'This is a committing objective. Two ropes are non-negotiable — the rappel anchors are spaced for 50m ropes. Always carry a headlamp. Check the afternoon storm forecast before starting the approach. Tell someone your plan before descending to the river.',
  },
  {
    slug: 'ceuse-berlin',
    name: 'Céüse — Berlin',
    region: 'Hautes-Alpes',
    baseCity: 'Gap',
    grade: { yosemite: '5.13a', french: '7c', difficulty: 5 },
    style: 'sport',
    pitches: 1,
    approachTime: '1h 30 min',
    climbTime: '2-4 hours',
    totalDayTime: 'full day',
    elevationGainMeters: 600,
    description: "Céüse is the most celebrated sport climbing cliff in the world — a 2km-long band of overhanging blue-grey limestone at 2,000m in the Hautes-Alpes above Gap. The cliff faces north, stays cool all summer, and contains some of the finest sustained sport climbing in existence across grades 7a–9a+. Berlin sector concentrates the 7b–8b routes on a slightly overhanging wall of pocketed grey limestone with a distinctive blue-white colour. Routes are 25–40m on perfect rock with bomber bolt placements and chain anchors. The long approach (1h30 ascending 600m) is the price of entry — and it filters out everyone who isn't serious. The routes reward that commitment completely.",
    cruxDescription: "Berlin's 7c routes share a characteristic crux structure: powerful movement on two-finger pockets at 25m, followed by a shakeout on a sloper rail, followed by a sustained 7a+ section to the anchor. The 7c sequence typically requires 6–8 powerful moves with no rest — a fitness test as much as a technique puzzle. The rock is sharp and demands thick skin on fingertips. Come prepared to take days off for skin recovery.",
    gearRequired: [
      '70m dry-treated single rope (most routes 35–42m)',
      '14 quickdraws',
      'GriGri or assisted-braking device (mandatory for the long approach — you will not want to walk back down if your belay device falls)',
      'Helmet',
      'Approach shoes or trail runners for the steep trail',
      '3L water per person (no water on the cliff)',
    ],
    gearMinimum: [
      '60m rope',
      '12 quickdraws',
      'GriGri strongly recommended',
    ],
    gymPrerequisites: {
      leadGrade: '7b sport (outdoors)',
      outdoorDays: '30+ days on limestone',
      fitnessLevel: 'Advanced to elite',
      skills: [
        'Consistent outdoor 7b — Céüse grades are stiff and the long approach means no warm-up at the base',
        'Two-finger pocket technique on sharp limestone at 25m+',
        'Extended power endurance: sustaining moves at 85% intensity for 30+ moves',
        'Skin management: tape application, skin brushing, rest day scheduling',
      ],
      gymDrills: [
        'Power endurance: campus board 3-move sequences for 30 minutes, twice per week for 4 weeks before the trip',
        'Hangboard protocol on 18mm edges — 10 seconds on, 50 off, 8 sets, 3 sessions/week',
        'Skin hardening: climb on rough volumes or real rock daily in the weeks before departure',
      ],
      warning: 'Céüse is an elite destination. If you are not climbing 7b consistently outdoors, the long approach will feel cruel when you cannot do the routes. Come strong or come to project at your limit — this is not a tick-factory.',
    },
    warnings: [
      'The approach climbs 600m in 1h30 — do not start late. If you leave the car park after 10:00 in summer you will be returning in the heat of the day.',
      'The cliff faces north and catches wind — bring a down jacket even in July.',
      'Sharp limestone destroys fingertips. Build skin in the weeks before your trip. Bring skin repair products.',
      'The descent path in descent is loose in places — use trekking poles on the way down.',
    ],
    guidedAvailable: true,
    guidePrice: 'EUR 90–140 per person for a full-day coached session',
    guideOperator: {
      name: 'Guides du Gap / Céüse',
      url: 'https://www.explore-share.com/rock-climbing-trips/france/',
      affiliate: false,
    },
    nearbyEats: [
      { name: 'La Table de Constance', type: 'Provençal restaurant, Gap', priceRange: 'EUR 16–26pp' },
      { name: 'Boulangerie Autrand', type: 'Bakery and post-climb pastries', priceRange: 'EUR 3–8pp' },
    ],
    lodging: [
      { name: 'Hôtel Le Clos', type: 'hotel', priceRange: 'EUR 70–100/night', bookingUrl: 'https://www.booking.com/searchresults.html?ss=Gap+France', affiliate: true },
      { name: 'Gîte de Céüse', type: 'walkers\' gite', priceRange: 'EUR 25–40/night' },
    ],
    testimonials: [
      {
        text: "The long approach earns the climbing. Berlin at 7c is the most beautiful line I have ever climbed — 40m of perfect blue limestone above the Hautes-Alpes. I sent it on day 6 of 8. Worth every approach.",
        author: 'Lena W.',
        date: 'July 2024',
        grade: '7c',
      },
    ],
    images: {
      hero: '/images/routes/france-ceuse-crag.jpg',
      gallery: ['/images/routes/france-ceuse-approach.jpg', '/images/routes/france-ceuse-crux.jpg'],
    },
    gallery: [
      { src: '/images/routes/france-ceuse-approach.jpg', alt: 'Trail switchbacks through alpine meadow on approach to Céüse limestone cliff', category: 'approach', caption: 'The 1h30 approach gains 600m through alpine meadow before the blue limestone wall appears above' },
      { src: '/images/routes/france-ceuse-crux.jpg', alt: 'Sport climber on overhanging grey limestone wall at Céüse on 7c route', category: 'climbing', caption: 'Berlin sector at 7c — the sustained crux sequence at 25m on two-finger pockets in perfect rock' },
      { src: '/images/routes/france-ceuse-view.jpg', alt: 'View of Hautes-Alpes valleys from Céüse cliff base looking south', category: 'summit', caption: 'The view south from the Céüse plateau — the entire Durance Valley stretches below after the approach' },
    ],
    rating: 4.9,
    reviewCount: 891,
    seasonBest: ['June', 'July', 'August', 'September', 'May'],
    logisticsNotes: 'Drive from Gap: 20 min to the Céüse car park at 1,400m. Car required — no public transport. Park at the signed trailhead. Approach via the well-marked GR trail (maps on the car park notice board). The gîte at the top of the approach offers water and simple food on summer weekends.',
    safetyNotes: 'Do not start the approach late — the return descent in heat is punishing. The cliff stays cool but the alpine meadow approach is exposed. Bring extra water (3L minimum). Skin management is as important as strength training for a Céüse trip.',
  },
  {
    slug: 'calanques-en-vau',
    name: 'Calanques — En-Vau Multi-Pitch',
    region: 'Provence',
    baseCity: 'Marseille',
    grade: { yosemite: '5.10a', french: '6a', difficulty: 3 },
    style: 'multi-pitch',
    pitches: 4,
    approachTime: '45 min',
    climbTime: '3-5 hours',
    totalDayTime: 'full day',
    elevationGainMeters: 180,
    description: "The Calanques are a series of Mediterranean limestone sea-inlets between Marseille and Cassis — a national park of white rock, turquoise water, and garrigue scrub accessible by bus from Marseille's centre. En-Vau is the deepest and most spectacular calanque, with 180m limestone walls rising from a hidden cove reachable by boat or a 45-minute coastal hike. The climbing routes on the south face of En-Vau combine the best of Mediterranean limestone — long, sustained, pocketed grey stone with a warm sea breeze and views that make belaying hard to concentrate on. Routes run from 4 to 7b in the 4-pitch moderate range. Summer closures (June 15–September 15) protect fire-risk habitat: the best seasons are October through May.",
    cruxDescription: "En-Vau 6a routes concentrate their difficulty in Pitch 2 — a 30m exposed face above the belay ledge where the holds thin and the footwork demands precise limestone edge placement. The crux move is a long reach from a two-finger pocket to a rounded edge at chest height. The exposure of climbing above an inlet of blue Mediterranean water adds psychological weight to technical moves.",
    gearRequired: [
      '60m single rope',
      '10 quickdraws + 4 alpine draws',
      'Small rack: 5 nuts and cams 0.5"–1.5" for belay supplements',
      'Helmet (rockfall from above is a real risk)',
      'Approach shoes for the coastal path',
      'Sun protection and 2L water',
    ],
    gearMinimum: [
      '60m rope',
      '10 quickdraws',
      'Helmet',
    ],
    gymPrerequisites: {
      leadGrade: '5c sport (outdoors)',
      outdoorDays: '5+ days on limestone',
      fitnessLevel: 'Intermediate',
      skills: [
        'Comfortable leading 6a sport outdoors — the grade feels committing above the sea',
        'Multi-pitch transitions: building anchors on small limestone ledges',
        'Belaying in an exposed position with a sea breeze',
        'Navigating to and from a remote coastal location',
      ],
      gymDrills: [
        'Multi-pitch simulation: climb 4 consecutive routes at 5c–6a without resting on the ground between them',
        'Belay station practice at a sport crag: build bolted anchors and manage the rope for a second climber',
      ],
    },
    warnings: [
      'The Calanques are closed June 15–September 15 due to wildfire risk. Check the Prefecture des Bouches-du-Rhône website before planning a summer trip.',
      'The approach involves 30m of easy scrambling above the sea — ankle rolls on loose coastal limestone are common.',
      'Bees nest in the Calanques limestone — do not disturb rock formations that hum or vibrate.',
      'The sea below the routes is cold even in summer. Falling into the cove is a real outcome on some descent routes.',
    ],
    guidedAvailable: true,
    guidePrice: 'EUR 75–110 per person for a full-day guided multi-pitch',
    guideOperator: {
      name: 'Compagnie des Guides de Marseille',
      url: 'https://www.explore-share.com/rock-climbing-trips/france/calanques/',
      affiliate: false,
    },
    nearbyEats: [
      { name: 'Chez Michel', type: 'Bouillabaisse and Provençal seafood', priceRange: 'EUR 25–45pp' },
      { name: 'Bar de la Marine', type: 'Harbour café and pastis', priceRange: 'EUR 6–14pp' },
    ],
    lodging: [
      { name: 'Hôtel Hermès', type: 'hotel', priceRange: 'EUR 80–120/night', bookingUrl: 'https://www.booking.com/searchresults.html?ss=Marseille', affiliate: true },
      { name: 'Camping de la Presqu\'île', type: 'campsite near Cassis', priceRange: 'EUR 18–28/night' },
    ],
    testimonials: [
      {
        text: "Climbing above the turquoise water of En-Vau is an experience I cannot describe. The route is moderate enough to be fun rather than terrifying, and the setting is simply impossible — white limestone, blue sea, garrigue smell, no other sound.",
        author: 'Camille D.',
        date: 'November 2024',
        grade: '6a',
      },
    ],
    images: {
      hero: '/images/routes/france-calanques-cliff.jpg',
      gallery: ['/images/routes/france-calanques-sea.jpg', '/images/routes/france-calanques-route.jpg'],
    },
    gallery: [
      { src: '/images/routes/france-calanques-sea.jpg', alt: 'Turquoise Mediterranean sea visible through white limestone calanque walls', category: 'area', caption: 'En-Vau from the water — white limestone walls drop 180m to a hidden turquoise cove' },
      { src: '/images/routes/france-calanques-route.jpg', alt: 'Climber on grey limestone multi-pitch above blue sea at Calanques', category: 'climbing', caption: 'Pitch 2 above the cove — 30m of exposed 6a limestone with the Mediterranean 100m below' },
      { src: '/images/routes/france-calanques-bay.jpg', alt: 'Hidden bay at Calanques En-Vau seen from above the climbing routes', category: 'summit', caption: 'The view from the top — En-Vau\'s hidden beach is only reachable on foot or by kayak' },
    ],
    rating: 4.8,
    reviewCount: 412,
    seasonBest: ['October', 'November', 'March', 'April', 'May'],
    logisticsNotes: 'Take Bus 21 from Marseille to Luminy (university), then hike 45 min to En-Vau via the signed GR98. The car park at Luminy fills by 8am on weekends — take the bus. Alternatively, approach from Cassis via the Col de la Gardiole (1h30). The sea approach by kayak (45 min from Cassis) bypasses the hike entirely.',
    safetyNotes: 'Check the seasonal closure status before any visit — the Calanques fire ban is strictly enforced. Helmet is non-optional given loose limestone on the approach path. The coastal scramble above the sea requires caution even with dry hands.',
  },
  {
    slug: 'gorges-du-tarn-camping',
    name: 'Gorges du Tarn — Camping Sector',
    region: 'Occitanie',
    baseCity: 'Millau',
    grade: { yosemite: '5.10c', french: '6b', difficulty: 2 },
    style: 'sport',
    pitches: 1,
    approachTime: '10 min',
    climbTime: '3-5 hours',
    totalDayTime: 'half day',
    elevationGainMeters: 40,
    description: "The Gorges du Tarn cut through the limestone Causses plateau of southern France between Millau and Florac — a 60km canyon of vertical dolomitic limestone walls rising 400m above the Tarn river. The Camping sector sits directly above the river at Peyreleau, with 80 bolted sport routes on compact grey and orange limestone in the 5c–7c range. The concentration of 6a–6c routes makes it the best intermediate climbing in southern France: well-bolted, varied movement (pockets, rails, underclings), and an extraordinary river gorge setting. The Millau Viaduct — the world's tallest road bridge — is visible from the top of some routes. Camping is 5 minutes from the cliff base. Crowded weekends from May–October.",
    cruxDescription: "The classic 6b routes on the Camping sector share a technical crux at mid-height: a sequence of three-finger pockets on a slightly overhanging section transitioning to a rest on a horizontal rail. The crux requires reading the pocket sequence from below — the holds are invisible from the ground and the sequence is counter-intuitive until you have done it once. Most 6b routes are onsight-able for competent 6c climbers.",
    gearRequired: [
      '60m single rope',
      '10 quickdraws',
      'Standard belay device',
      'Helmet',
    ],
    gearMinimum: [
      '60m rope',
      '8 quickdraws',
      'Any belay device',
    ],
    gymPrerequisites: {
      leadGrade: '6a sport (outdoors)',
      outdoorDays: '5+ days on limestone',
      fitnessLevel: 'Intermediate',
      skills: [
        'Comfortable leading 6b sport outdoors with good clipping technique',
        'Reading pocket sequences from the ground on grey limestone',
        'Resting on horizontal rails between crux sections',
        'Cleaning bolted anchors safely',
      ],
      gymDrills: [
        'Three-finger pocket work on campus board rungs: 10 minutes warm-up every session',
        'Onsight practice: climb routes at your outdoor limit without prior inspection or beta',
      ],
    },
    warnings: [
      'The Tarn river floods rapidly after rain upstream — check the river level before setting up a base at the water\'s edge.',
      'The gorge road (D907) is narrow and heavily used in summer — drive slowly and be prepared for oncoming traffic on blind bends.',
      'Some routes have old mixed gear — check bolt condition before committing to unknown lines.',
    ],
    guidedAvailable: true,
    guidePrice: 'EUR 55–85 per person for a half-day sport session',
    guideOperator: {
      name: 'Bureau des Guides du Millau',
      url: 'https://www.explore-share.com/rock-climbing-trips/france/',
      affiliate: false,
    },
    nearbyEats: [
      { name: 'Restaurant du Moulin de la Caune', type: 'Aveyronnais cooking', priceRange: 'EUR 12–20pp' },
      { name: 'Bar du Camping Peyreleau', type: 'Campsite bar — pizza and salads', priceRange: 'EUR 8–14pp' },
    ],
    lodging: [
      { name: 'Hôtel La Muse', type: 'hotel', priceRange: 'EUR 70–100/night', bookingUrl: 'https://www.booking.com/searchresults.html?ss=Millau', affiliate: true },
      { name: 'Camping de Peyreleau', type: 'campsite', priceRange: 'EUR 10–16/night' },
    ],
    testimonials: [
      {
        text: "Five days camped 5 minutes from the rock. Climbed all day, swam in the Tarn after, ate well in Millau every evening. The 6b classics are genuinely excellent — sustained, interesting, and perfectly bolted. Best-value climbing trip in France.",
        author: 'Marc B.',
        date: 'June 2024',
        grade: '6b',
      },
    ],
    images: {
      hero: '/images/routes/france-tarn-gorge.jpg',
      gallery: ['/images/routes/france-tarn-wall.jpg', '/images/routes/france-tarn-river.jpg'],
    },
    gallery: [
      { src: '/images/routes/france-tarn-wall.jpg', alt: 'Climber on orange and grey dolomitic limestone wall above Tarn river gorge', category: 'climbing', caption: 'The Camping sector wall — compact limestone pockets with the Tarn river visible below' },
      { src: '/images/routes/france-tarn-river.jpg', alt: 'Tarn river flowing through limestone gorge below the climbing sector', category: 'approach', caption: 'The Tarn below — 10-minute walk from campsite to cliff base, swim in the river after climbing' },
      { src: '/images/routes/france-tarn-village.jpg', alt: 'Stone village and limestone gorge walls at Gorges du Tarn', category: 'area', caption: 'Peyreleau — the medieval village sits at the cliff base; the climbing starts above the rooftops' },
    ],
    rating: 4.7,
    reviewCount: 276,
    seasonBest: ['May', 'June', 'September', 'October', 'April'],
    logisticsNotes: 'Drive from Millau: 30 min on D991 then D907 through the gorge. The Camping sector is signed from the Peyreleau car park. Park at the village and walk 10 min to the cliff base via the river path. The Millau Viaduct is 20 min north — worth the detour on arrival or departure.',
    safetyNotes: 'Check the Tarn river level before camping at the river\'s edge — the gorge floods quickly after upstream rain. Route condition varies — inspect bolts on less-trafficked lines before committing. Helmet strongly recommended given the dolomitic limestone character of the upper cliff.',
  },
]
