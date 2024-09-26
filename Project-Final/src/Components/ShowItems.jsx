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
    <div>
      {items && items.map((item) => {
        let imgID = item.card.card.info.imageId

        return (
          <>
          <img src={imgID ? (Cloudinary_URL + imgID ) : ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgwkKfp5A1hoAmCExCLccT26TfmPGF1M9lw&s")} />
          <h1>{item.card.card.info.name}</h1>
          </>
      )
      })}
    </div>
  )
}

export default ShowItems