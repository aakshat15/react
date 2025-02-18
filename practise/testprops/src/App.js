import {  useState } from "react";
import First from "./components/First";
function App() {

const [counter, setCounter] = useState(100);

const sayHello = ()=>{
  window.alert("Hello Students...");
}
  return <>
  <h1>App components...{counter}</h1>
  <First counter={counter} setCounter={setCounter} m1="hello" sayHello={sayHello} />
  </>
}
export default App;