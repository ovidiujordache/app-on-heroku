import React from 'react';
import { useCart } from '../ContextProviders/CartContext'; 
import PropTypes from 'prop-types';
const Product = ({ product }) => {
  const { addItem } = useCart(); 
  const image ="https://via.placeholder.com/150"
  const { _id, productname, productdescription, productpriceeuros, category } = product;

  const handleAddToCart = () => {
    addItem(_id, productname,productpriceeuros); 
  };

  return (
    <div className="product">
      <img src={image} alt={productname}  />
          <h3>{productname}</h3>
            <p>{productdescription}</p>
            <p>Category: {category}</p>
            <p>Price: €{(productpriceeuros / 100)}</p> 
      <button onClick={handleAddToCart}>Add to Cart</button>
 
    </div>
  );
};
Product.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        productname: PropTypes.string.isRequired,
        productdescription: PropTypes.string.isRequired,
        productpriceeuros: PropTypes.number.isRequired,
    }).isRequired,
};
export default Product;
