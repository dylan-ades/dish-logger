import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <div className="about-container">
      <h1 className="about-title">Discover and Relish</h1>
      <p className="about-description">Track your culinary journey, savor every bite with Dish Logger.</p>
      <div className="about-features">
        <div className="about-feature">
          <i className="fas fa-utensils"></i>
          <h2 className="about-feature-title">Explore New Flavors</h2>
          <p className="about-feature-description">Discover a world of mouthwatering dishes from various restaurants.</p>
        </div>
        <div className="about-feature">
          <i className="fas fa-pencil-alt"></i>
          <h2 className="about-feature-title">Personalized Ratings</h2>
          <p className="about-feature-description">Rate the dishes you've tried and note how you felt about them.</p>
        </div>
        <div className="about-feature">
          <i className="fas fa-undo-alt"></i>
          <h2 className="about-feature-title">Effortless Decision-making</h2>
          <p className="about-feature-description">Keep track of your favorite dishes and decide whether to order them again.</p>
        </div>
      </div>
      <button className="about-get-started-btn">
        <Link to="/create" style={{ textDecoration: 'none' }}>Start Logging</Link>
        </button>
    </div>
  );
};

export default About;
