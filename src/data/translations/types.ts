import type { siteConfig } from '../site';

export type Locale = 'en' | 'es';

export interface Translation {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    stack: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    role: string;
    headline: string;
    supporting: string;
    viewWork: string;
    github: string;
  };
  about: {
    title: string;
    eyebrow: string;
    paragraphs: string[];
    focusLabel: string;
    focus: string;
  };
  stack: {
    title: string;
    eyebrow: string;
    groups: Record<(typeof siteConfig.techGroups)[number]['id'], string>;
  };
  projects: {
    title: string;
    eyebrow: string;
    viewGithub: string;
    viewDemo: string;
    updated: string;
    moreTitle: string;
    fallbackDescription: string;
    status: Record<'active' | 'in-development' | 'planned', string>;
    items: Record<string, { name: string; description: string }>;
  };
  echo: {
    eyebrow: string;
    title: string;
    description: string;
    tagline: string;
  };
  github: {
    title: string;
    eyebrow: string;
    description: string;
    cta: string;
    stats: {
      repositories: string;
      openSource: string;
      products: string;
    };
  };
  contact: {
    title: string;
    description: string;
    cta: string;
    orConnect: string;
  };
  footer: {
    role: string;
    copyright: string;
  };
  theme: {
    light: string;
    dark: string;
    toggle: string;
  };
  language: {
    switchTo: string;
    en: string;
    es: string;
  };
}
