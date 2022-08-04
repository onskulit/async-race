export function updateMaxPage<T>(array: T[], pageLimit = 7) {
  return Math.ceil(array.length / pageLimit);
}

export function updateArrayForPage<T>(array: T[], currentPage: number, pageLimit = 7) {
  const start = (currentPage - 1) * pageLimit;
  return array.slice(start, start + pageLimit);
}
