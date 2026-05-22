export interface ItineraryDay {
  day: number
  morning: string
  afternoon: string
  evening: string
}

export interface Itinerary {
  slug: string
  title: string
  name: string
  duration: string
  description: string
  heroImage: string
  baseCity: string
  totalClimbing: string
  difficulty: string
  costEstimate: string
  bestFor: string
  dayByDay: ItineraryDay[]
  gearList: string[]
  logisticsNotes: string
  routeSlugs: string[]
}

export const itineraries: Itinerary[] = [
  {
    slug: 'fontainebleau-weekend',
    title: 'Fontainebleau Weekend',
    name: 'Fontainebleau Weekend',
    duration: '2-days',
    description: 'Two days of sandstone bouldering in the world\'s most famous forest, accessible by train from Paris.',
    heroImage: '/images/routes/france-font-boulder.jpg',
    baseCity: 'Paris / Fontainebleau',
    totalClimbing: '2 days bouldering',
    difficulty: 'Font 4–6c',
    costEstimate: '€150–250',
    bestFor: 'Boulderers of all levels; climbers making a Paris stopover',
    dayByDay: [
      {
        day: 1,
        morning: 'Take the RER D from Paris Gare de Lyon to Fontainebleau-Avon (40 min). Bus or taxi to Apremont.',
        afternoon: 'Warm up on the Dalle circuit (blue), then push into orange and red problems.',
        evening: 'Dinner at a Fontainebleau brasserie; sleep in town or Milly-la-Forêt.',
      },
      {
        day: 2,
        morning: 'Return to Apremont or explore Cuvier Rempart — Font\'s most iconic sector.',
        afternoon: 'Final problems, then pack out and catch the return train to Paris.',
        evening: 'Back in Paris by 19:00.',
      },
    ],
    gearList: [
      'Bouldering pad (rentable at local shops)',
      'Climbing shoes',
      'Brush for holds',
      'Approach shoes',
      'Rain layer (forest can be damp)',
    ],
    logisticsNotes: 'No car needed — the RER D runs every 30 min. Fontainebleau town has gear shops, cafes, and accommodation. Camping at Forêt de Fontainebleau is permitted in designated areas.',
    routeSlugs: ['fontainebleau-apremont-dalle'],
  },
  {
    slug: 'verdon-week',
    title: 'Verdon Multi-Pitch Week',
    name: 'Verdon Multi-Pitch Week',
    duration: '7-days',
    description: 'A full week in the Verdon Gorge, progressing from single-pitch warm-ups to La Demande and beyond.',
    heroImage: '/images/routes/france-verdon-wall.jpg',
    baseCity: 'Castellane',
    totalClimbing: '5 climbing days',
    difficulty: '5c–7a',
    costEstimate: '€600–900',
    bestFor: 'Multi-pitch teams ready for 400m routes in a committing limestone gorge',
    dayByDay: [
      {
        day: 1,
        morning: 'Drive or bus from Nice or Marseille to Castellane. Gear check and rest.',
        afternoon: 'Orientation hike above the gorge. Scout approach to L\'Escalès cliff.',
        evening: 'Dinner and beta exchange with other climbers at La Main à la Pâte.',
      },
      {
        day: 2,
        morning: 'Warm up at the single-pitch crags near Point Sublime.',
        afternoon: 'Continue building familiarity with the Verdon limestone texture.',
        evening: 'Plan La Demande attempt for Day 4.',
      },
      {
        day: 3,
        morning: 'Rest day — explore the village of Moustiers-Sainte-Marie.',
        afternoon: 'Gear check, rack review, rope prep for big day.',
        evening: 'Early sleep.',
      },
      {
        day: 4,
        morning: 'Alpine start at 06:00 for La Demande. 8 pitches, 400m, 7a crux.',
        afternoon: 'Top-out around 16:00. Long rappel descent via fixed anchors.',
        evening: 'Celebratory dinner.',
      },
      {
        day: 5,
        morning: 'Active recovery — swimming in the Lac de Sainte-Croix.',
        afternoon: 'Shorter route on the east rim.',
        evening: 'Pack for departure.',
      },
      {
        day: 6,
        morning: 'Final route — L\'Ula or similar 5c warm-down.',
        afternoon: 'Drive to Marseille or Aix for onward travel.',
        evening: 'Depart.',
      },
      {
        day: 7,
        morning: 'Travel day.',
        afternoon: 'Travel day.',
        evening: 'Home.',
      },
    ],
    gearList: [
      '60m dry-treated rope (70m preferred)',
      '12 quickdraws',
      'Full trad rack (cams C0.4–C3, nuts)',
      'Rappel device with auto-block backup',
      'Helmet',
      'Headlamp for early starts',
      'Sticky rubber approach shoes',
    ],
    logisticsNotes: 'Castellane is the main base. Rent a car from Nice or Marseille — public transport to the gorge is minimal. Camping at Camping du Verdon; or chambres d\'hôtes in Castellane.',
    routeSlugs: ['verdon-gorge-la-demande'],
  },
  {
    slug: 'france-grand-tour',
    title: 'France Grand Tour',
    name: 'France Grand Tour',
    duration: '14-days',
    description: 'The complete circuit: Font bouldering, Verdon multi-pitch, Céüse sport, and Calanques in two weeks.',
    heroImage: '/images/routes/france-ceuse-crag.jpg',
    baseCity: 'Paris → Castellane → Gap → Marseille',
    totalClimbing: '10 climbing days',
    difficulty: 'Font 5–7a / 6a–7c sport',
    costEstimate: '€1,400–2,000',
    bestFor: 'Intermediate-to-advanced climbers who want to experience all major French disciplines in one trip',
    dayByDay: [
      { day: 1, morning: 'Fly into Paris CDG.', afternoon: 'Train to Fontainebleau.', evening: 'Rest.' },
      { day: 2, morning: 'Font bouldering — Apremont.', afternoon: 'Font bouldering — Cuvier.', evening: 'Paris.' },
      { day: 3, morning: 'Train to Castellane via Marseille.', afternoon: 'Arrive Verdon.', evening: 'Gear check.' },
      { day: 4, morning: 'Verdon single-pitch warm-up.', afternoon: 'Scout La Demande.', evening: 'Plan big day.' },
      { day: 5, morning: 'La Demande — alpine start.', afternoon: 'Top-out and rappel.', evening: 'Celebrate.' },
      { day: 6, morning: 'Rest day — Lac de Sainte-Croix.', afternoon: 'Drive toward Gap.', evening: 'Gap.' },
      { day: 7, morning: 'Drive to Céüse. Approach hike (1.5h).', afternoon: 'Berlin warm-ups.', evening: 'Gap.' },
      { day: 8, morning: 'Céüse — project day.', afternoon: 'Redpoint attempts.', evening: 'Gap.' },
      { day: 9, morning: 'Drive to Marseille.', afternoon: 'Calanques approach — En-Vau.', evening: 'Marseille.' },
      { day: 10, morning: 'Calanques multi-pitch.', afternoon: 'Sea cliff exploration.', evening: 'Marseille.' },
      { day: 11, morning: 'Gorges du Tarn — drive north.', afternoon: 'Sport climbing on the gorge walls.', evening: 'Millau.' },
      { day: 12, morning: 'More Tarn climbing.', afternoon: 'Begin drive north.', evening: 'Lyon.' },
      { day: 13, morning: 'Travel day to Paris.', afternoon: 'Rest and gear sort.', evening: 'Paris.' },
      { day: 14, morning: 'Fly home.', afternoon: 'Fly home.', evening: 'Home.' },
    ],
    gearList: [
      '60m dry rope',
      'Bouldering pad (rent in Font)',
      '14 quickdraws',
      'Full trad rack for Verdon',
      'Helmet',
      'Approach shoes',
      'Harness',
      'ATC and Grigri',
    ],
    logisticsNotes: 'Rent a car from Paris or Marseille for maximum flexibility. Font is car-free (RER D). Total driving: ~1,500km across 2 weeks. Book Verdon and Calanques accommodation early — both fill in summer.',
    routeSlugs: ['fontainebleau-apremont-dalle', 'verdon-gorge-la-demande', 'ceuse-berlin', 'calanques-en-vau', 'gorges-du-tarn-camping'],
  },
]
