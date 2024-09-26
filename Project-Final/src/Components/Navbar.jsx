import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-20 border-b-2 bg-orange-400 flex justify-between items-center px-8 shadow-md'>
      {/* Logo Section */}
      <div className='flex items-center gap-4'>
        <img
          className='w-16 h-16 rounded-full border-2 border-white shadow-lg'
          src='https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg'
          alt='Logo'
        />
        <h1 className='text-white text-2xl font-semibold'>BrandName</h1>
      </div>

      {/* Navigation Links */}
      <div className='flex gap-8 text-lg'>
        <Link
          to='/example1'
          className='text-white hover:text-orange-200 transition duration-300'
        >
          Home
        </Link>
        <Link
          to='/example2'
          className='text-white hover:text-orange-200 transition duration-300'
        >
          About
        </Link>
        <Link
          to='/example3'
          className='text-white hover:text-orange-200 transition duration-300'
        >
          Services
        </Link>
        <Link
          to='/example4'
          className='text-white hover:text-orange-200 transition duration-300'
        >
          Contact
        </Link>
        <Link
          to='/example5'
          className='text-white hover:text-orange-200 transition duration-300'
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
