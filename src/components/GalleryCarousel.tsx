 "use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export type GalleryImage = { src: string; alt: string };

type GalleryCarouselProps = {
  images: GalleryImage[];
  compact?: boolean;
};

export function GalleryCarousel({ images, compact = false }: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    queueMicrotask(() => onSelect());
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  if (images.length === 0) return null;

  return (
    <div className={`flex flex-col gap-4 ${compact ? "gap-3" : ""}`}>
      <div className="relative">
        <div
          className="overflow-hidden rounded-lg"
          ref={emblaRef}
          aria-roledescription="carousel"
        >
          <div className="flex touch-pan-y gap-4">
            {images.map(({ src, alt }) => (
              <div
                key={src}
                className="relative min-w-0 flex-[0_0_100%]"
                role="group"
                aria-roledescription="slide"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-default-200">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes={compact ? "380px" : "(max-width: 1024px) 100vw, 80vw"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between ${compact ? "left-1 right-1" : ""}`}>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="flex items-center justify-center rounded-full bg-black/40 p-1 text-white backdrop-blur-sm hover:bg-black/60 disabled:opacity-30"
          >
            <svg
              className={compact ? "h-4 w-4" : "h-6 w-6"}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="flex items-center justify-center rounded-full bg-black/40 p-1 text-white backdrop-blur-sm hover:bg-black/60 disabled:opacity-30"
          >
            <svg
              className={compact ? "h-4 w-4" : "h-6 w-6"}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`flex justify-center gap-2 ${compact ? "gap-1.5" : ""}`}
        role="tablist"
        aria-label="Navegación por fotos"
      >
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-label={`Ir a foto ${index + 1}`}
            aria-selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            className={`rounded-full transition-all ${
              compact ? "h-1.5 w-1.5" : "h-2 w-2"
            } ${
              index === selectedIndex
                ? compact ? "w-4 bg-primary" : "w-6 bg-primary"
                : "bg-default-300 hover:bg-default-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
