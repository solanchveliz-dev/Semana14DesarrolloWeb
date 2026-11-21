import { NavLink, Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL, optimizada para rendimiento y SEO.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
    category: 'E-commerce',
    icon: 'cart',
    features: [
      'Catálogo de productos y carrito de compras',
      'Pagos seguros con Stripe',
      'SEO optimizado con meta tags dinámicos',
      'Diseño responsive y de alto rendimiento',
    ],
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación y tiempo real.',
    image:
      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/usuario/task-manager',
    featured: true,
    category: 'Web Apps',
    icon: 'check',
    features: [
      'Registro e inicio de sesión de usuarios',
      'Actualización de tareas en tiempo real',
      'Organización por estados y prioridades',
      'Interfaz rápida y accesible',
    ],
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos y pronósticos.',
    image:
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
    githubUrl: 'https://github.com/usuario/weather-app',
    featured: true,
    category: 'Dashboards',
    icon: 'cloud',
    features: [
      'Consulta del clima por ciudad',
      'Gráficos de temperatura y pronósticos',
      'Consumo de la API de OpenWeather',
      'Diseño adaptable a móviles',
    ],
  },
];

export const personalInfo = {
  name: 'Solanch Veliz',
  title: 'Full Stack Developer',
  description:
    'Desarrolladora full stack apasionada por crear experiencias web modernas, rápidas y optimizadas para SEO.',
  email: 'tu@email.com',
  github: 'https://github.com/solanchveliz-dev',
  linkedin: 'https://linkedin.com/in/tuusuario',
  // En Vercel se define NEXT_PUBLIC_SITE_URL con tu dominio real
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tuportafolio.com',
  avatar:
    'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

// Menú principal
export const navLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre mí' },
];

// Botón "Hablemos" del inicio
export const contactHref = `mailto:${personalInfo.email}`;
