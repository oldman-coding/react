import { useState } from "react"

export default function InputForm() {
    const [ input, setInput ] = useState({
        firstName: "",
        lastName: "",
        isChecked: false,
    })
    
    console.log(input)

    function handleChange(event) {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        const name = event.target.name
        setInput(prevInput => (
            { 
                ...prevInput, 
                [name]: value,
            }
            )
        )
    }

    return (
        <div>
            <input
                type = "text" 
                placeholder="First name"
                // value = {firstName}
                onChange = {handleChange}
                name = "firstName"
            />

            <input 
                type = "text"
                placeholder="Last name"
                // value = {lastName}
                onChange = {handleChange}
                name = "lastName"
            />
            <input 
                type = "checkbox"
                // value = {isChecked}
                onChange = {handleChange}
                name = "isChecked"
            />
        </div>
    ) 
}