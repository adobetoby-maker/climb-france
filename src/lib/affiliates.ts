// NOTE: Replace the placeholder affiliate IDs below with real IDs once accounts are registered.
// Booking.com affiliate program: https://www.booking.com/affiliate-program.html
// GetYourGuide partner program: https://partners.getyourguide.com
export const AFFILIATES = {
  amazon: {
    tag: 'climbing00bb-20',
    searchUrl: (query: string) =>
      `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=climbing00bb-20`,
  },
  booking: {
    hotelUrl: (city: string) =>
      `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`,
    url: 'https://www.booking.com',
  },
  getYourGuide: {
    tourUrl: (query: string) =>
      `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}`,
    url: 'https://www.getyourguide.com',
  },
  worldNomads: {
    url: 'https://www.worldnomads.com/travel-insurance',
  },
  languageThreshold: {
    module: 'https://language-lens-elite.worker-bee.app',
  },
}
