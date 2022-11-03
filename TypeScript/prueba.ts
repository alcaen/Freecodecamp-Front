export function isLeap(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    ? true
    : false;
}

console.log(isLeap(2000));
