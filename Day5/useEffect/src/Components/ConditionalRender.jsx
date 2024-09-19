import React from 'react'
import { useState } from 'react'

const ConditionalRender = () => {

    // let a = true;

    const[show, setShow] = useState(false)
    const[showSidebar, setShowSidebar] = useState(true)
    console.log(show)

  return (
    <div style={{display:"flex", height :"screen"}}>
        {/* {a && <div>Hello</div>} */}

        {/* {a == true? <h1>Hello</h1> : ""} */}

        {/* {a == true? <Example /> : ""} */}

        {/* {showSidebar && <Sidebar />} */}
        {showSidebar == true ? <Sidebar /> : ""}
        {show && <img src='https://imgs.search.brave.com/wNxVwh_jyGp_07OOyf1-Juw4fwrwim6GyhU1ZhK9BkE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDgx/NTM1Ny5qcGc' />}


    <div>

        <button onClick={() => {
            setShow(!show)
        }}>Toggle</button>

        <button onClick={() =>{
            setShowSidebar(!showSidebar)
        }}>🤪</button>

</div>

    </div>
  )
}


const Sidebar = () => {
    return <div style={{height : "800px",width:"300px", backgroundColor : "black", color:"white"}}>lorem</div>
}

function Example(){
    return <h1>Hello from component Example</h1>
}

export default ConditionalRender