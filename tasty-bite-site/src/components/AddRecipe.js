import React, {useState} from "react";
const initialState = {
    category: '',
    title: '',
    image: '',
    ingredients: '',
    instructions: '',
}
const AddRecipe = ({setFoodData}) => {
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
        setFormData((currentFormData) => ({...currentFormData, [e.target.name]: e.target.value}))
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id='category'
                name='category'
                placeholder="category"
                value={formData.category}
                onChange={handleChange}
            />
            <input
                type="text"
                id='title'
                name='title'
                placeholder="title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                id='image'
                name='image'
                placeholder="image"
                value={formData.image}
                onChange={handleChange}
            />
            <input
                type="number"
                id='time'
                name='time'
                placeholder="time"
                value={formData.time}
                onChange={handleChange}
            />
            <input
                type="text"
                id='ingredients'
                name='ingredients'
                placeholder="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
            />
            <input
                type="text"
                id='instructions'
                name='instructions'
                placeholder="instructions"
                value={formData.instructions}
                onChange={handleChange}
            />
            <button type='submit'>Submit Recipe!</button>
        </form>
        </div>
    )
}

export default AddRecipe
