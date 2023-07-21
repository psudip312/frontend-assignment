import React, { useEffect, useState } from 'react'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          });
      }, []);
      console.log(products);
      
    
  return (
    <div>Home</div>
  )
}

export default Home