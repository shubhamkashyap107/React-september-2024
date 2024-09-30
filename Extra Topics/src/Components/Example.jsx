import React, { useState } from 'react'
import Navbar from './Navbar'
import Body from './Body'

const Example = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body darkMode={darkMode} />
    </div>
  )
}

export default Example