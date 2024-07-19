export function extractYearFromTitle(title: string): number {
  if (!title) {
    return new Date().getFullYear()
  }
  const year = title.match(/\d{4}/)
  return year ? Number.parseInt(year[0]) : 0
}
