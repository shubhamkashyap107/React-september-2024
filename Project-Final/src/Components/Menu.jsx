import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Menu_API } from '../Constants'
import SubMenu from './SubMenu'

const Menu = () => {




  const{resId} = useParams()
  const[menuData, setMenuData] = useState([])

  useEffect(() => {
    const getData = async() => {
      const data = await fetch(Menu_API + resId)
      const json = await data.json()
      // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2,-2))
      setMenuData(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2,-2))
    }


    getData()
  }, [])

  return (
    <div>
      {menuData && menuData.map((item) => {

        return <SubMenu obj={item} />
      })}
    </div>
  )
}

export default Menu