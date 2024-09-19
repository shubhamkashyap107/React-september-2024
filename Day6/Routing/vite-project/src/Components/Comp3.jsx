import React, { useEffect } from 'react'

const Comp3 = () => {

  useEffect(() => {
    console.log("Comp C mounted")




    return () => {
      console.log("Comp C unmounted")
    }
  }, [])
  return (
    <div>Comp3</div>
  )
}

export default Comp3