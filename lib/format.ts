// Formatted by hand so server and browser render identical thousands separators.
export const eur = (value: number) => `€ ${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
