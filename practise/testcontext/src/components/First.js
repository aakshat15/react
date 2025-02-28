import { useContext } from "react"
import { counterContext , massegeContext} from "../App"
import Secound from "./Secound";

function First(){
    const {m1 , m2} = useContext(massegeContext);
    return <>
    <h2>{m1} First Components...{m2}</h2>
    <Secound/>
    </>
}
export default First