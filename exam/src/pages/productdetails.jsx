import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  
  const fetchProductDetails = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log('Fetched product details:', response.data);
        setProduct(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]); 

  if (!product) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetails;