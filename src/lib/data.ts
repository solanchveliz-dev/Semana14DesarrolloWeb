import { NavLink, Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'Plataforma de comercio electrónico completa, optimizada para rendimiento y SEO, con pasarela de pagos y gestión de productos.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
    category: 'E-commerce',
    icon: 'cart',
    features: [
      'Catálogo de productos',
      'Carrito de compras',
      'Pagos seguros con Stripe',
      'SEO y rendimiento optimizado',
    ],
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Gestión de tareas con autenticación y tiempo real.',
    image:
      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Node.js'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/usuario/task-manager',
    featured: true,
    category: 'Web Apps',
    icon: 'check',
    features: [
      'Registro e inicio de sesión',
      'Actualización en tiempo real',
      'Estados y prioridades de tareas',
      'Interfaz rápida y accesible',
    ],
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos y pronósticos.',
    image:
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Chart.js', 'API'],
    githubUrl: 'https://github.com/usuario/weather-app',
    featured: true,
    category: 'Dashboards',
    icon: 'cloud',
    features: [
      'Consulta del clima por ciudad',
      'Gráficos de temperatura',
      'Pronóstico de varios días',
      'Diseño adaptable a móviles',
    ],
  },
];

/*
 * URL del sitio (para metadataBase, sitemap.xml y robots.txt):
 * 1. NEXT_PUBLIC_SITE_URL  -> la defines tú en Vercel con tu dominio personalizado
 * 2. VERCEL_PROJECT_PRODUCTION_URL -> Vercel la pone sola (tu dominio de producción)
 * 3. http://localhost:3000 -> cuando trabajas en tu PC
 */
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const personalInfo = {
  name: 'Naomi Veliz',
  title: 'Desarrolladora Full Stack',
  description:
    'Creo soluciones web modernas, escalables y optimizadas, con enfoque en rendimiento, experiencia de usuario y SEO.',
  email: 'naomi.veliz@tecsup.edu.pe',
  location: 'Lima, Perú',
  github: 'https://github.com/solanchveliz-dev',
  linkedin: 'https://linkedin.com/in/tuusuario',
  youtube: 'https://youtube.com/@tuusuario',
  siteUrl: rawSiteUrl.replace(/\/+$/, ''),
  // Imágenes en la carpeta public/
  avatar: '/naomi-perfil.png', // foto circular de "Sobre mí"
  heroImage: '/naomi.png', // foto con fondo transparente del inicio
  heroBg: '/hero-bg.jpg', // fondo del inicio
  cv: '/cv.pdf', // reemplázalo por tu CV real (mismo nombre)
};

// Menú principal
export const navLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/contact', label: 'Contacto' }, // TAREA: nueva página
];

// Habilidades con nivel (página Sobre mí)
export const skills = [
  { name: 'Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'React', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'PostgreSQL', level: 80 },
];

export const contactHref = '/contact';
