import { Component } from "react";
import Header from "./components/Header";
import Data from "./components/Data"

export default class App extends Component {

  constructor() {
    super()

    // console.log("Data:", Data);  // Check if Data is populated


    this.state = {
      studentList: Data,
      branchList: ["CS", "IT", "CV", "Mech"],
      defaultBranch: "All" ,
      defaultGender: "All"
    }
  }

  // ---------functions-------------------------

  // removeFunction
  remove = (rollNumber) => {
    if (window.confirm("Do you want to delete it ?")) {
      let index = this.state.studentList.findIndex((student) => { return student.roll == rollNumber })
      this.state.studentList.splice(index, 1);
      this.setState({ studentList: [...this.state.studentList] })
    }
  }

  addStudent = () => {

    // WAY 1
    // id="roll"

    // let roll = document.getElementById("roll").value;
    //  let name = document.getElementById("name").value;
    //  let branch = document.getElementById("branch").value;
    //  let gender = document.getElementById("gender").value;
    //  let newStudent = {roll,name,branch,gender};
    //  this.state.studentList.push(newStudent);
    //  this.setState({studentList: [...this.state.studentList]});


    // WAY 2
    // ref={(obj) => {this.name=obj}}    

    let roll = this.roll.value;
    let name = this.roll.name;
    let gender = this.roll.gender;
    let branch = this.roll.branch;

    this.setState({ studentList: [...this.state.studentList, { roll, name, gender, branch }] })
  }



  render() {

    return <>
      <Header />

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <input ref={(obj) => { this.roll = obj }} id="roll" className="form-control" placeholder="ENTER ROLL NUMBER" required />
          </div>
          <div className="col-md-6">
            <input ref={(obj) => { this.name = obj }} id="name" className="form-control" placeholder="ENTER NAME" required />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6">
            <select ref={(obj) => { this.gender = obj }} id="gender" className="form-control" required>
              <option value="0">SELECT GENDER</option>
              <option value="female">FEMALE</option>
              <option value="male">MALE</option>
            </select>
          </div>
          <div className="col-md-6">
            <select ref={(obj) => { this.branch = obj }} id="branch" className="form-control" required>
              <option value="0">SELECT BRANCH</option>
              {this.state.branchList.map((branch, index) => { return <option value={branch} key={index}>{branch}</option> })}
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-2">
            <button onClick={this.addStudent} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-4 d-flex">
            <div className="form-check">
              <input onClick={() => this.setState({ defaultGender:"All"})} class="form-check-input" type="radio" name="gender"/>
              <label class="form-check-label">ALL</label>
            </div>
            <div className="form-check">
              <input onClick={() => this.setState({ defaultGender:"Male"})} class="form-check-input" type="radio" name="gender" />
              <label class="form-check-label">MALE</label>
            </div>
            <div className="form-check">
              <input onClick={() => this.setState({ defaultGender:"Female"})} class="form-check-input" type="radio" name="gender" />
              <label class="form-check-label"> FEMALE</label>
            </div>
            </div>
          <div>
            <button onClick={() => this.setState({ defaultBranch: "CS" })} className="btn btn-secondary ml-5" style={{ width: "6vw" }}>CS({this.state.studentList.filter((student) => { return student.branch == "CS" }).length})</button>
            <button onClick={() => this.setState({ defaultBranch: "IT" })} className="btn btn-primary ml-5" style={{ width: "6vw" }}>IT({this.state.studentList.filter((student) => { return student.branch == "IT" }).length})</button>
            <button onClick={() => this.setState({ defaultBranch: "Mech" })} className="btn btn-dark ml-5" style={{ width: "6vw" }}>MECH({this.state.studentList.filter((student) => { return student.branch == "Mech" }).length})</button>
            <button onClick={() => this.setState({ defaultBranch: "All" })} className="btn btn-success ml-5" style={{ width: "6vw" }}>TOTAL({this.state.studentList.length})</button>
          </div>
        </div>
      </div>

      {/* -------------- */}
      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>ROLL NUM.</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>BRANCH</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.filter((student) => { return (student.branch == this.state.defaultBranch || this.state.defaultBranch == "All") && (student.gender == this.state.defaultGender || this.state.defaultGender == "All") }).map((student, index) => {
              return <tr>

                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.branch}</td>
                <td>
                  <button onClick={() => { this.remove(student.roll) }} className="btn btn-outline-danger">remove</button>
                </td>
              </tr>

            })

            }
          </tbody>
        </table>
      </div>
    </>
  }

}