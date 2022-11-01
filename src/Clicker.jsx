import { useState } from "react";

export default function Clicker() {

    // This is native JS destructuring while useState and setCount is React
    const [ count, setCount ] = useState(0)
   
    

    const buttonClick = () => {
        setCount(count +1)
    }
    
    return <div>
        <div>Clicks Count: { count }</div>
        <button onClick={buttonClick}>Click Me</button>
    </div>
}