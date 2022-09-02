import { CalendarResponse, Client } from '@interfaces'
import { getIsoDates, parseTimeFromIso } from './helpers'

let client: Client

export const getToken = () => client.requestAccessToken()

export const initializeClient = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      client = google.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: process.env.REACT_APP_GOOGLE_SCOPE,
        prompt: '',
        callback: (tokenResponse: { access_token: string }) => {
          resolve(tokenResponse.access_token)
        },
      })
    } catch (error) {
      reject(error)
    }
  })
}

export const getCalendarTodos = async (token: string) => {
  const [start, end] = getIsoDates()
  try {
    const response = await fetch(
      `${process.env.REACT_APP_GOOGLE_EVENTS}?timeMin=${start}&timeMax=${end}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if (response.status !== 200) {
      throw Error()
    }

    const { items }: CalendarResponse = await response.json()
    return items
      .map(({ start: { dateTime }, summary }) => ({
        time: parseTimeFromIso(dateTime),
        summary,
      }))
      .sort((a, b) => +a.time.slice(0, 2) - +b.time.slice(0, 2))
  } catch {
    return new Error(
      'Something wrong with calendar service. Please try reloading the page',
    )
  }
}
