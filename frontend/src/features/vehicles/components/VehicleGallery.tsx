import React, { useState } from 'react';
import { LazyImage } from '@/components/common/LazyImage';

interface VehicleGalleryProps {
  images: string[];
  title: string;
}

export const VehicleGallery: React.FC<VehicleGalleryProps> = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images[0] || '');

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Featured Big Image with Blurred Lazy Loading */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 h-80 sm:h-[450px]">
        <LazyImage
          src={activeImage}
          alt={title}
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative rounded-xl overflow-hidden h-20 border-2 transition-all cursor-pointer ${
                activeImage === img
                  ? 'border-amber-500 scale-95 shadow-md shadow-amber-500/20'
                  : 'border-slate-800 opacity-70 hover:opacity-100'
              }`}
            >
              <LazyImage
                src={img}
                alt={`${title} view ${idx + 1}`}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
