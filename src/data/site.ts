export type ProjectStatus = 'active' | 'in-development' | 'planned';

export interface ProjectDefinition {
  id: string;
  githubRepo: string;
  status: ProjectStatus;
  technologies: string[];
  demo?: string | null;
  featured: boolean;
  image: string;
}

export interface Project extends ProjectDefinition {
  github: string;
  demo: string | null;
  githubDescription: string | null;
  githubUpdatedAt: string | null;
  syncedFromGitHub: boolean;
  autoDiscovered?: boolean;
}

export interface TechGroup {
  id: string;
  technologies: string[];
}

export const siteConfig = {
  name: 'David Alvarez',
  role: 'Software Developer',
  githubUsername: 'ItsDavid-t',
  siteUrl: 'https://itsdavid-t.github.io',

  brand: {
    mark: '🐢',
  },

  avatar: {
    /** Replace with your photo: place avatar.jpg or avatar.png in /public/ */
    src: '/avatar.svg',
    alt: 'David Alvarez',
  },

  social: {
    github: 'https://github.com/ItsDavid-t',
    linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
    email: 'mailto:YOUR_EMAIL@example.com',
  },

  /**
   * GitHub sync — at build time the site fetches your public repos and merges
   * them with this list. New Echo repos are picked up automatically when they
   * match repoNamePrefixes or repoTopics (see githubSync below).
   */
  projects: [
    {
      id: 'echo-stock',
      githubRepo: 'echo-stock',
      status: 'active',
      technologies: [
        'Flutter',
        'Dart',
        'Supabase',
        'BLoC/Cubit',
        'Clean Architecture',
        'SQLite',
      ],
      demo: null,
      featured: true,
      image: '/projects/echo-stock.svg',
    },
    {
      id: 'echo-repair',
      githubRepo: 'echo-repair',
      status: 'in-development',
      technologies: [
        'Flutter',
        'Dart',
        'Supabase',
        'BLoC/Cubit',
        'Clean Architecture',
        'SQLite',
      ],
      demo: null,
      featured: true,
      image: '/projects/echo-repair.svg',
    },
  ] satisfies ProjectDefinition[],

  githubSync: {
    autoDiscover: true,
    /** Repos starting with these prefixes appear on the portfolio automatically */
    repoNamePrefixes: ['echo-'],
    /** Or add the topic "echo-product" on GitHub to include any repo name */
    repoTopics: ['echo', 'echo-product'],
    /** Repos excluded from auto-discovery */
    excludeRepos: ['ItsDavid-t.github.io'],
    defaultImage: '/projects/echo-default.svg',
  },

  techGroups: [
    { id: 'mobile', technologies: ['Flutter', 'Dart'] },
    { id: 'backend', technologies: ['Supabase', 'Firebase'] },
    { id: 'architecture', technologies: ['Clean Architecture', 'SOLID'] },
    {
      id: 'tools',
      technologies: ['Git', 'GitHub', 'SQLite', 'REST APIs', 'Riverpod', 'BLoC/Cubit'],
    },
  ] satisfies TechGroup[],
} as const;
