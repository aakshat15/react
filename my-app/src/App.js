import { Component } from "react";
import Header from "./components/header.js";

class App extends Component{

    constructor(){
      super();
      // this.state = {
      //   counter: 500
      // }
    }

    // incrementCounter = () => {
    //   this.state.counter = this.state.counter+1;
    //   // this.setState({counter: this.state.counter + 1});
    //   this.forceUpdate();
    // }
    // render(){
    //   return<>
    //   <label>Counter : {this.state.counter} </label><br/>
    //   <button onClick={this.incrementCounter}>Increment Counter</button>
    //   <hr/>
    //   </>
    // }
    
    render(){
      return <>
      <Header/>
      </>
    }

}

export default App ; 