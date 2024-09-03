"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOrgHovering, setIsOrgHovering] = useState(false);
  const [isJoinHovering, setIsJoinHovering] = useState(false);

  return (
    <nav className="z-50 w-screen">
      <div className=" z-50 w-screen px-5 py-4 flex justify-between items-center shadow-lg bg-white">
        <div className="text-black font-bold w-44">
          Rashtriya Swabhiman Sangh Party
        </div>
        
        <ul className="flex h-full justify-center items-center text-black gap-5 font-bold">
          <li className="relative">
            <a href="#" className="nav-link">HOME</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsOrgHovering(true)}
            onMouseLeave={() => setIsOrgHovering(false)}
          >
            <a href="#" className="nav-link">ORGANIZATION</a>
            {isOrgHovering && (
              <div className="fixed left-1/2 transform -translate-x-1/2 top-28 h-[18rem] w-screen max-w-screen bg-white shadow-lg rounded-lg p-5 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm justify-center">
             
                <div>
                  <h3 className=" font-extrabold mb-4">ABOUT US</h3>
                  <ul className="space-y-2 font-normal">
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">OUR LEADERSHIP</a></li>
                    <li><a href="#">OUR MISSION</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-extrabold mb-4">OUR WINGS</h3>
                  <ul className="space-y-2 font-normal">
                    <li><a href="#">KISAN</a></li>
                    <li><a href="#">MAHILA</a></li>
                    <li><a href="#">YUVA</a></li>
                    <li><a href="#">S.C</a></li>
                    <li><a href="#">S.T</a></li>
                    <li><a href="#">OBC</a></li>
                    <li><a href="#">MINORITY</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-extrabold mb-4">MEDIA</h3>
                  <ul className="space-y-2 font-normal">
                    <li><a href="#">MEDIA GALLERY</a></li>
                    <li><a href="#">PRESS RELEASE</a></li>
                    <li><a href="#">NEWS ARTICLES</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-extrabold mb-4">SOCIAL WALL</h3>
                  <ul className="space-y-2 font-normal">
                    <li><a href="#">INSTAGRAM</a></li>
                    <li><a href="#">FACEBOOK</a></li>
                    <li><a href="#">TWITTER</a></li>
                    <li><a href="#">YOUTUBE</a></li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="relative">
            <a href="#" className="nav-link">ELECTION</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsJoinHovering(true)}
            onMouseLeave={() => setIsJoinHovering(false)}
          >
            <a href="#" className="nav-link">JOIN THE MOMENT</a>
            {isJoinHovering && (
              <div className="fixed left-1/2 transform -translate-x-1/2 top-28 h-[18rem] w-screen max-w-screen bg-white shadow-lg rounded-lg p-5 gap-8 text-sm flex justify-center">
                <ul className="space-y-2">
                  <li className='text-lg font-extrabold'><a href="#">JOIN THE MOMENT</a></li>
                  <li><a className="font-normal" href="#">BECOME A MEMBER</a></li>
                  <li><a className="font-normal" href="#">BECOME A VOLUNTEER</a></li>
                </ul>
              </div>
            )}
          </li>

          <li className="relative">
            <a href="#" className="nav-link">CONTACT US</a>
          </li>
          <li className="relative">
            <a href="#" className="nav-link">DONATE</a>
          </li>
        </ul>
        
        <div>
          <button className="text-black px-4 py-2 rounded">
            Login
          </button>
          <select className="text-black px-2 py-1 text-xs rounded ml-2 bg-primary-color-10">
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
