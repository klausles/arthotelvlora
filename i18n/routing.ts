import { defineRouting } from "next-intl/routing";

export const locales = ["sq", "en", "pl", "it", "fr", "de", "es", "el", "tr"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  sq: "Shqip",
  en: "English",
  pl: "Polski",
  it: "Italiano",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  el: "Ελληnikά",
  tr: "Türkçe",
};

export const localeFlags: Record<Locale, string> = {
  sq: "🇦🇱",
  en: "🇬🇧",
  pl: "🇵🇱",
  it: "🇮🇹",
  fr: "🇫🇷",
  de: "🇩🇪",
  es: "🇪🇸",
  el: "🇬🇷",
  tr: "🇹🇷",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "sq",
});
