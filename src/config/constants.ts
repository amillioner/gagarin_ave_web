// Centralized configuration and constants
export const APP_CONFIG = {
  name: "Gagarin Avenue",
  version: "1.0.0",
  description: "Premium luxury apartments in Samarkand with world-class amenities",
  developer: "Elite Properties",
  location: "Gagarin Avenue, Samarkand, Uzbekistan",
} as const;

export const CONTACT_INFO = {
  phones: [
    { number: "+998662300171", display: "+(998) 66 230-01-71" },
    { number: "+998955005555", display: "+(998) 95 500-55-55" },
  ],
  emails: ["info@gagarinavenue.com"],
  address: "Gagarin Avenue, Samarkand, Uzbekistan",
} as const;

export const PRICING_DATA = {
  apartments: [
    {
      type: "1 Bedroom",
      area: "81.00 м²",
      price: "UZS 995.3 M",
      usdPrice: "USD 77.8K",
    },
    {
      type: "2 Bedroom", 
      area: "86.00 м²",
      price: "UZS 1.06 B",
      usdPrice: "USD 82.6K",
    },
    {
      type: "3 Bedroom",
      area: "91.5 м²", 
      price: "UZS 1.12 B",
      usdPrice: "USD 87.8K",
    },
  ],
  inclusiveNote: "All prices are inclusive of registration and other charges",
  features: [
    "Ready to Move",
    "Premium Finishes", 
    "World-class Amenities",
  ],
} as const;

export const CONNECTIVITY_DATA = [
  { name: "Samarkand State University", time: "5 Mins" },
  { name: "Central Bazaar Market", time: "8 Mins" },
  { name: "Registan Square", time: "12 Mins" },
  { name: "Samarkand Park", time: "7 Mins" },
  { name: "City Shopping Center", time: "10 Mins" },
  { name: "Traditional Restaurants District", time: "6 Mins" },
] as const;

export const LANGUAGES = [
  { code: "en", name: "ENG", fullName: "English" },
  { code: "uz", name: "UZB", fullName: "O'zbek" },
  { code: "ru", name: "RUS", fullName: "Русский" },
] as const;

export const DEFAULT_LANGUAGE = "uz";

export const NAVIGATION_ITEMS = [
  { key: "home", href: "#home" },
  { key: "price", href: "#price" },
  { key: "sitePlan", href: "#siteplan" },
  { key: "amenities", href: "#amenities" },
  { key: "gallery", href: "#gallery" },
  { key: "location", href: "#location" },
  { key: "brochure", href: "#brochure" },
] as const;

export const SLIDER_CONFIG = {
  autoPlayInterval: 5000,
  touchSensitivity: 50,
  transitionDuration: 1000,
} as const;

export const LIGHTBOX_CONFIG = {
  zIndex: 50,
  backgroundOpacity: 0.9,
  animationDuration: 300,
} as const;

export const FORM_CONFIG = {
  validation: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      required: true,
      pattern: /^\+?[1-9]\d{1,14}$/,
    },
  },
} as const;

export const SEO_CONFIG = {
  title: "Gagarin Avenue Residences | Luxury Apartments in Samarkand",
  description: "Gagarin Avenue Residences - Premium luxury apartments in Samarkand with world-class amenities, modern design, and flexible payment plans. Experience luxury living at its finest.",
  keywords: ["luxury apartments", "Samarkand", "Gagarin Avenue", "premium living", "Uzbekistan real estate"],
  ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
  twitterHandle: "@gagarinavenue",
} as const;
