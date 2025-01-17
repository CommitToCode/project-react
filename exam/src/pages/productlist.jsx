import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
const ProductList = () => {

  const [products, setProducts] = useState([]);


  const fetchProducts = () => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        console.log('Fetched products:', response.data);
        setProducts(response.data.products); 
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3> 
            <p>{product.description}</p> 
            <p>Price: ${product.price}</p> 
            <img src={product.image} alt={product.name} style={{ width: '100px' }} /> 
            <Link to={`details/${index}`} className='btn btn-success'>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;