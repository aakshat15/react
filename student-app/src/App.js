import { Component } from "react";
import Header from "./components/Header";
import Data from "./components/Data"

export default class App extends Component {

  constructor() {
    super()

    console.log("Data:", Data);  // Check if Data is populated


    this.state = {
      studentList : Data,
      branchList : [ "CS" ,"IT" , "CV" , "Mech"]
    }
  }

  render() {

    return <>
      <Header />

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <input className="form-control" placeholder="ENTER ROLL NUMBER" />
          </div>
          <div className="col-md-6">
            <input className="form-control" placeholder="ENTER NAME" />
          </div>
        </div>
        
        <div className="row mt-2">
          <div className="col-md-6">
            <select className="form-control">
              <option value="0">SELECT GENDER</option>
              <option value="female">FEMALE</option>
              <option value="male">MALE</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-control">
              <option value="0">SELECT BRANCH</option>
              {this.state.branchList.map((branch , index) => { return <option value={branch} key={index}>{branch}</option>})}
            </select>
          </div>
        </div>
      </div>
      {/* -------------- */}
      
    </>
  }

}