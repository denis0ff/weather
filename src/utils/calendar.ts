import { CalendarResponse, Client } from '@interfaces'
import { Endpoints, Tokens } from '@constants'
// eslint-disable-next-line import/no-cycle
import { AppDispatch } from '@store'
import { setToken } from '@store/actions'

let client: Client

export const getToken = () => client.requestAccessToken()

export const initClient = (dispatch: AppDispatch) => {
  try {
    client = google.accounts.oauth2.initTokenClient({
      client_id: Tokens.GOOGLE_CLIENT_ID,
      scope: Endpoints.GOOGLE_SCOPE,
      prompt: '',
      callback: (tokenResponse: { access_token: string }) => {
        const token = tokenResponse.access_token
        dispatch(setToken(token))
      },
    })
  } catch (error) {
    console.log('error init', error)
  }
}

const getIsoDates = () => {
  const date = new Date()
  const start = date.toISOString()
  date.setHours(24)
  const end = date.toISOString()
  return [start, end]
}

const parseTimeFromIso = (iso: string) => {
  const date = new Date(iso)
  return date.toLocaleTimeString().slice(0, -3)
}

export const getCalendarTodos = async (token: string) => {
  const [start, end] = getIsoDates()
  const response = await fetch(
    `${Endpoints.GOOGLE_EVENTS}?timeMin=${start}&timeMax=${end}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  const { items }: CalendarResponse = await response.json()

  return items.map(({ start: { dateTime }, summary }) => ({
    time: parseTimeFromIso(dateTime),
    summary,
  }))
}
