import React from 'react';
import { Cloudinary_URL } from '../Constants';
import { Link } from 'react-router-dom';

const MainRes = ({ name, img, location, resId }) => {
  return (
    <Link to={`/menu/${resId}`}>
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1">
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={Cloudinary_URL + img}
        alt={name}
        />
      
      {/* Content */}
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
        </Link>
  );
};

export default MainRes;
