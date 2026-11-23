export const APP_NAME = "Karigar";

export const USER_ROLES = {
  USER: "user",
  ARTISAN: "artisan",
  MUSEUM: "museum",
  COLLECTOR: "collector",
  ADMIN: "admin",
};

export const ORDER_STATUSES = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

export const PAYMENT_METHODS = [
  { value: "cod", label: "Cash on Delivery" },
  { value: "gateway", label: "Card / Wallet / Mobile Banking" },
];

// Change this single constant if the project should use another currency.
export const DEFAULT_CURRENCY = "NPR";
