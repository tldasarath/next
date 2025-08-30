
"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Dummy images data with different categories
  const images = [
    { id: 1, src: "/images/gallery/Gallery1.png", category: "nature", title: "Mountain Landscape" },
    { id: 2, src: "https://picsum.photos/seed/architecture1/600/400", category: "architecture", title: "Modern Building" },
    { id: 3, src: "https://picsum.photos/seed/tech1/600/400", category: "tech", title: "Electronic Devices" },
    { id: 4, src: "https://picsum.photos/seed/nature2/600/400", category: "nature", title: "Forest Path" },
    { id: 5, src: "https://picsum.photos/seed/architecture2/600/400", category: "architecture", title: "Bridge Architecture" },
    { id: 6, src: "https://picsum.photos/seed/tech2/600/400", category: "tech", title: "Computer Setup" },
    { id: 7, src: "https://picsum.photos/seed/nature3/600/400", category: "nature", title: "Ocean View" },
    { id: 8, src: "https://picsum.photos/seed/architecture3/600/400", category: "architecture", title: "Skyscraper" },
    { id: 9, src: "https://picsum.photos/seed/tech3/600/400", category: "tech", title: "Smartphone" },
    { id: 10, src: "https://picsum.photos/seed/nature4/600/400", category: "nature", title: "Sunset" },
    { id: 11, src: "https://picsum.photos/seed/architecture4/600/400", category: "architecture", title: "Historical Building" },
    { id: 12, src: "https://picsum.photos/seed/tech4/600/400", category: "tech", title: "VR Headset" },
  ];

  const filters = ['all', 'nature', 'architecture', 'tech'];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setCurrentImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen  ">
  

 

      <main className="container mx-auto px-4 py-40">
       

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                  <span className="text-sm capitalize">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            &times;
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white text-2xl p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all"
          >
            &#8249;
          </button>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white text-2xl p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all"
          >
            &#8250;
          </button>
          
          <div className="max-w-4xl w-full">
            <img 
              src={currentImage.src.replace('/600/400', '/1000/800')} 
              alt={currentImage.title}
              className="w-full h-auto max-h-screen object-contain"
            />
            <div className="text-white mt-4 text-center">
              <h2 className="text-xl font-semibold">{currentImage.title}</h2>
              <p className="text-gray-300 capitalize">{currentImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Image Gallery. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}