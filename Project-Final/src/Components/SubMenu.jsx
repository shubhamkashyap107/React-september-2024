
import React, { useState } from 'react';
import { Cloudinary_URL } from '../Constants';
import {useDispatch} from "react-redux"
import { addItem, removeItem } from '../Utils/CartSlice';



const SubMenu = ({ obj }) => {
  const { title, itemCards } = obj.card.card;
  const [showItems, setShowItems] = useState(false);
  const dispatch = useDispatch()
  

  return (
    <div
      className="p-6 bg-red-100 w-6/12 mt-2 mx-auto"
     
    >
      <div className="flex justify-between items-center"  onClick={() => setShowItems(!showItems)}>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {showItems ? <span>⬆️</span> : <span>⬇️</span>}
      </div>
      <div className="space-y-4">
        {showItems &&
          itemCards.map((item, index) => {
            const { name, price, imageId, description } = item.card.info;

            return (
              <div
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
                key={index}
              >
                <img
                  className="w-24 h-24 object-cover rounded-md mr-4"
                  src={Cloudinary_URL + imageId}
                  alt={name}
                />
                <div className="flex-grow">
                  <h1 className="text-xl font-semibold">{name}</h1>
                  <p className="text-gray-500">{description}</p>
                  <p className="text-lg font-medium text-green-600 mt-2">
                    ${price / 100}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Remove button */}
                  <button onClick={() => {
                    dispatch(removeItem(item.card.info))
                  }} className="bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center">
                    -
                  </button>

                  {/* Add button */}
                  <button onClick={() => {
                    // console.log(item.card.info)
                    dispatch(addItem({...item.card.info, quantity : 1}))
                  }} className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center">
                    +
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubMenu;
