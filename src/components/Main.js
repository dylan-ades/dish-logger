import React, {useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom"

import Index from '../pages/Index'
import Show from '../pages/Show'
import Create from '../pages/Create'
import About from '../pages/About'
import Restaurants from '../pages/Restaurants'

import '../Create.css';


const Main = (props) => {
    const [ dishes, setDishes ] = useState(null)

    // const URL = "http://localhost:4000/dishes/"
    // const URL = "https://dish-app-backend-vbps.onrender.com/dishes/"
    const URL = "https://person-app-backend-vbps.onrender.com/dishes/"

    const getDishes = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setDishes(data)
    }

   const createDishes = async (dish) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(dish)
        })
        getDishes()
    }

   const updateDishes = async (dish, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(dish)
        })
        getDishes()
    }
    
    const deleteDishes = async id => {
      // make delete request to create dishes
      await fetch(URL + id, {
        method: "DELETE",
      })
      // update list of dishes
      getDishes();
    }


    useEffect(() => {
        getDishes();
      }, []);

  return (
    <main>
    <Routes>
        <Route exact path="/" element={<Index dishes={dishes} createDishes={createDishes}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants" element={<Restaurants  dishes={dishes} createDishes={createDishes}/>} />
        <Route path="/create" element={<Create dishes={dishes} createDishes={createDishes}/>} />
        <Route
          path="/dishes/:id"
          element = {
          <Show 
            dishes={dishes}
            updateDishes={updateDishes}
            deleteDishes={deleteDishes}
          /> }
        />
    </Routes>
   </main>
     )
}

export default Main