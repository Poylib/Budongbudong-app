export const WonConversion = num => {
  if (num >= 1000000000000) return `${String(Math.ceil((num / 1000000000000) * 10) / 10)}조원`;
  else if (num >= 100000000) return `${String(Math.ceil((num / 100000000) * 10) / 10)}억원`;
  else if (num >= 10000000) return `${String(Math.ceil((num / 10000000) * 10) / 10)}천만원`;
  else if (num >= 1000000) return `${String(Math.ceil((num / 10000000) * 100) / 10)}백만원`;
  else return '0원';
};

export const pushDetail = (nav, text) => {
  nav.push('Stack', { screen: 'Detail', params: { text } });
};
