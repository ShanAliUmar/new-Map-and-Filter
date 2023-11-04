import React from 'react';
export const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}$</p>
      <img src={product.img} alt={product.name} />
    </div>
  );
};