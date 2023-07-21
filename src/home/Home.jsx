import React, { useEffect, useState } from 'react'
import Card from '../ui/Card';

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
    <>
    {products? (products.map((value)=>(
    <Card values={value}/>
    )
    )):(
        <div>Loading...</div>
    )

}
    </>
  
  )
  }
export default Home