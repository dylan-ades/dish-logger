import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Show = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dishes = props.dishes;

  const dish = dishes ? dishes.find((p) => p._id === id) : null;

  const [editForm, setEditForm] = useState(dish);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (dish) {
      setEditForm(dish);
    }
  }, [dish]);

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    props.updateDishes(editForm, dish._id);
  };

  const handleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleDelete = () => {
    props.deleteDishes(dish._id);
    navigate('/');
  };

  const loaded = () => {
    const starRating = Math.min(dish.rating, 5);
    const stars = "★".repeat(starRating) + "☆".repeat(5 - starRating);
    const orderAgainText = dish.orderAgain ? "Would Order Again!" : "Would Not Order Again!";
    const orderAgainSymbol = dish.orderAgain ? "✓" : "✕";

    return (
      <>
        <h1>{dish.name}</h1>
        <h2>{dish.restaurant}</h2>
        <h3>{stars}</h3>
        <h5>{orderAgainText} {orderAgainSymbol}</h5>
        <p>{dish.description}</p>
        <img
          className="avatar-image"
          src={dish.image}
          alt={dish.name}
          style={{ margin: "2vh auto", display: "block", maxWidth: "50vh" }}
        />
        <button onClick={handleEdit}>{isEditing ? 'Cancel Edit' : 'Edit'}</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="dish">
      {dish ? loaded() : loading()}

      {isEditing && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.restaurant}
            name="restaurant"
            placeholder="Restaurant"
            onChange={handleChange}
          />
          <input
            type="number"
            value={editForm.rating}
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
          />
          <textarea id='textarea'
            value={editForm.description}
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              checked={editForm.orderAgain}
              name="orderAgain"
              onChange={handleChange}
            />
            Order Again
          </label>
          <input type="submit" value="Update Dish" />
        </form>
      )}
    </div>
  );
};

export default Show;
