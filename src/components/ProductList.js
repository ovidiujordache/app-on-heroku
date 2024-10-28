import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
    return (
        <section className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList;
