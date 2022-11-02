import { useEffect, useState } from "react";

export default function Clicker() {

    // This is native JS destructuring while useState and setCount is React
    const [ count, setCount ] = useState(parseInt(localStorage.getItem("count") ?? 0))
    
    // Retrieve variable from local storage
    useEffect(()=> {
        


        return () => {
            localStorage.removeItem("count")
        }

    }, [])
   
    // Only call a fxn on the first click, useEffect w/ an empty array at sec variable
    // Save in local storage (can only save strings)
    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])
    

    const buttonClick = () => {
        setCount(count +1)
    }
    
    return <div>
        <div>Clicks Count: { count }</div>
        <button onClick={buttonClick}>Click Me</button>
    </div>
}