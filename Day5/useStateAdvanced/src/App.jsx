import React, { useState } from 'react'

const App = () => {


  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")

 

  return (
    <div>
      <form method='post' action="#" onSubmit={(e) => {
        e.preventDefault()
      }}>
        <label htmlFor="username">Username</label>
        <input onChange={(e) => {
          setUsername(e.target.value)
        }} name='user' value={username} id='username' className="" />
        <br />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => {
          setPassword(e.target.value)
        }} name='pass' value={password} id='password' className="" />
        <br />
        <button >Submit</button>
      </form>

    </div>
  )
}




export default App