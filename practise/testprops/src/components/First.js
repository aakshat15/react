import Secound from "./Secound";

function First({counter , setCounter , m1 , sayHello}) {
    return <>
    <h2>First Components .....{m1}  , {counter}</h2>
    <Secound counter={counter} setCounter={setCounter}  />
    <button onClick={sayHello}>sayHello</button>
    </>
}
export default First;