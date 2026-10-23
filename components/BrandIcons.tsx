// Lucide ships no brand marks, so Facebook and Viber are drawn here.

type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63a20.9 20.9 0 0 0-2.27-.12c-2.25 0-3.79 1.37-3.79 3.9v2.16H7.92v2.94h2.54V21h3.04Z" />
    </svg>
  );
}

export function ViberIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.75c-4.9 0-8.25 2.2-8.25 7.6 0 3.06 1.04 5.05 2.9 6.2v3.7l3.03-2.62c.74.1 1.5.15 2.32.15 4.9 0 8.25-2.2 8.25-7.43S16.9 2.75 12 2.75Z" />
      <path d="M9.2 7.4c.3-.3.8-.3 1.05.05l.75 1.05c.2.3.17.7-.08.95l-.4.4c.35.95 1.15 1.8 2.1 2.2l.43-.4c.26-.24.66-.27.95-.06l1.05.76c.35.25.37.76.05 1.05-.65.6-1.55.8-2.38.5-1.8-.66-3.2-2.08-3.86-3.9-.3-.84-.1-1.75.5-2.4Z" />
      <path d="M13.1 6.6a3.4 3.4 0 0 1 2.9 2.95M13.1 4.9a5.1 5.1 0 0 1 4.6 4.65" />
    </svg>
  );
}
