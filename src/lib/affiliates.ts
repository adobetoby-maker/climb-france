export const AFFILIATES = {
  amazon: {
    tag: 'climbfrance-20',
    searchUrl: (query: string) =>
      `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=climbfrance-20`,
  },
  booking: {
    hotelUrl: (city: string) =>
      `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&aid=CLIMBFRANCE`,
    url: 'https://www.booking.com?aid=CLIMBFRANCE',
  },
  getYourGuide: {
    tourUrl: (query: string) =>
      `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}&partner_id=CLIMBFRANCE`,
    url: 'https://www.getyourguide.com?partner_id=CLIMBFRANCE',
  },
  worldNomads: {
    url: 'https://www.worldnomads.com/travel-insurance?affiliate=CLIMBFRANCE',
  },
  languageThreshold: {
    module: 'https://language-lens-elite.worker-bee.app',
  },
}
