import type { SVGProps } from 'react';

type IconProps = { className?: string };

function Svg({ className, children, ...rest }: IconProps & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className ?? 'w-5 h-5'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}><path d="M7 17 17 7M8 7h9v9" /></Svg>
);
export const ChevronRight = (p: IconProps) => (
  <Svg {...p}><path d="m9 6 6 6-6 6" /></Svg>
);
export const Moon = (p: IconProps) => (
  <Svg {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></Svg>
);
export const Sun = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
);
export const Search = (p: IconProps) => (
  <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Svg>
);
export const Bolt = (p: IconProps) => (
  <Svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></Svg>
);
export const Phone = (p: IconProps) => (
  <Svg {...p}><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></Svg>
);
export const Chat = (p: IconProps) => (
  <Svg {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></Svg>
);
export const Cart = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
    <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />
  </Svg>
);
export const CheckCircle = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></Svg>
);
export const Cloud = (p: IconProps) => (
  <Svg {...p}><path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 18z" /></Svg>
);
export const Check = (p: IconProps) => (
  <Svg {...p}><path d="m5 12 5 5 9-10" /></Svg>
);
export const Github = (p: IconProps) => (
  <Svg {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.2.3-2.4 0-3.5 0 0-1 0-3 1.5-2.6-.5-5.4-.5-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1-.9 1.7-.2.6-.2 1.2-.1 1.8v4" />
    <path d="M9 18c-4.5 2-5-2-7-2" />
  </Svg>
);
export const Briefcase = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></Svg>
);
export const Folder = (p: IconProps) => (
  <Svg {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></Svg>
);
export const Target = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></Svg>
);
export const Mail = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
);
export const MapPin = (p: IconProps) => (
  <Svg {...p}><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></Svg>
);
export const Send = (p: IconProps) => (
  <Svg {...p}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></Svg>
);
export const Atom = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.6}>
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </Svg>
);

export function ProjectIcon({ name, className }: { name: 'cart' | 'check' | 'cloud'; className?: string }) {
  if (name === 'cart') return <Cart className={className} />;
  if (name === 'check') return <CheckCircle className={className} />;
  return <Cloud className={className} />;
}
