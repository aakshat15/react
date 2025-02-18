function Secound({counter , setCounter}){

    return <>
    <h3>Secound Component.....{counter}</h3>
    <button onClick={()=>setCounter(counter+1)}>Increment Counter</button>
    </>
}
export default Secound;