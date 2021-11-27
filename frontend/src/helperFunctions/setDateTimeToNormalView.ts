export const setDateTimeToNormalView = (date: string) => {
  return new Date(date).toUTCString()
}