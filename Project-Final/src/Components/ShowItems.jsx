import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cloudinary_URL, Search_API, Search_API2 } from '../Constants'


const ShowItems = () => {


  const{query} = useParams()
  const[items, setItems] = useState([])
 
  

  useEffect(() => {
    const getData = async() => {
      const data = await fetch(Search_API + query + Search_API2)
      const json = await data.json()
      setItems(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1)) 
      // console.log(json)
    }

    getData()
   console.log(items)
  }, [])


  // console.log(query)
  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => {
          const imgID = item.card.card.info.imageId;
          const { name, description, price } = item.card.card.info;

          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={imgID ? Cloudinary_URL + imgID : "https://via.placeholder.com/150"}
                alt={name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">{description}</p>
                <p className="text-green-600 font-bold">${price / 100}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowItems