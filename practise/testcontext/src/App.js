import { createContext, useState } from "react"
import First from "./components/First";

export const counterContext = createContext();
export const massegeContext = createContext();
function App() {

  const [counter , setCounter] = useState(100)

  return <>
  <h1>App Component...{counter}</h1>
  <counterContext.Provider value={{counter, setCounter}}>
    <massegeContext.Provider value={{m1: 'hello' , m2: "guyzz"}}>
  <First/>
    </massegeContext.Provider>
    </counterContext.Provider>
  </>
}
export default App