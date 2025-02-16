import Header from "./Header.js";
import List from "./Data.js";
import { useState, useRef } from "react";
function App() {

  const [taskList, setTaskList] = useState(List)
  const [status, setStatus] = useState("All")

  let titleinpute = useRef();
  let priorityinpute = useRef();




  const setOprations = (taskId) => {
    setTaskList(taskList.map(task =>
      task.Sno === taskId ? { ...task, opration: task.opration === "active" ? "deactive" : "active" } : task));
  };


  const addTask = () => {
    let Sno = taskList.length + 1;
    let title = titleinpute.current.value;
    let priority = priorityinpute.current.value;
    let date = new Date(Date.now()).toLocaleDateString();
    let opration = "active"
    setTaskList([...taskList, { Sno, title, priority, date, opration }])
  }


  return <>
    <Header />
    <div className="container mt-3">
      <div className="row ">
        <div className="col-md-6">
          <input ref={titleinpute} type="text" className="form-control" placeholder="Enter Task Title" />
        </div>
        <select ref={priorityinpute} className="col-md-6">
          <option value="0">select the priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <button onClick={addTask} className="btn btn-primary">ADD</button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
        <button onClick={() => setStatus("All")} className="btn btn-danger">All</button>
          <button onClick={() => setStatus("deactive")} className="btn btn-warning ml-4">Active</button>
          <button onClick={() => setStatus("active")} className="btn btn-success ml-4">DeActive</button>
        </div>

      </div>
      <table className="table table-bordered table-striped mt-5">
        <thead className="table-dark">
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Opration</th>
          </tr>
        </thead>
        <tbody>
          {taskList
            .filter(task => (task.priority == "high") && ( status == "All" || task.opration == status)    ) // Filter high-priority tasks
            .map((task, index) => (
              <tr className="bg-danger">
                <td>{task.Sno}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{task.priority}</td>
                <td>
                  <button onClick={() => setOprations(task.Sno)} className="bg-light btn btn-outline-danger text-secondary" >{task.opration}</button>
                </td>
              </tr>
            ))}
          {taskList
            .filter(task => (task.priority == "medium") && ( status == "All" || task.opration == status))
            .map((task, index) => (
              <tr className="bg-warning">
                <td>{task.Sno}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{task.priority}</td>
                <td>
                  <button onClick={() => setOprations(task.Sno)} className="bg-light btn btn-outline-warning text-secondary" >{task.opration}</button>
                </td>
              </tr>
            ))}
          {taskList
            .filter(task => (task.priority == "low") && ( status == "All" || task.opration == status))
            .map((task, index) => (
              <tr className="bg-success">
                <td>{task.Sno}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{task.priority}</td>
                <td>
                  <button onClick={() => setOprations(task.Sno)} className="bg-light btn btn-outline-success text-secondary" >{task.opration}</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </>
}

export default App;
