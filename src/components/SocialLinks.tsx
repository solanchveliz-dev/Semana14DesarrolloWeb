import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Youtube } from './Icons';

const items = [
  { href: personalInfo.github, label: 'GitHub', Icon: Github },
  { href: personalInfo.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: personalInfo.youtube, label: 'YouTube', Icon: Youtube },
];

export default function SocialLinks({ onDark = false }: { onDark?: boolean }) {
  const colors = onDark
    ? 'border-white/30 text-white hover:bg-white/10'
    : 'border-line bg-surface text-ink hover:bg-soft';

  return (
    <ul className="flex gap-3">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`w-11 h-11 grid place-items-center rounded-full border transition ${colors}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
