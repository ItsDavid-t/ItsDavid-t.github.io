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
    /** Put your photo here: place avatar.png in /public/ and replace the file manually */
    src: '/avatar.png',
    alt: 'David Alvarez',
  },

  social: {
    github: 'https://github.com/ItsDavid-t',
    linkedin: 'https://linkedin.com/in/ItsDavid-t',
    email: 'mailto:jobDavid2899@gmail.com',
  },

 
  projects: [
    {
      id: 'echo-stock',
      githubRepo: 'catalogo_nova_admin',
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
      image: '/projects/echo_stock.png',
    },
    {
      id: 'echo-fix',
      githubRepo: 'echo-fix',
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
      image: '/projects/echo_fix.png',
    },{
        id: 'echo-stock-web',
      githubRepo: 'web-echo-stock',
      status: 'active',
      technologies: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'Clean Architecture',
        'SQLite',
      ],
      demo: null,
      featured: true,
      image: '/projects/echo_web.png',
    }
  ] satisfies ProjectDefinition[],

  githubSync: {
    autoDiscover: true,
   
    repoNamePrefixes: ['echo-'],
   
    repoTopics: ['echo', 'echo-product'],
   
    excludeRepos: ['ItsDavid-t.github.io'],
    defaultImage: '/projects/echo-stock.png',
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
