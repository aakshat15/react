import { Component } from "react";

export default class Header extends Component{
    render(){
        return <>
        <div className="bg-danger  d-flex justify-content-center align-items-center" style={{ height:"10vh"}}>
            <label className="text-white" style={{ fontWeight:"bolder" , fontSize:"5vh"}}>STUDENT APP</label>
        </div>
        </>
    }    
}