import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Create.css';
 
const Create = (props) => {

  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    rating: 0,
    orderAgain: false,
    restaurant: ""
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
      orderAgain: false
    });
  };

    return (
        <section>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />

          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />

          <input
            type="text"
            value={newForm.restaurant}
            name="restaurant"
            placeholder="restaurant"
            onChange={handleChange}
          />

          <input
            type="number"
            value={newForm.rating}
            name="rating"
            placeholder="rating"
            onChange={handleChange}
          />

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