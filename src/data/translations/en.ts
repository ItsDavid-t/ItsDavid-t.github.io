import type { Translation } from './types';

export const en: Translation = {
  meta: {
    title: 'David Alvarez — Software Developer',
    description:
      'Software developer focused on Flutter and Dart. Building real software products including Echo Stock and Echo Fix.',
    ogTitle: 'David Alvarez — Software Developer',
    ogDescription:
      'Building software products with Flutter, Dart, and modern technologies. Explore the Echo product ecosystem.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    role: 'Software Developer',
    headline: 'Building software products with Flutter, Dart and modern technologies.',
    supporting:
      'I focus on creating practical applications for real businesses — from inventory management to repair shop operations — with clean architecture and maintainable code.',
    viewWork: 'View my work',
    github: 'GitHub',
  },
  about: {
    title: 'About',
    eyebrow: 'Who I am',
    paragraphs: [
      'I am a software developer focused mainly on Flutter and Dart. I care about building real software products instead of only tutorial projects — applications that solve concrete problems for small businesses and teams.',
      'My work combines mobile development with backend services, local persistence, and structured architecture patterns. I prefer clear separation of concerns, testable code, and tools that scale as a product grows.',
    ],
    focusLabel: 'Current focus',
    focus:
      'Developing the Echo collection — a set of Flutter applications designed for business operations, starting with inventory and repair shop management.',
  },
  stack: {
    title: 'Tech Stack',
    eyebrow: 'Technologies',
    groups: {
      mobile: 'Mobile',
      backend: 'Backend & Services',
      architecture: 'Architecture',
      tools: 'Tools & Patterns',
    },
  },
  projects: {
    title: 'Projects',
    eyebrow: 'Featured work',
    
    viewGithub: 'View on GitHub',
    viewDemo: 'Live demo',
    updated: 'Updated',
    moreTitle: 'More on GitHub',
    fallbackDescription: 'A software product published on my GitHub profile.',
    status: {
      active: 'Active product',
      'in-development': 'In development',
      planned: 'Planned',
    },
    items: {
      'echo-stock': {
        name: 'Echo Stock',
        description:
          'A Flutter application for small businesses to manage inventory, products, sales, and finances. Built with Supabase, BLoC/Cubit, and Clean Architecture for reliability at scale.',
      },
      'echo-fix': {
        name: 'Echo Fix',
        description:
          'A Flutter application for repair shops to manage customers, devices, repairs, budgets, parts, payments, photos, and statistics — with full repair history and inventory tracking.',
      },
    },
  },
  echo: {
    eyebrow: 'Product ecosystem',
    title: 'The Echo collection',
    description:
      'Echo Stock and Echo Fix are part of a growing collection of business-focused software products. Each app targets a specific operational need while sharing a consistent approach to architecture, UX, and long-term maintainability.',
    tagline: 'What you create leaves a mark and keeps resonating',
  },
  github: {
    title: 'Explore my GitHub',
    eyebrow: 'Open source & products',
    description:
      'My repositories reflect ongoing product development — Flutter apps, architecture experiments, and the code behind the Echo ecosystem. Take a look at how I structure projects and ship features.',
    cta: 'Visit GitHub profile',
    stats: {
      repositories: 'Public repositories',
      openSource: 'Open contributions',
      products: 'Product-focused apps',
    },
  },
  contact: {
    title: 'Have a project in mind?',
    description:
      'Whether you want to discuss a Flutter application, collaborate on a product idea, or simply connect — feel free to reach out.',
    cta: 'Get in touch',
    orConnect: 'Or connect on social media',
  },
  footer: {
    role: 'Software Developer',
    copyright: 'All rights reserved.',
  },
  theme: {
    light: 'Light mode',
    dark: 'Dark mode',
    toggle: 'Toggle color theme',
  },
  language: {
    switchTo: 'Switch language',
    en: 'English',
    es: 'Español',
  },
};
