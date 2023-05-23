import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 
const Create = (props) => {

  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    rating: 0,
    orderAgain: false,
    title: ""
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
      title: "",
      rating: 0,
      orderAgain: false
    });
  };
  

    // const loaded = () => {
    //     return props.dishes.map((dish) => (
    //         <div key={dish._id} className="dish">
    //         <Link to={`/dishes/${dish._id}`}><h1>{dish.name}</h1></Link>
    //         <img src={dish.image} alt={dish.name} />
    //         <h3>{dish.title}</h3>
    //       </div>  
    //     )
    //     )
    // }

    // const loading = () => {
    //     return <h1> Loading...</h1>
    // }


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
            value={newForm.title}
            name="title"
            placeholder="title"
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