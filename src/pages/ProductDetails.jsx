import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
const ProductDetails = () => {
  
  const { id } =useParams();

  console.log("id",id);
  const [productDetails, setproductsDetails] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setproductsDetails(data);
      });
  }, [id]);
  console.log("productkodetail",productDetails)
    return (
    <div>
    <ProductCard productDetails={productDetails}/>
    </div>
  )
}

export default ProductDetails