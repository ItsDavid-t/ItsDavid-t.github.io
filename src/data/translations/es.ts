import type { Translation } from './types';

export const es: Translation = {
  meta: {
    title: 'David Alvarez — Desarrollador de Software',
    description:
      'Desarrollador de software enfocado en Flutter y Dart. Construyendo productos de software reales, incluyendo Echo Stock y Echo Fix.',
    ogTitle: 'David Alvarez — Desarrollador de Software',
    ogDescription:
      'Construyendo productos de software con Flutter, Dart y tecnologías modernas. Explora el ecosistema de productos Echo.',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    stack: 'Stack',
    contact: 'Contacto',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },
  hero: {
    role: 'Desarrollador de Software',
    headline:
      'Construyendo productos de software con Flutter, Dart y tecnologías modernas.',
    supporting:
      'Me enfoco en crear aplicaciones prácticas para negocios reales — desde gestión de inventario hasta operaciones de talleres de reparación — con arquitectura limpia y código mantenible.',
    viewWork: 'Ver mi trabajo',
    github: 'GitHub',
  },
  about: {
    title: 'Sobre mí',
    eyebrow: 'Quién soy',
    paragraphs: [
      'Soy un desarrollador de software enfocado principalmente en Flutter y Dart. Me interesa construir productos de software reales en lugar de solo proyectos de tutorial — aplicaciones que resuelven problemas concretos para pequeños negocios y equipos.',
      'Mi trabajo combina desarrollo móvil con servicios backend, persistencia local y patrones de arquitectura estructurada. Prefiero una clara separación de responsabilidades, código testeable y herramientas que escalen conforme crece un producto.',
    ],
    focusLabel: 'Enfoque actual',
    focus:
      'Desarrollar la colección Echo — un conjunto de aplicaciones Flutter diseñadas para operaciones de negocio, comenzando con inventario y gestión de talleres de reparación.',
  },
  stack: {
    title: 'Stack Tecnológico',
    eyebrow: 'Tecnologías',
    groups: {
      mobile: 'Móvil',
      backend: 'Backend y Servicios',
      architecture: 'Arquitectura',
      tools: 'Herramientas y Patrones',
    },
  },
  projects: {
    title: 'Proyectos',
    eyebrow: 'Trabajo destacado',
    syncNote: 'Los proyectos se sincronizan desde GitHub en cada deploy. Publica un repo echo-* o añade el topic echo-product para incluirlo aquí automáticamente.',
    viewGithub: 'Ver en GitHub',
    viewDemo: 'Demo en vivo',
    updated: 'Actualizado',
    moreTitle: 'Más en GitHub',
    fallbackDescription: 'Un producto de software publicado en mi perfil de GitHub.',
    status: {
      active: 'Producto activo',
      'in-development': 'En desarrollo',
      planned: 'Planificado',
    },
    items: {
      'echo-stock': {
        name: 'Echo Stock',
        description:
          'Una aplicación Flutter para que pequeños negocios gestionen inventario, productos, ventas y finanzas. Construida con Supabase, BLoC/Cubit y Clean Architecture para confiabilidad a escala.',
      },
      'echo-fix': {
        name: 'Echo Fix',
        description:
          'Una aplicación Flutter para talleres de reparación que gestiona clientes, dispositivos, reparaciones, presupuestos, repuestos, pagos, fotos y estadísticas — con historial completo de reparaciones y control de inventario.',
      },
    },
  },
  echo: {
    eyebrow: 'Ecosistema de productos',
    title: 'La colección Echo',
    description:
      'Echo Stock y Echo Fix forman parte de una colección creciente de productos de software orientados a negocios. Cada app aborda una necesidad operativa específica mientras comparte un enfoque consistente en arquitectura, UX y mantenibilidad a largo plazo.',
    tagline: 'Lo que creas deja huella y sigue resonando',
  },
  github: {
    title: 'Explora mi GitHub',
    eyebrow: 'Código abierto y productos',
    description:
      'Mis repositorios reflejan el desarrollo continuo de productos — apps Flutter, experimentos de arquitectura y el código detrás del ecosistema Echo. Echa un vistazo a cómo estructuro proyectos y entrego funcionalidades.',
    cta: 'Visitar perfil de GitHub',
    stats: {
      repositories: 'Repositorios públicos',
      openSource: 'Contribuciones abiertas',
      products: 'Apps orientadas a producto',
    },
  },
  contact: {
    title: '¿Tienes un proyecto en mente?',
    description:
      'Ya sea que quieras discutir una aplicación Flutter, colaborar en una idea de producto o simplemente conectar — no dudes en escribirme.',
    cta: 'Contactar',
    orConnect: 'O conecta en redes sociales',
  },
  footer: {
    role: 'Desarrollador de Software',
    copyright: 'Todos los derechos reservados.',
  },
  theme: {
    light: 'Modo claro',
    dark: 'Modo oscuro',
    toggle: 'Cambiar tema de color',
  },
  language: {
    switchTo: 'Cambiar idioma',
    en: 'English',
    es: 'Español',
  },
};
