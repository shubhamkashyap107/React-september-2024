import React, { useEffect } from 'react'

const Comp1 = () => {

  useEffect(() => {
    console.log("Comp A mounted")




    return () => {
      console.log("Comp A unmounted")
    }
  }, [])


  return (
    <div>Comp1</div>
  )
}

export default Comp1