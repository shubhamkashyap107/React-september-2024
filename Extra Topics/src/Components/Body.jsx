import React, { useState } from 'react'

const Body = ({darkMode}) => {

//   const [darkMode, setDarkMode] = useState(true);



  return (
    <div className={darkMode ? "h-[90vh] bg-slate-700 text-white" : "h-[90vh] bg-slate-100"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil expedita temporibus autem adipisci cumque consequuntur consectetur quod atque dicta iste. Labore iste cupiditate minus minima! Quam voluptas repudiandae accusamus officiis.
    </div>
  )
}

export default Body