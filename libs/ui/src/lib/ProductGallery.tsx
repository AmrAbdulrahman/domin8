'use client';

import { useState } from 'react';

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="d8-gallery">
        <div className="d8-gallery__main d8-gallery__main--empty">
          <span>{name}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d8-gallery">
      <div className="d8-gallery__main">
        <img src={images[active]} alt={name} className="d8-gallery__main-image" />
      </div>

      {images.length > 1 && (
        <div className="d8-gallery__thumbs">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              className={`d8-gallery__thumb ${index === active ? 'd8-gallery__thumb--active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1} of ${name}`}
              aria-pressed={index === active}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
