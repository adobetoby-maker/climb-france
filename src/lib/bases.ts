export interface BaseCity {
  slug: string
  name: string
  airport: string
  driveTimeToClimbs: string
  description: string
  routesAccessible: string[]
  restaurants: { name: string; specialty: string; priceRange: string; address: string; tip: string }[]
  lodging: { name: string; type: string; pricePerNight: string; bookingUrl?: string; tip: string; affiliate: boolean }[]
  gettingAround: string
  emergency: { hospital: string; phone: string; distanceKm: number }
}

export const bases: BaseCity[] = [
  {
    slug: 'paris',
    name: 'Paris',
    airport:
      'CDG (Paris Charles de Gaulle) or ORY (Paris Orly) — both served by direct intercontinental routes. CDG is closer to Fontainebleau via RER D.',
    driveTimeToClimbs: '1h30 drive or 45 min train to Fontainebleau forests',
    description:
      "The world's most visited city doubles as Font climbers' basecamp. Take the RER D from Châtelet-Les Halles to Fontainebleau-Avon station (40 min, €9 return), then a 10-minute taxi or bus to the forest car parks. The bouldering itself is spread across 77 forest sectors — you will not run out of problems in a week. Paris offers every comfort between sessions: excellent food, cheap transport, and accommodation at every budget level. Most climbers treat Paris as a 1–2 night gateway before moving closer to the forest or commuting daily from the city.",
    routesAccessible: ['fontainebleau-apremont-dalle'],
    restaurants: [
      {
        name: 'Brasserie Lipp',
        specialty: 'Classic French brasserie — choucroute garnie, steak-frites, crème brûlée, Alsatian beer',
        priceRange: '€25–45 per person',
        address: '151 Boulevard Saint-Germain, Paris 6e',
        tip: 'A genuine Parisian institution. Order the choucroute garnie and a Kronenbourg on tap. Book ahead for dinner.',
      },
      {
        name: 'Au Pied de Cochon',
        specialty: '24-hour brasserie — French onion soup, plateau de fruits de mer, steak tartare',
        priceRange: '€22–40 per person',
        address: '6 Rue Coquillière, Paris 1er',
        tip: 'Open 24 hours, seven days a week. Perfect for any arrival time after a transatlantic flight. The onion soup is the reason to come.',
      },
      {
        name: 'Café de Flore',
        specialty: 'Coffee, croque monsieur, tartines, breakfast pastries, hot chocolate',
        priceRange: '€8–18 per person',
        address: '172 Boulevard Saint-Germain, Paris 6e',
        tip: 'Yes it is touristy. Yes the coffee is worth it. Arrive before 9 AM and claim a pavement table. Pre-climb breakfast ritual.',
      },
      {
        name: 'Bouillon Chartier',
        specialty: 'Traditional French working-class cuisine — blanquette de veau, pot-au-feu, profiteroles',
        priceRange: '€12–20 per person',
        address: '7 Rue du Faubourg Montmartre, Paris 9e',
        tip: 'Best value sit-down meal in central Paris. Queue outside or arrive at 11:30 AM for lunch before the line forms. No reservations taken.',
      },
    ],
    lodging: [
      {
        name: 'Generator Paris',
        type: 'Hostel (private rooms and dorms)',
        pricePerNight: '€28–55 (dorm) / €90–130 (private)',
        bookingUrl: 'https://www.booking.com/hotel/fr/generator-paris.html?aid=CLIMBFRANCE',
        tip: 'Best hostel in Paris for solo travelers. Great common areas, easy metro access to Châtelet for the RER D to Font. Book well ahead for weekends.',
        affiliate: true,
      },
      {
        name: 'Hotel des Grands Boulevards',
        type: 'Boutique hotel',
        pricePerNight: '€160–220',
        bookingUrl: 'https://www.booking.com/hotel/fr/des-grands-boulevards.html?aid=CLIMBFRANCE',
        tip: 'Mid-range splurge in a beautiful 18th-century building. Rooftop bar is the best post-flight spot in Paris. Close to Grands Boulevards metro.',
        affiliate: true,
      },
      {
        name: 'ibis Paris Gare de Lyon',
        type: 'Budget hotel',
        pricePerNight: '€80–120',
        bookingUrl: 'https://www.booking.com/hotel/fr/ibis-paris-gare-de-lyon-diderot-12eme.html?aid=CLIMBFRANCE',
        tip: 'Reliable, clean, and 2 minutes from Gare de Lyon where you catch the RER D for Fontainebleau. Perfect transit hotel for early departures.',
        affiliate: true,
      },
      {
        name: 'Airbnb — Fontainebleau town',
        type: 'Apartment rental',
        pricePerNight: '€60–100',
        tip: 'Best value for a Font trip of 3+ days. Staying in Fontainebleau town itself cuts commute to zero and gives you local baker, boulangerie, and evening restaurant culture.',
        affiliate: false,
      },
    ],
    gettingAround:
      'Metro + RER is the correct way to move around Paris. Buy a Navigo Liberté+ card at any station. For Fontainebleau: RER D from Châtelet-Les Halles direct to Fontainebleau-Avon (40 min, runs every 30 min). From Fontainebleau-Avon station, Secteur 3 bus or taxi (€10) to the forest car parks. If driving, A6 motorway south from Paris — tolls apply.',
    emergency: {
      hospital: 'Hôpital Lariboisière',
      phone: '01 49 95 65 65',
      distanceKm: 5,
    },
  },

  {
    slug: 'moustiers-sainte-marie',
    name: 'Moustiers-Sainte-Marie',
    airport:
      'MRS (Marseille Provence) — 2h drive, or NCE (Nice Côte d\'Azur) — 2h30 drive. Car rental essential from either airport.',
    driveTimeToClimbs: '30–45 min to Verdon rim and main sectors',
    description:
      'A medieval Provençal village of 700 people perched at the gateway to the Gorges du Verdon, Moustiers is the natural basecamp for Verdon climbing. The village is spectacularly beautiful — a gold star village with a 12th-century chapel suspended on a chain between two cliff faces above the rooftops — and has exactly the restaurants, bakeries, and pharmacies that climbing teams need without the tourist resort feel of larger Provence towns. Car rental is essential; there is no public transport to the gorge. The D952 road follows the north rim of the gorge to the main sectors, and the D71 gives access from the south. Verdon multi-pitch rescue is expensive — carry World Nomads insurance.',
    routesAccessible: ['verdon-la-demande'],
    restaurants: [
      {
        name: 'La Treille Muscate',
        specialty: 'Provençal cuisine — daube de boeuf, ratatouille, tapenade, local rosé, lavender crème brûlée',
        priceRange: '€22–38 per person',
        address: 'Place de l\'Église, Moustiers-Sainte-Marie',
        tip: 'Best post-Verdon dinner in the village. The terrace faces the church. Order the daube and a pichet of local Verdon rosé.',
      },
      {
        name: 'Café de la Place',
        specialty: 'Café food — paninis, salads, omelettes, coffee, cold Pastis',
        priceRange: '€8–15 per person',
        address: 'Place du Courent, Moustiers-Sainte-Marie',
        tip: 'The climbers\' pre-crag breakfast stop. Opens at 7:30 AM. Pack your crag lunch from the épicerie next door.',
      },
      {
        name: 'Restaurant La Ferme Sainte Cécile',
        specialty: 'Farm-to-table Provençal — lamb from the plateau, honey, almonds, herbs, local cheeses',
        priceRange: '€30–50 per person',
        address: '3km from Moustiers on D952 towards Verdon',
        tip: 'The splurge dinner. Book 2 days ahead. The lamb from the plateau is worth the price. Outdoor terrace with gorge views at sunset.',
      },
      {
        name: 'Boulangerie Blachère',
        specialty: 'Fresh bread, croissants, pain au chocolat, tarts, sandwiches to go',
        priceRange: '€2–6 per person',
        address: 'Rue de la Bourgade, Moustiers-Sainte-Marie',
        tip: 'Opens at 7 AM. Buy your crag lunch here — baguette sandwiches with local charcuterie or cheese. Closes by 1 PM so go early.',
      },
    ],
    lodging: [
      {
        name: 'La Bastide de Moustiers',
        type: 'Boutique hotel (Alain Ducasse property)',
        pricePerNight: '€220–380',
        bookingUrl: 'https://www.booking.com/hotel/fr/la-bastide-de-moustiers.html?aid=CLIMBFRANCE',
        tip: 'The top-end Verdon experience. Garden, pool, exceptional food. A once-per-trip splurge for celebrating a Verdon send.',
        affiliate: true,
      },
      {
        name: 'Les Restanques de Moustiers',
        type: 'Gîte / self-catering apartments',
        pricePerNight: '€80–130',
        bookingUrl: 'https://www.booking.com/hotel/fr/les-restanques-de-moustiers.html?aid=CLIMBFRANCE',
        tip: 'Best mid-range option. Self-catering kitchen, parking for the rental car, and walking distance from the village centre. Book for 3+ nights to get weekly rate.',
        affiliate: true,
      },
      {
        name: 'Camping Saint-Jean',
        type: 'Campsite',
        pricePerNight: '€15–25 per pitch',
        tip: 'Budget climbers\' option just outside the village. Hot showers, space to sort gear, 5 min walk to the boulangerie. Most Verdon regulars on a budget camp here.',
        affiliate: false,
      },
      {
        name: 'Chambres d\'hôtes Lou Marquet',
        type: 'B&B',
        pricePerNight: '€70–95 (including breakfast)',
        tip: 'Family-run B&B in the village. Breakfast is lavender honey, fresh bread, and coffee. The owners know the climbing and can point you to conditions reports.',
        affiliate: false,
      },
    ],
    gettingAround:
      'Car is non-negotiable for Verdon access. Rent from Marseille Provence airport (MRS) — Europcar and Sixt both have counters. The D952 follows the north rim of the gorge past all main sector pullouts. Parking at the Point Sublime and Chalet de la Maline is free but fills by 9 AM in summer. Moustiers village itself is compact and walkable — leave the car at your accommodation and walk to restaurants and the bakery.',
    emergency: {
      hospital: 'Centre Hospitalier de Manosque',
      phone: '04 92 87 40 00',
      distanceKm: 45,
    },
  },

  {
    slug: 'gap',
    name: 'Gap',
    airport:
      'MRS (Marseille Provence, 2h drive) or LYS (Lyon Saint-Exupéry, 2h drive). Car rental from either. No public transport to Céüse.',
    driveTimeToClimbs: '30 min drive to Céüse trailhead, then 1h hike to the cliff',
    description:
      'An Alpine town at 750m elevation in the Hautes-Alpes département, Gap is the service hub for Céüse climbers. The town has a Decathlon (essential — buy any gear you forgot), a Super U supermarket, pharmacies, and a handful of good restaurants. It is not a destination in itself but it is functional and well-located. Most Céüse regulars stay in the village of Sigoyer (closer to the trailhead) or camp at the Céüse base, but Gap is the right base if you want comfort between Céüse sessions, and it is significantly more affordable than anything closer to the cliff. The Céüse approach from the trailhead at Sigoyer is 1 hour uphill — plan every session around that 2-hour round-trip minimum.',
    routesAccessible: ['ceuse-biographie'],
    restaurants: [
      {
        name: 'La Pastorale',
        specialty: 'Hautes-Alpes mountain cuisine — raclette, tartiflette, fondue, local charcuterie',
        priceRange: '€18–32 per person',
        address: '18 Rue Carnot, Gap',
        tip: 'Best post-Céüse dinner in Gap. The raclette is the move — order at least 250g per person after a full climbing day. Loud and fun atmosphere.',
      },
      {
        name: 'Le Bouchon Provençal',
        specialty: 'Provençal meets Alpine — rôti d\'agneau, gnocchis maison, local wine from the Hautes-Alpes',
        priceRange: '€16–28 per person',
        address: '12 Place Jean Marcellin, Gap',
        tip: 'Best value sit-down meal in Gap. The lamb is from the plateau above town. Good wine list with bottles from Sisteron.',
      },
      {
        name: 'Café de la Cathédrale',
        specialty: 'Coffee, tartines, breakfast formule, sandwiches, afternoon pastries',
        priceRange: '€5–12 per person',
        address: 'Place Saint-Arnoux, Gap',
        tip: 'The Gap climbers\' breakfast stop. Opens at 7 AM. The café crème and croissant formule is €4.50 — eat here before driving to Sigoyer.',
      },
      {
        name: 'Snack La Fontaine (Sigoyer)',
        specialty: 'Village snack bar — sandwiches, pizza, cold drinks, basic hot food',
        priceRange: '€6–12 per person',
        address: 'Sigoyer village, 20 min from Gap',
        tip: 'The only food option at the trailhead village. Limited hours — closes by 6 PM. Buy your crag lunch here to save driving back to Gap.',
      },
    ],
    lodging: [
      {
        name: 'ibis Gap',
        type: 'Budget hotel',
        pricePerNight: '€65–95',
        bookingUrl: 'https://www.booking.com/hotel/fr/ibis-gap.html?aid=CLIMBFRANCE',
        tip: 'Reliable chain hotel, free parking, good Wi-Fi, 5 min from the Decathlon. The correct choice if you want comfort and predictability.',
        affiliate: true,
      },
      {
        name: 'Gîte de Céüse (at the cliff)',
        type: 'Mountain refuge / gîte',
        pricePerNight: '€25–40 (half board available)',
        tip: 'The only accommodation at the cliff itself — eliminates the approach each day. Beds and meals managed by the local CAF (Club Alpin Français). Book months ahead for July/August.',
        affiliate: false,
      },
      {
        name: 'Camping La Rochette (Sigoyer)',
        type: 'Campsite near trailhead',
        pricePerNight: '€12–18 per pitch',
        tip: 'Budget standard for Céüse regulars. Hot showers, flat pitches, 10 min drive to the trailhead. Very busy in summer. First come, first served.',
        affiliate: false,
      },
      {
        name: 'Hôtel Le Clos',
        type: 'Mid-range hotel',
        pricePerNight: '€85–120',
        bookingUrl: 'https://www.booking.com/hotel/fr/le-clos-gap.html?aid=CLIMBFRANCE',
        tip: 'The best mid-range hotel in Gap. Garden, reasonable restaurant, secure parking. Quieter than the town-centre options.',
        affiliate: true,
      },
    ],
    gettingAround:
      'Car essential. From Gap, drive D994 north then D946 to Sigoyer — 20 min. Park at the Sigoyer trailhead car park (free). Then 1 hour hike to the cliff on a marked trail with fixed ropes on the upper section. The trail is steep and exposed in places — approach shoes required. Decathlon in Gap stocks any forgotten gear; open 9 AM–7 PM Monday to Saturday.',
    emergency: {
      hospital: 'Centre Hospitalier de Gap',
      phone: '04 92 40 61 61',
      distanceKm: 30,
    },
  },

  {
    slug: 'marseille',
    name: 'Marseille',
    airport:
      'MRS (Marseille Provence) — 25 min drive to city centre. Bus L2 runs every 15 min to Saint-Charles station (€9, 25 min).',
    driveTimeToClimbs: '20–30 min to Calanques trailheads at Luminy or Callelongue',
    description:
      "France's second city and gateway to the Calanques National Park. Marseille has rough-edged Mediterranean character — loud, beautiful, and deeply its own thing. The Calanques are a 20-km limestone coast of fjord-like inlets, sea cliffs, and multi-pitch routes rising directly from turquoise water. Metro line 21 and bus B3 reach the Luminy trailhead, making car-free Calanques access genuinely viable. The Vieux-Port quarter is the social centre for arriving climbers — pick up a pastis at a café before sorting gear. Be aware of fire closure season (July 15–September 15 most years) which can close all Calanques access on red alert days.",
    routesAccessible: ['calanques-en-vau'],
    restaurants: [
      {
        name: 'Chez Fonfon',
        specialty: 'Bouillabaisse (the real Marseillais version — minimum 2 people, €55pp), grilled fish, rouille',
        priceRange: '€40–70 per person',
        address: '140 Rue du Vallon des Auffes, Marseille',
        tip: 'The definitive Marseille bouillabaisse. Call ahead — they prepare it fresh and need to know numbers. This is the correct celebration meal after a successful Calanques multi-pitch.',
      },
      {
        name: 'Le Comptoir Dugommier',
        specialty: 'Modern Marseillais — sea bass tartare, daube, petits farcis, Côtes de Provence',
        priceRange: '€20–35 per person',
        address: '18 Boulevard Dugommier, Marseille 1er',
        tip: 'Excellent pre-crag dinner the night before a big Calanques day. Close to Saint-Charles station. Book for dinner.',
      },
      {
        name: 'Four des Navettes',
        specialty: 'Traditional Marseille navettes (orange blossom biscuits), pains, pastries, coffee',
        priceRange: '€3–8 per person',
        address: '136 Rue Sainte, Marseille 7e',
        tip: 'Oldest bakery in Marseille (1781). Buy a bag of navettes for the crag — dense and sweet, excellent climbing fuel. Open from 7 AM.',
      },
      {
        name: 'Café de l\'Abbaye',
        specialty: 'Coffee, sandwiches, salads, daily specials near the Luminy campus',
        priceRange: '€5–14 per person',
        address: 'Route de Luminy, Marseille 9e',
        tip: 'Last café before the Calanques trailhead. Refill water bottles here — there is zero water inside the national park.',
      },
    ],
    lodging: [
      {
        name: 'Hôtel C2',
        type: 'Design hotel',
        pricePerNight: '€180–280',
        bookingUrl: 'https://www.booking.com/hotel/fr/c2-marseille.html?aid=CLIMBFRANCE',
        tip: 'The splurge Marseille option. Rooftop pool with Vieux-Port views. Walking distance from restaurants and the metro. Worth it for a rest day.',
        affiliate: true,
      },
      {
        name: 'Vertigo Vieux-Port Hostel',
        type: 'Hostel',
        pricePerNight: '€28–48 (dorm) / €80–110 (private)',
        bookingUrl: 'https://www.booking.com/hotel/fr/vertigo-vieux-port.html?aid=CLIMBFRANCE',
        tip: 'Best budget option near the Vieux-Port. Helpful staff, gear storage, good common room. Take metro to Luminy for Calanques approach.',
        affiliate: true,
      },
      {
        name: 'ibis Marseille Centre Vieux-Port',
        type: 'Budget hotel',
        pricePerNight: '€85–130',
        bookingUrl: 'https://www.booking.com/hotel/fr/ibishotelmarseille.html?aid=CLIMBFRANCE',
        tip: 'Reliable and centrally located. Parking available in the nearby Les Phocéens car park. Good metro access for the Luminy trailhead.',
        affiliate: true,
      },
      {
        name: 'Camping des Calanques',
        type: 'Campsite (Cassis, 25 min from Marseille)',
        pricePerNight: '€18–30 per pitch',
        tip: 'The climbers\' campsite for Calanques access. Located in Cassis at the eastern end of the park. Own car required. Much cooler than Marseille city in summer.',
        affiliate: false,
      },
    ],
    gettingAround:
      'Metro line 2 to Rond-Point du Prado, then bus B3 to Luminy for the main Calanques trailhead (total 35–40 min from Vieux-Port, no car needed). By car, D559 south from Marseille centre to the Luminy or Callelongue car parks (free but fill by 8 AM in summer). Vieux-Port area is walkable. Tram T2 connects the port to key southern neighbourhoods.',
    emergency: {
      hospital: 'Hôpital de la Timone',
      phone: '04 91 38 60 00',
      distanceKm: 10,
    },
  },

  {
    slug: 'millau',
    name: 'Millau',
    airport:
      'MRS (Marseille, 2h30 drive) or MXN (Brive-la-Gaillarde, 2h drive). Car rental from either. Millau is also served by TGV connection via Montpellier (2h by train + 40 min car).',
    driveTimeToClimbs: '20–30 min to Liaucous and main Tarn sectors',
    description:
      "Small town at the confluence of the Tarn and Dourbie rivers, directly under the world's tallest road bridge — the Millau Viaduct at 343m. Millau is a perfect family climbing basecamp: multiple sectors within 30 minutes, excellent river swimming at every campsite, Roquefort cheese caves 20km away at Saint-Affrique, and the Gorges du Tarn offering everything from Font 4 to 7c. The town has a Decathlon, well-stocked supermarkets, a Friday market, and a genuinely pleasant medieval centre. The Tarn and Dourbie gorges offer limestone sport climbing and some of the best trad ground in France. Come in May–June or September–October for the best conditions.",
    routesAccessible: ['tarn-liaucous-family'],
    restaurants: [
      {
        name: 'La Braconne',
        specialty: 'Aveyron cuisine — aligot (mashed potato with tome fraîche), tripe, lamb, Roquefort tarts',
        priceRange: '€16–28 per person',
        address: '7 Place du Maréchal Foch, Millau',
        tip: 'Order the aligot — it is the regional dish and unlike anything you have eaten. Pulled at the table with a wooden spoon into long, elastic strings of potato. Non-negotiable.',
      },
      {
        name: 'Café Bras (Millau)',
        specialty: 'Modern French café — crêpes, salads, coffee, fresh-pressed juices, small plates',
        priceRange: '€8–18 per person',
        address: 'Boulevard de la Capelle, Millau',
        tip: 'Best breakfast and lunch option in the town centre. The terrace faces the Viaduct. Pre-crag stop for coffee and a tartine.',
      },
      {
        name: 'Auberge de Liaucous',
        specialty: 'Rural Aveyron cooking — confit de canard, cassoulet, tarte aux noix, local red wine',
        priceRange: '€18–30 per person',
        address: 'Liaucous village, 25 min from Millau',
        tip: 'In the climbing village itself. Walk from the crag for lunch or dinner. Simple, generous portions. The tarte aux noix with local Roquefort is the dessert to order.',
      },
      {
        name: 'Cave Coopérative de Roquefort',
        specialty: 'Roquefort tastings and sales — the real article, 20km from Millau',
        priceRange: '€5–20 per person',
        address: 'Avenue François Galtier, Roquefort-sur-Soulzon',
        tip: 'Visit on a rest day. Free cave tour, €5 tasting plate, buy direct at the source. The aged Roquefort is dramatically better than supermarket versions.',
      },
    ],
    lodging: [
      {
        name: 'Hôtel Cévenol',
        type: 'Mid-range hotel',
        pricePerNight: '€75–110',
        bookingUrl: 'https://www.booking.com/hotel/fr/cevenol-millau.html?aid=CLIMBFRANCE',
        tip: 'Best-located hotel in Millau with Viaduct views. Secure parking, comfortable rooms. Good base for families who want town comforts between climbing days.',
        affiliate: true,
      },
      {
        name: 'Camping Les Rivages',
        type: 'Campsite on the Tarn river',
        pricePerNight: '€16–28 per pitch',
        bookingUrl: 'https://www.booking.com/hotel/fr/camping-les-rivages-millau.html?aid=CLIMBFRANCE',
        tip: 'The climbers\' campsite. River swimming 50m from your tent, bar, hot showers, good Wi-Fi. The communal area fills with climbers in May and September. Best budget option.',
        affiliate: true,
      },
      {
        name: 'Gîte de Liaucous',
        type: 'Self-catering gîte in the climbing village',
        pricePerNight: '€60–90 for the whole gîte (sleeps 4–6)',
        tip: 'Walking distance from the Liaucous sector. Perfect for a group of 4 splitting costs. Kitchen, terrace, gear storage. Book via Gîtes de France.',
        affiliate: false,
      },
      {
        name: 'ibis Budget Millau',
        type: 'Budget hotel',
        pricePerNight: '€55–80',
        bookingUrl: 'https://www.booking.com/hotel/fr/ibis-budget-millau.html?aid=CLIMBFRANCE',
        tip: 'The no-frills reliable option. Clean, parking included, 5 min from town centre. Practical if arriving late after a long drive.',
        affiliate: true,
      },
    ],
    gettingAround:
      'Car recommended but not strictly required — Liaucous (main Tarn sector) is 25 min drive. Millau town is compact and walkable. The Friday market on Boulevard de la Capelle is the place to buy local cheese, cured meats, and bread for crag lunches. For the Dourbie sectors, a car is necessary. River swimming spots are signposted from the D992 along the Tarn.',
    emergency: {
      hospital: 'Centre Hospitalier de Millau',
      phone: '05 65 59 31 00',
      distanceKm: 5,
    },
  },
]
