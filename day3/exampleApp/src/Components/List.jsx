import React from 'react'

const List = ({item1, item2, item3, item4, item5}) => {
  return (
    <ol>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
        <li>{item4}</li>
        <li>{item5}</li>
    </ol>
  )
}

export default List