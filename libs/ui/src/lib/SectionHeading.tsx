import { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`d8-section-heading d8-section-heading--${align}`}>
      {eyebrow && <p className="d8-section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="d8-section-heading__title">{title}</h2>
      {description && <p className="d8-section-heading__description">{description}</p>}
    </div>
  );
}
