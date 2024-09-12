import Ball from "./Components/Ball"
import Intro from "./Components/Intro"
import List from "./Components/List"
import SaysHi from "./Components/SaysHi"
import Square from "./Components/Square"

function App(){
return (
  <div>

  
    <h1>Hello World</h1>
    <div><ExampleComp /></div>
    <div>{ExampleComp()}</div>
    <Ball />
    <Intro age={16} favColor={"Pink"} name={"SHUBHAM"} />
    <SaysHi name={"Shubham"} />
    <Square num={99} />
    <List item1={"Bat"} item2={"ball"} item3={"Cricket"} item4={"Football"} item5={"King"}/>

  </div>
)
}


export default App




function ExampleComp(){
  return <div>Lorem,ugam atque voluptatenon sapiente repudiandae.</div>
}

function ExampleComp2(){
  return <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas dolores fugiat delectus et assumenda in qui sint magnam atque voluptates reiciendis ipsum facere exercitationem recusandae iusto non sapiente repudiandae.</div>
}

function ExampleComp3(){
  return <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas dolores fugiat delectus et assumenda in qui sint magnam atque voluptates reiciendis ipsum facere exercitationem recusandae iusto non sapiente repudiandae.</div>
}



function ExampleComp4(){
  return <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas dolores fugiat delectus et assumenda in qui sint magnam atque voluptates reiciendis ipsum facere exercitationem recusandae iusto non sapiente repudiandae.</div>
}
