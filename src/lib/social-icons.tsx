import type { IconProps } from './icons';

const iconSize = (size?: string | number): string | number => size ?? 24;

export const LinkedInIcon = ({ size, className, title, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={iconSize(size)}
    height={iconSize(size)}
    fill="currentColor"
    className={className}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M4.98 3.5A1.74 1.74 0 1 0 5 7a1.74 1.74 0 0 0-.02-3.5ZM3.5 8h3V20h-3V8Zm5 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V20h-3v-6.01c0-1.43-.02-3.27-1.99-3.27-2 0-2.31 1.56-2.31 3.17V20h-3V8Z" />
  </svg>
);

export const XIcon = ({ size, className, title, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={iconSize(size)}
    height={iconSize(size)}
    fill="currentColor"
    className={className}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-7.44L5.53 22H2.4l7.25-8.3L1 2h6.42l4.42 6.77L18.9 2Zm-1.1 18h1.73L6.45 3.89H4.6L17.8 20Z" />
  </svg>
);

export const YouTubeIcon = ({ size, className, title, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={iconSize(size)}
    height={iconSize(size)}
    fill="currentColor"
    className={className}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M23 12s0-3.18-.4-4.71a3 3 0 0 0-2.1-2.1C18.96 4.8 12 4.8 12 4.8s-6.96 0-8.5.39a3 3 0 0 0-2.1 2.1C1 8.82 1 12 1 12s0 3.18.4 4.71a3 3 0 0 0 2.1 2.1c1.54.39 8.5.39 8.5.39s6.96 0 8.5-.39a3 3 0 0 0 2.1-2.1C23 15.18 23 12 23 12Zm-13.2 3.88V8.12L16.4 12l-6.6 3.88Z" />
  </svg>
);

export const InstagramIcon = ({ size, className, title, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={iconSize(size)}
    height={iconSize(size)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.25" cy="6.75" r="1.05" fill="currentColor" stroke="none" />
  </svg>
);
