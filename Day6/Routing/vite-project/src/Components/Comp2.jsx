import React, { useEffect } from 'react'

const Comp2 = () => {
  useEffect(() => {
    console.log("Comp B mounted")




    return () => {
      console.log("Comp B unmounted")
    }
  }, [])
  return (
    <div>Comp2</div>
  )
}

export default Comp2