import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // TAREA: se permite explícitamente la nueva página de contacto
        allow: ['/', '/contact'],
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/contact'],
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
    // TAREA: dominio principal del sitio
    host: personalInfo.siteUrl,
  };
}
