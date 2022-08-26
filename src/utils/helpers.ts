export const getEndDateStormglass = (forwardDays: number) => {
  const today = new Date()
  const nextDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + forwardDays,
  )
  return nextDate
}

export const parseURL = (url: string, folder: string, format: string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `url(${process.env.PUBLIC_URL}/${folder}/${url.slice(0, -1)}.${format})`
