// react + redux and tailwind for styling

import Shimmer from "./Shimmer"
import React, { useState } from 'react';
import { Cloudinary_URL, Search_API, Search_API2 } from '../Constants';
import{useDispatch, useSelector}from "react-redux"
import { addItem, removeItem } from '../Utils/CartSlice';
import { addSearchResults } from "../Utils/SearchSlice";

const Search = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
    const dispatch = useDispatch()
    const searchSliceData = useSelector(store => store.search)

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Search Bar */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md mb-6">
        <div className="flex space-x-2">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={query}
            placeholder="Search for dishes..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
            onClick={() => {
              if (!query.length) return;

              let hasItemInSlice = searchSliceData.find((item) => {
                return item.query == query
              })

              if(hasItemInSlice)
              {
                setItems(hasItemInSlice.results)
                return
              }


              console.log(searchSliceData)

              const getData = async () => {
                setShowLoader(true); // Show loader when fetching data
                const data = await fetch(Search_API + query + Search_API2);
                const json = await data.json();
                setItems(json.data.cards[1].groupedCard.cardGroupMap.DISH?.cards.slice(1));
                dispatch(addSearchResults({query : query, results : json.data.cards[1].groupedCard.cardGroupMap.DISH?.cards.slice(1) }))
       
              };

              setItems([]);
              getData();


            }}
          >
            🔍
          </button>
        </div>
      </div>

      {/* Items Section */}
      <div className="w-full max-w-6xl flex justify-center items-center">
        {showLoader && !items.length ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {items &&
              items.map((item, index) => {
                const { name, price, imageId } = item.card.card.info;

                return (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between"
                  >
                    <img
                      src={Cloudinary_URL + imageId}
                      alt={name}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-lg font-semibold mb-2">{name}</h2>
                    <p className="text-gray-500 mb-4">Price: ${price / 100}</p>
                    <div className="flex justify-between items-center space-x-4">
                      <button onClick={() => {
                        dispatch(addItem({...item.card.card.info, quantity : 1}))
                      }} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                        +
                      </button>
                      <button onClick={() => {
                        dispatch(removeItem(item.card.card.info))
                      }} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
