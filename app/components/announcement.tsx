import React, { useState, useEffect } from 'react';

const Announcement = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-primary-color w-full text-center'>
      <p className={`announcement-sentence ${visibleIndex === 0 ? 'visible' : 'hidden'}`}>
        Be a volunteer and get good perks
      </p>
      <p className={`announcement-sentence ${visibleIndex === 1 ? 'visible' : 'hidden'}`}>
        Be a member and be a part of great community
      </p>
      <p className={`announcement-sentence ${visibleIndex === 2 ? 'visible' : 'hidden'}`}>
        Our goal is to provide things in the interest of public demands
      </p>
    </div>
  );
};

export default Announcement;
