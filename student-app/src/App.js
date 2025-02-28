import { useState, useRef } from "react";
import Header from "./components/Header";
import Data from "./components/Data"

const App = () => {


  const [studentList, setStudentList] = useState(Data);
  const [branchList] = useState(["CS", "IT", "CV", "Mech"]);
  const [defaultBranch, setDefaultBranch] = useState("All");
  const [defaultGender, setDefaultGender] = useState("All");



  const rollRef = useRef();
  const nameRef = useRef();
  const genderRef = useRef();
  const branchRef = useRef();

  // ---------functions-------------------------

  // removeFunction
  const remove = (rollNumber) => {
    if (window.confirm("Do you want to delete it?")) {
      setStudentList(studentList.filter((student) => student.roll !== rollNumber));
    }
  }

  const addStudent = () => {

    const roll = rollRef.current.value.trim();
    const name = nameRef.current.value.trim();
    const gender = genderRef.current.value;
    const branch = branchRef.current.value;

    // console.log(roll);
    // console.log(name);
    // console.log(gender);
    // console.log(branch);


    setStudentList([...studentList, { roll, name, gender, branch }])


  }




  return <>
    <Header />

    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <input ref={rollRef} id="roll" className="form-control" placeholder="ENTER ROLL NUMBER" required />
        </div>
        <div className="col-md-6">
          <input ref={nameRef} id="name" className="form-control" placeholder="ENTER NAME" required />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-6">
          <select ref={genderRef} id="gender" className="form-control" required>
            <option value="0">SELECT GENDER</option>
            <option value="female">FEMALE</option>
            <option value="male">MALE</option>
          </select>
        </div>
        <div className="col-md-6">
          <select ref={branchRef} id="branch" className="form-control" required>
            <option value="0">SELECT BRANCH</option>
            {branchList.map((branch, index) => { return <option value={branch} key={index}>{branch}</option> })}
          </select>
        </div>
      </div>
      <div className="row mt-2 d-flex justify-content-center">
        <button onClick={addStudent} className="btn btn-success">ADD</button>
      </div>

      <div className="row mt-2 d-flex justiy-content-around">
        <div className="col-md-6 d-flex">
          <div className="form-check">
            <input onClick={() => setDefaultGender("All")} class="form-check-input" type="radio" name="gender" />
            <label class="form-check-label">ALL</label>
          </div>
          <div className="form-check">
            <input onClick={() => setDefaultGender("Male")} class="form-check-input ml-1" type="radio" name="gender" />
            <label class="form-check-label ml-4">MALE</label>
          </div>
          <div className="form-check">
            <input onClick={() => setDefaultGender("Female")} class="form-check-input ml-1" type="radio" name="gender" />
            <label class="form-check-label ml-4"> FEMALE</label>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div>
            <button onClick={() => setDefaultBranch("CS")} className="btn btn-secondary ml-5" style={{ width: "15%", fontSize: "100%" }}>CS({studentList.filter((student) => { return student.branch == "CS" }).length})</button>
            <button onClick={() => setDefaultBranch("IT")} className="btn btn-primary ml-5" style={{ width: "15%" }}>IT({studentList.filter((student) => { return student.branch == "IT" }).length})</button>
            <button onClick={() => setDefaultBranch("Mech")} className="btn btn-dark ml-5" style={{ width: "15%" }}>MECH({studentList.filter((student) => { return student.branch == "Mech" }).length})</button>
            <button onClick={() => setDefaultBranch("All")} className="btn btn-success ml-5" style={{ width: "15.5%" }}>TOTAL({studentList.length})</button>
          </div>
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
          {studentList.filter((student) => { return (student.branch == defaultBranch || defaultBranch == "All") && (student.gender == defaultGender || defaultGender == "All") }).map((student, index) => {
            return <tr>

              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.branch}</td>
              <td>
                <button onClick={() => { remove(student.roll) }} className="btn btn-outline-danger">remove</button>
              </td>
            </tr>

          })

          }
        </tbody>
      </table>
    </div>
  </>


}

export default App