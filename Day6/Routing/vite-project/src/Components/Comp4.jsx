import React, { useEffect } from 'react'

const Comp4 = () => {
  useEffect(() => {
    console.log("Comp D mounted")




    return () => {
      console.log("Comp D unmounted")
    }
  }, [])
  return (
    <div>Comp4</div>
  )
}

export default Comp4