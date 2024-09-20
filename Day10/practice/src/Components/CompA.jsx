import React, { useEffect, useState } from 'react'
import Cards from './Cards'

// let defImg = "data:image/jpeg;base64,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"
let defImg = "https://ik.imagekit.io/hpapi/snape.jpg"

const CompA = () => {
  const[charData, setCharData] = useState([])


  useEffect(() => {
    const getData = async() => {
      const data = await fetch("https://hp-api.onrender.com/api/characters")
      const json = await data.json()


      setCharData(json)
      console.log(json)
    }


    getData()
  }, [])

  return (
    <div style={{display : "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr 1fr"}}>
      
      {charData.map((item) => {
        return <Cards name={item.name} image={item.image ? item.image : defImg} />
      })}

    </div>
  )
}

export default CompA

