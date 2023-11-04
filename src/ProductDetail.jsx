import React from 'react';
const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}$</p>
      <img src={product.img} alt={product.name} />
    </div>
  );
};
export default ProductDetail;
