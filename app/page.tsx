"use client";

import React, { useState, useEffect } from 'react';
import GalleryGrid from './components/GalleryGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Announcement from './components/Announcement';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${hasScrolled ? '-translate-y-full' : 'translate-y-0'} announcement-debug`}>
        <Announcement />
      </div>

      <div className={`absolute inset-0 bg-primary-color transition-transform duration-[1s] ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`} />

      <div className="">
        <div className={`fixed top-[1.15rem] left-0 w-screen z-10 transition-transform duration-300`}>
          <Navbar />
        </div>
        <div className={`relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 mt-16`}>
        
          <div className="container mx-auto p-4">
            <div className="flex justify-center">
              <h1 className="text-[60px] text-center my-[30px] font-semibold gallery text-primary-color ">Gallery</h1>
            </div>
            <GalleryGrid />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
