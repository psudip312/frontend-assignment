import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [textField, setTextField] = useState('');
  const [searchedProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleChange = (event) => {
    setTextField(event.target.value);
  };

  useEffect(() => {
    const filteredData = products.filter(
      (product) => product.title.toLowerCase().includes(textField.toLowerCase())
    );
    setSearchProducts(filteredData);
  }, [products, textField]);

  return (
    <>
      <input
        className=""
        type="text"
        onChange={handleChange} 
        placeholder="Search for products"
      />
      <div className='px-20'>
        <div className='flex flex-wrap gap-4'>
          {searchedProducts.length === 0 ? (
            <div>Loading...</div>
          ) : (
            searchedProducts.map((value) => <Card key={value.id} values={value} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
