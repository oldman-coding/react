import '../addItem.css'
import { useState } from 'react'

export default function AddItem() {
    const [arrayItem, setArrayItem] = useState(["Thing 1", "Thing 2"])

    const itemElements = arrayItem.map(item => (<p key={item}>{item}</p>))
    
    function addItem() {
        setArrayItem(prevArray => 
            [...prevArray, `Thing ${arrayItem.length + 1}`] 
        )
    }

    return (
        <div className="item">
            <button 
                className="item__button"
                onClick={addItem}
                >
                Add Item
            </button>
            <div>{itemElements}</div>
        </div>
    ) 
}