import React, { useState } from "react";
import '../Form.css'

const initialState = {
    category: '',
    title: '',
    image: '',
    time: '',
    ingredients: '',
    instructions: '',
}
const AddRecipe = ({ setFoodData }) => {
    const [formData, setFormData] = useState(initialState)

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((newRecipes) => {
                setFoodData((existingRecipes) => [...existingRecipes, newRecipes])
                setFormData(initialState)
            })
    }
    function handleChange(e) {
        console.log(e.target)
        setFormData((currentFormData) => ({ ...currentFormData, [e.target.name]: e.target.value }))
    }
    const options = [
        { value: 'drinks', label: "Drinks" },
        { value: 'breakfast', label: "Breakfast" },
        { value: 'lunch', label: "Lunch" },
        { value: 'dinner', label: "Dinner" },
        { value: 'dessert', label: "Dessert" }
    ]

    return (
        <div className="formContainer">
            <h1 className="yourRecipe">Add Your Recipe Here!</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    What is your recipe?
                    <select name ="category" onChange={handleChange} className="dropdown-menu">
                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <input className="formInput"
                    type="text"
                    id='title'
                    name='title'
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <input className="formInput"
                    type="text"
                    id='image'
                    name='image'
                    placeholder="Image"
                    value={formData.image}
                    onChange={handleChange}
                />
                <input className="formInput"
                    type="number"
                    id='time'
                    name='time'
                    placeholder="Time in Minutes"
                    value={formData.time}
                    onChange={handleChange}
                />
                <input className="formInput"
                    type="text"
                    id='ingredients'
                    name='ingredients'
                    placeholder="Ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                />
                <input className="formInput"
                    type="text"
                    id='instructions'
                    name='instructions'
                    placeholder="Instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                />
                <button className="submitButton" type='submit'>Submit Recipe!</button>
            </form>
        </div>
    )
}

export default AddRecipe
