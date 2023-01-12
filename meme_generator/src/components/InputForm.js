import { useState } from "react"

export default function InputForm() {
    const [ input, setInput ] = useState({
        firstName: "",
        lastName: "",
        isChecked: false,
        gender: "", 
        comments: "",
        favColor: "",
    })
    
    

    function handleSubmit(e) {
        // Prevent refresh page
        e.preventDefault();
        // submitToApi(input)
        console.log(input)
    }

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
        <form onSubmit={handleSubmit}>
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
                <input 
                    type="radio" 
                    value="Male" 
                    name="gender"
                    checkek={input.gender ==="Male"} 
                /> Male
                <input type="radio" value="Female" name="gender" checkek={input.gender ==="Female"} /> Female
                <input type="radio" value="Other" name="gender" checkek={input.gender ==="Other"}  /> Other
            </div>
            <br/>
            <select
                id="favColor"
                value={input.favColor}
                name = 'favColor'
                onChange={handleChange}
            >
                <option value="">---Choose option---</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
            </select>   
            <br/>
            <button>Submit</button>
        </form>
    ) 
}