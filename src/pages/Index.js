import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParam, setSearchParam] = useState('name');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleParamChange = (event) => {
    setSearchParam(event.target.value);
  };

  const filteredDishes = props.dishes ? props.dishes.filter((dish) =>
    dish[searchParam]?.toLowerCase().startsWith(searchTerm.toLowerCase())
  ) : [];

  const loaded = () => {
    return filteredDishes.map((dish) => (
      <div key={dish._id} className="dish">
        <Link to={`/dishes/${dish._id}`}>
          <h1>{dish.name}</h1>
        </Link>
        <h3>{dish.restaurant}</h3>
        <img
          src={dish.image}
          alt={dish.name}
          style={{ maxWidth: "30%" }}
        />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
        />
        <select value={searchParam} onChange={handleParamChange}>
          <option value="name">Dish Name</option>
          <option value="restaurant">Restaurant</option>
          {/* Add more options for other parameters */}
        </select>
      </div>
      {props.dishes ? loaded() : loading()}
    </section>
  );
};

export default Index;
