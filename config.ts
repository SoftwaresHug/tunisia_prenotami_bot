// Auto-generated configuration for Prenotami Italy Tunisia AutoBot

export const config = {
  botName: "Prenotami Italy Tunisia",
  country: "Tunisia",
  provider: "Prenotami",
  destination: "Italy",
  loginUrl: "https://prenotami.esteri.it",
  centers: [
  "Tunis",
  "Bizerte",
  "Sfax",
  "Tozeur"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Family Visit",
  "Student",
  "Declaration of Value"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
