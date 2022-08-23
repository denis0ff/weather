// eslint-disable-next-line import/prefer-default-export
export const getEndDateStormglass = (forwardDays: number) => {
  const today = new Date()
  const nextDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + forwardDays,
  )
  return nextDate
}
