export const WonConversion = num => {
  if (num >= 1000000000000) return `${String(Math.ceil((num / 1000000000000) * 10) / 10)}조`;
  if (num >= 100000000) return `${String(Math.ceil((num / 100000000) * 10) / 10)}억`;
  else if (num >= 10000000) return `${String(Math.ceil((num / 10000000) * 10) / 10)}천만`;
  else return `${String(Math.ceil((num / 10000000) * 100) / 10)}백만`;
};
