import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `d8-btn d8-btn--${variant} ${className}`.trim();

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
