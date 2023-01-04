
import NewButton from "../Boton/Button"
import { useState } from "react"


const CountFunction = (props) =>{
   const [count, setCount] = useState(0)

    const dec = () =>{
        if (count < 5) {
        setCount(count + 1)
        }
    }
    const incr = () =>{
        if (count > 0) {
            setCount(count - 1)
        }
    } 
    
    return(
        <>
            <NewButton
                handleClick={dec}
                color= 'red'
                label= '+'
                />
            <h2>{count}</h2>
            <NewButton
                handleClick={incr}
                color= 'blue'
                label= '-'
                />
             
        </>
    )
}

export default CountFunction