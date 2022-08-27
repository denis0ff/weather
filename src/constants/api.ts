export enum Tokens {
  OPENWEATHER = 'ad92da7f16e16b2606c4873052bbb52e',
  STORMGLASS = 'd12fa65e-1e2e-11ed-abd9-0242ac130002-d12fa6c2-1e2e-11ed-abd9-0242ac130002',
  GEOAPIFY = 'ef8f173cedd54d99aeee7b6ada028ac5',
  GOOGLE_CLIENT_ID = '224646954107-g3fboktsvduf7fgdeio754eqo3kiqljj.apps.googleusercontent.com',
}

export enum Endpoints {
  OPENWEATHER = 'https://api.openweathermap.org/data/2.5/onecall',
  STORMGLASS = 'https://api.stormglass.io/v2/weather/point',
  GEOAPIFY = 'https://api.geoapify.com/v1/geocode/search',
  IPWHOIS = 'https://ipwho.is/?fields=country,city,latitude,longitude&lang=en',
  GOOGLE_EVENTS = 'https://www.googleapis.com/calendar/v3/calendars/primary/events',
  GOOGLE_SCOPE = 'https://www.googleapis.com/auth/calendar.readonly',
  GOOGLE_CLIENT_API = 'https://accounts.google.com/gsi/client',
}

export const weatherApis = ['openweather', 'stormglass']

export const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
