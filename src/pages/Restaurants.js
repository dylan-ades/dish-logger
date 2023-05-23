import React from 'react';
import { Link } from 'react-router-dom';

const Restaurants = (props) => {
  const uniqueRestaurants = [];

  const loaded = () => {
    return props.dishes.map((dish) => {
      const restaurantName = String(dish.restaurant).toLowerCase();

      if (!uniqueRestaurants.includes(restaurantName) && dish.restaurant) {
        uniqueRestaurants.push(restaurantName);

        return (
          <div key={dish._id} className="dish">
            <h1>– {dish.restaurant}</h1>
            {/* Additional content */}
          </div>
        );
      }

      return null; // Skip rendering for duplicate restaurants
    });
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
        <h2>Your Favorite Restaurants!</h2>
      {props.dishes ? loaded() : loading()}
    </section>
  );
};

export default Restaurants;
