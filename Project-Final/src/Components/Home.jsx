import React, { useEffect, useState } from 'react'
import { Swiggy_API } from '../Constants'
import MainRes from './MainRes'
import IconCarousel from './Carousel'


const Home = () => {


    const[resData, setResData] = useState([])
    const[recommendations, setRecommendations] = useState([])
    const[mainRestaurant, setMainRestaurants] = useState([])

    


    useEffect(() => {

        const getData = async() => {
            const data = await fetch(Swiggy_API)
            const json = await data.json()

            setResData(json)
            // console.log(json)

            setRecommendations(json.data.cards[0].card.card.imageGridCards.info)
            // console.log(json.data.cards[0].card.card.imageGridCards.info)


            setMainRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }

        getData()

    }, [])


  return (

    <div>


{
  recommendations && (
    <div className="my-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        What's on your mind?
      </h1>
      <IconCarousel data={recommendations} />
    </div>
  )
}


{
  mainRestaurant && (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Restaurants Near You
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mainRestaurant.map((item) => {
          // console.log(item)
          return (
            <MainRes
    
              resId={item.info.id}
              key={item.info.id} 
              name={item.info.name}
              img={item.info.cloudinaryImageId}
              location={item.info.areaName}
            />
          );
        })}
      </div>
    </div>
  )
}
    </div>
  )
}

export default Home


