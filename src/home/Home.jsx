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
    <div className='px-20'>
    <div className='flex flex-wrap gap-4'>
    {products? (products.map((value)=>(
        <Card values={value}/>
        )
        )):(
            <div>Loading...</div>
        )
    
    }
    </div>
    </div>
 
    </>
  
  )
  }
export default Home