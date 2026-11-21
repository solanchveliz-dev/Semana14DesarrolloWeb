export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  // Campos extra para el diseño
  category?: 'Web Apps' | 'E-commerce' | 'Dashboards';
  icon?: 'cart' | 'check' | 'cloud';
  features?: string[];
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}

export interface NavLink {
  href: string;
  label: string;
}
