import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="nav">
        <Link to="/">
         <div>Dishes </div>
        </Link>
        <Link to="/about">
         <div>About </div>
        </Link>
        <Link to="/restaurants">
         <div>Restaurants </div>
        </Link>
        <Link to="/create">
         <div>Add Dish </div>
        </Link>
    </nav>
  )
}

export default Header