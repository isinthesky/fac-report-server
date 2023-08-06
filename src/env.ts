const config = process.env.NODE_ENV !== "production" ? await import("dotenv") : null;

if (config) config.config();

export const SERVER_PORT = process.env.SERVER_PORT || 5000;
export const COOKIE_SECRET = process.env.COOKIE_SECRET;
