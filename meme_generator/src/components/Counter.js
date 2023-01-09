import {useState} from "react"; 

export default function Counter() {
    const [count, setCount] = useState(0)
    function handleMinusCount() {
        setCount(count -1)
    }

    function handlePlusCount() {
        setCount(count + 1)
    }

    return (
        <div className="counter">
            <button onClick = {handleMinusCount} className="counter--minus">-</button>
            <div className = "counter-count">
                <h1>{count}</h1>
            </div>
            <button onClick = {handlePlusCount} className="counter--plus">+</button>
        </div>
    ) 
}