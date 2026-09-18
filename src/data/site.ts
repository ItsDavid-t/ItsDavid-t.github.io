export type ProjectStatus = 'active' | 'in-development' | 'planned';

export interface Project {
  id: string;
  status: ProjectStatus;
  technologies: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  image: string;
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

  social: {
    github: 'https://github.com/ItsDavid-t',
    linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
    email: 'mailto:YOUR_EMAIL@example.com',
  },

  projects: [
    {
      id: 'echo-stock',
      status: 'active',
      technologies: [
        'Flutter',
        'Dart',
        'Supabase',
        'BLoC/Cubit',
        'Clean Architecture',
        'SQLite',
      ],
      github: 'https://github.com/ItsDavid-t',
      demo: null,
      featured: true,
      image: '/projects/echo-stock.svg',
    },
    {
      id: 'echo-repair',
      status: 'in-development',
      technologies: [
        'Flutter',
        'Dart',
        'Supabase',
        'BLoC/Cubit',
        'Clean Architecture',
        'SQLite',
      ],
      github: 'https://github.com/ItsDavid-t',
      demo: null,
      featured: true,
      image: '/projects/echo-repair.svg',
    },
  ] satisfies Project[],

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
