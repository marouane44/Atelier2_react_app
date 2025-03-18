import React, { useState } from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Categories from './components/Categories';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = [
        { id: 1, name: 'Collier en Or', scale: 3, category: 'necklace', price: 120 },
        { id: 2, name: 'Bracelet Argent', scale: 2, category: 'bracelet', price: 80 },
        { id: 3, name: 'Bague Diamant', scale: 4, category: 'ring', price: 200 }
    ];

    const handleAddToCart = (productName, productPrice) => {
        setCartItems([...cartItems, { name: productName, price: productPrice }]);
    };
    

    return (
        <div>
            <Banner />
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Cart items={cartItems} />
            <ProductList
                products={products}
                onAddToCart={handleAddToCart}
                selectedCategory={selectedCategory}
            />
            <Footer />
        </div>
    );
}

export default App;
