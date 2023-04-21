export const formatDate = (d: unknown) => {
  // if (!date) return "";
  const date = d as Date;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDecimals = (amount: number | string): number => {
  const value = Number(amount);
  if (!isFinite(value) || value <= 0) return 0;

  return Math.round(value * 10 ** 5) / 10 ** 5;
};
