import { useContext } from "react";
import { counterContext } from "../App";

function Secound(){
    const {counter , setCounter} = useContext(counterContext);
    return <>
    <h3>Secound Components...{counter}</h3>
    <button onClick={()=>setCounter(counter+1)}>increment</button>
    </>

}
export default Secound;