import { en } from './en';
import { es } from './es';
import type { Locale, Translation } from './types';

export const translations: Record<Locale, Translation> = { en, es };

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}

export type { Locale, Translation } from './types';
