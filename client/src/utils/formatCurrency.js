import { DEFAULT_CURRENCY } from "./constants.js";

export default function formatCurrency(amount, currency = DEFAULT_CURRENCY) {
  return new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0);
}
