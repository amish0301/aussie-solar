export const formatNumber = (num: number) => {
  const suffixes = ["", "k", "M", "B", "T"];
  const tier = (Math.log10(Math.abs(num)) / 3) | 0;
  if (tier === 0) return num;
  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  const formatted = scaled % 1 === 0 ? scaled.toFixed(0) : scaled.toFixed(1);
  return formatted + suffix;
};

 


// input :  const sallary =  formatNumber(6000)
// output : 6k