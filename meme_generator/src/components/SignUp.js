import '../css/signup.css'
import { useState } from 'react'

export default function SignUp() {
    const [formData, setFormData] = useState ({
        name: "", 
        password: "", 
        confirmPassword: "",
        isChecked: false, 
    })
    console.log(formData)

    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        setFormData(prevData => (
            {
                ...prevData, 
                [name]: value
            }
        )
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log('Password match');
        }
        else {
            console.log('Password not match');
        }

        if (formData.isChecked) {
            console.log('Thanks for signing up')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="signup">
            <input
                type = "text" 
                placeholder="First name"
                value = {formData.name}
                onChange = {handleChange}
                name = "name"
            />
            <br/>

            <input 
                type = "password"
                placeholder="Password"
                value = {formData.password}
                onChange = {handleChange}
                name = "password"
            />
            <br/>

            <input 
                type = "password"
                placeholder="Confirm password"
                value = {formData.confirmPassword}
                onChange = {handleChange}
                name = "confirmPassword"
            />
            <br/>
            <input 
                type = "checkbox"
                value = {formData.isChecked}
                onChange = {handleChange}
                name = "isChecked"
                id="isChecked1"
            />
            <label 
                htmlFor="isChecked1"
            >
                I want to Join the Newsletter
            </label>
            <br/>
            <button>Signup</button>
    </form>
    )
}