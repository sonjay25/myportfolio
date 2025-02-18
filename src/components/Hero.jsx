import React from 'react';
import itachi from '../assets/itachi-shillouette-in-front-of-the-red-moon.jpg';

function Hero() {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${itachi})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Welcome to the World of Anime
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover the captivating stories, characters, and adventures that anime has to offer.
        </p>
        <button className="px-6 py-3 bg-pink-600 text-white font-semibold text-lg rounded-full hover:bg-pink-700 transition duration-300 ease-in-out">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
