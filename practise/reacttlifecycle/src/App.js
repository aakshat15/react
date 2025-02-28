import { Component } from "react";
export default class App extends Component{

    constructor(){
      super();
      console.log("CONSTRACTORE EXECUTED...");
    }
    //  METHOD OF MOUNT
    componentDidMount(){
      console.log("Component Did Mount executed...");
     }
     componentDidUpdate(){
      console.log("component did update executed...");
     }

     render(){
      console.log(" RENDER executed");
      return <>
      <h2>FIle</h2>
      </>
     }
}