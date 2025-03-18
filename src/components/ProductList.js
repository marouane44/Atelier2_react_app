import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onAddToCart, selectedCategory }) {
    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {filteredProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    name={product.name}
                    scale={product.scale}
                    price={product.price}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default ProductList;
