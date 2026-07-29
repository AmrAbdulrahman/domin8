import { ReactNode } from 'react';

export function Badge({
  children,
  tone = 'accent',
}: {
  children: ReactNode;
  tone?: 'accent' | 'muted' | 'concept';
}) {
  return <span className={`d8-badge d8-badge--${tone}`}>{children}</span>;
}
