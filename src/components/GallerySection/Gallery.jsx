"use client";
import Image from "next/image";

// const images = [
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 1" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 2" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 3" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 4" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 5" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 6" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 7" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 8" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 9" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 10" },
//   { src: "/images/gallery/Gallery1.png", alt: "Gallery Image 11" },
// ];
const images = [
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery1.png",
];



export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Gallery
        </h2>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Gallery ${index}`}
                width={600}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

