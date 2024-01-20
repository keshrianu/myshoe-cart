import React from 'react'
import { Link, Route, useParams } from 'react-router-dom';


const ShoeDes = ({newlist}) => {
  const { productId } = useParams();
  const product = newlist[productId];
  console.log(newlist);
  return (
    <>

      <h1 style={{ margin: '200px', color: 'green' }}>Product</h1>
      {product ? (
        <img src={product.img} alt={`Product ${productId}`} />
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default ShoeDes
