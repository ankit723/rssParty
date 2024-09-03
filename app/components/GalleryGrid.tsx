"use client";

import React, { useState } from 'react';
import Modal from './Modal';

const images = [
  'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s',
  'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
  'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
  'https://media.wired.com/photos/65382632fd3d190c7a1f5c68/master/pass/Google-Image-Search-news-Gear-GettyImages-824179306.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s'
];

const GalleryGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const showPrevImage = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const showNextImage = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-x-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden cursor-pointer" 
            onClick={() => openModal(src, index)}
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="object-cover w-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="relative">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white text-2xl font-bold">
                  +
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal 
          isOpen={!!selectedImage} 
          onClose={closeModal} 
          imageSrc={selectedImage}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )}
    </div>
  );
};

export default GalleryGrid;
