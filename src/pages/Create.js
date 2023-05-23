import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Create.css';
 
const Create = (props) => {

    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        rating: 0,
        orderAgain: false,
        restaurant: "",
        description: "" // Add the description field
      });
  

      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === "checkbox" ? checked : value;
        setNewForm({ ...newForm, [name]: fieldValue });
      };
  

      const handleSubmit = (event) => {
        event.preventDefault();
        props.createDishes(newForm);
        setNewForm({
          name: "",
          image: "",
          restaurant: "",
          rating: 0,
          orderAgain: false,
          description: "" // Add the description field
        });
      };

    return (
        <section>
          <form onSubmit={handleSubmit}>
            <h2>Add a Dish to Your List!</h2>
    <label>Dish Name: 
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          </label>
    <label> Image URL: 
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
          </label>
    <label> Restaurant: 
          <input
            type="text"
            value={newForm.restaurant}
            name="restaurant"
            placeholder="restaurant"
            onChange={handleChange}
          />
          </label>
    <label> Rating (out of 5)
          <input
            type="number"
            value={newForm.rating}
            name="rating"
            placeholder="rating"
            onChange={handleChange}
          />
          </label>
    <label>Description: 
          <textarea id='textarea'
            value={newForm.description}
            name="description"
            placeholder="description"
            onChange={handleChange}
            />
            </label>
        
        <label>
            <input
              type="checkbox"
              checked={newForm.orderAgain}
              name="orderAgain"
              onChange={handleChange}
            />
            Order Again
          </label>

          <input type="submit" value="Create Dish" />

          </form>
          {/* {props.dishes ? loaded() : loading()} */}
        </section>
    )
}

export default Create