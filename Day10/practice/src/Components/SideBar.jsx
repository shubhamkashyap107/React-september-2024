import React from 'react'

const SideBar = ({showBar, setShowBar}) => {
  return (
    <div style={{width : "350px", height : "90vh", backgroundColor : "lightblue"}}>

        <div onClick={() => {
            setShowBar(!showBar)
        }} style={{fontSize : "58px"}}>
            🫡
        </div>

        <div style={{display:"flex", flexDirection : "column"}}>

        <button>A</button>
        <button>A</button>
        <button>A</button>
        <button>A</button>
        <button>A</button>
        <button>A</button>
        <button>A</button>
        <button>A</button>
        <button>A</button>

        </div>
    </div>
  )
}

export default SideBar