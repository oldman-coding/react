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
                value = {input.firstName}
                onChange = {handleChange}
                name = "firstName"
                id ="firstName"
            />
            <label htmlFor="firstName">
                First Name
            </label>

            <input 
                type = "text"
                placeholder="Last name"
                value = {input.lastName}
                onChange = {handleChange}
                name = "lastName"
            />
            <input 
                type = "email"
                placeholder="email"
                value = {input.email}
                onChange = {handleChange}
                name = "email"
            />
            <input 
                type = "checkbox"
                value = {input.isChecked}
                onChange = {handleChange}
                name = "isChecked"
                id="isChecked"
            />
            <label
                htmlFor="isChecked"
            >
                Are you sure you want to
            </label>
            <br/>
            <textarea
                type = "text"
                value = {input.comments}
                onChange = {handleChange}
                name = "comments"
            />
            <br/>
            <div
                value = {input.radioBox}
                onChange = {handleChange}
            >
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>   
           
        </div>
    ) 
}