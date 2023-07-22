import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../ui/Card';
import { useNavigate } from "react-router-dom";
const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }, []);

  const navigate=useNavigate()
  return (
    <div>
    <div>
    <button className='border px-3  bg-black text-white py-2 text-xl' onClick={() => navigate("/")}>Return to Home</button>
    <div className='flex flex-wrap gap-4 '>   {favorites.map((item) => (
        <Card values={item}  />
      ))}</div>
 
  </div>
    
    </div>
  )
}

export default Favorites