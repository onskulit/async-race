export function updateMaxPage(amount: number, pageLimit = 7) {
  console.log(Math.ceil(amount / pageLimit));
  return Math.ceil(amount / pageLimit);
}

export function calc() {
  return 1;
}
