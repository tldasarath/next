"use client";
import Image from "next/image";

const images = [
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery2.png",
  "/images/gallery/Gallery3.png",
  "/images/gallery/Gallery4.png",
  "/images/gallery/Gallery5.png",
  "/images/gallery/Gallery3.png",
  "/images/gallery/Gallery1.png",
  "/images/gallery/Gallery2.png",
  "/images/gallery/Gallery5.png",
];

export default function Gallery() {
  const ratios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[16/9]", "aspect-square"];

  return (
    <section className="py-16 container-custom pt-32 md:pt-24 lg:pt-36">
      <div className="w-full mx-auto ">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Our Gallery
        </h2>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 md:columns-4 gap-6">
          {images.map((src, index) => {
            const ratio = ratios[index % ratios.length];
            return (
              <div
                key={index}
                className={`mb-6 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 ${ratio}`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${index}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
