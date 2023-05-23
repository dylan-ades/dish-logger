import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  const loaded = () => {
    return props.dishes.map((dish) => (
      <div key={dish._id} className="dish">
        <Link to={`/dishes/${dish._id}`}>
          <h1>{dish.name}</h1>
        </Link>
        <img src={dish.image} alt={dish.name} />
        <h3>{dish.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      {props.dishes ? loaded() : loading()}
    </section>
  );
};

export default Index;
