import { useEffect, useState,  useRef } from "react";

export default function Clicker({ increment, keyName, textColor }) {

    // This is native JS destructuring while useState and setCount is React
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    
    const buttonRef = useRef()
    console.log(buttonRef);


    // Retrieve variable from local storage
    useEffect(()=> {
        buttonRef.current.style.backgroundColor = "red"
        buttonRef.current.style.color = "salmon"

        return () => {
            localStorage.removeItem(keyName)
        }

    }, [])
   
    // Only call a fxn on the first click, useEffect w/ an empty array at sec variable
    // Save in local storage (can only save strings)
    useEffect(() => {
        localStorage.setItem(keyName, count)
    }, [count])
    

    const buttonClick = () => {
        setCount(count +1)
        increment()
    }
    
    return <div>
        <div style={ { color: textColor } }>Clicks Count: { count }</div>
        <button ref={ buttonRef } onClick={buttonClick}>Click Me</button>
    </div>
}