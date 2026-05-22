import { headers } from 'next/headers'

export async function getCountryCode(): Promise<string> {
  const h = await headers()
  // Cloudflare stamps CF-IPCountry on every request — free, no API needed
  return (h.get('cf-ipcountry') ?? h.get('x-vercel-ip-country') ?? 'US').toUpperCase()
}
