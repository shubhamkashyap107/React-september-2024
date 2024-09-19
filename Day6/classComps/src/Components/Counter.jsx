import { Component } from "react";

class Counter extends Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0
        }
    }

    componentDidMount(){
       console.log("Counter Component Mounted") 
    }

    componentDidUpdate(){
        console.log("Component updated")
    }

    componentWillUnmount(){
        console.log("Component is removed")
    }


    render(){
        return (
            <div>
                <h1>The count is : {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({count : this.state.count + 1})
                }}>Increment</button>
            </div>
        )
    }
}

export default Counter