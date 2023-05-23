import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Show = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dishes = props.dishes
  
  const dish = dishes ? dishes.find((p) => p._id === id ) : null

  const [ editForm, setEditForm ] = useState(dish)

  const [ isEditing, setIsEditing ] = useState(false)

  useEffect( () => {
    if (dish) {
        setEditForm(dish)
    }
  }, [dish])

  // handling form data change
  const handleChange = (e) => {
    setEditForm( {
      ...editForm,
     [e.target.name]: e.target.value 
    })
  }
  
  // handling submit event for edit form
  const handleUpdate = (e) => {
    e.preventDefault()
    props.updateDishes(editForm, dish._id)
  }

  // handle edit will toggle the edit form 
  const handleEdit = () => {
    setIsEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteDishes(dish._id)
    navigate('/')
  }

  const loaded = () => {
    return (
      <>
        <h1>{dish.name}</h1>
        <h2>{dish.title}</h2>
        <h3>{dish.rating}/5</h3>
        <h4>{dish.orderAgain}</h4>
        <img 
          className="avatar-image" 
          src={dish.image} 
          alt={dish.name} 
        />
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit' : 'Edit' }</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="dish">
      { dish ? loaded() : loading() }


      { isEditing && 
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        /> 
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
            type="number"
            value={editForm.rating}
            name="rating"
            placeholder="rating"
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
        }
    </div>
  )
}

export default Show