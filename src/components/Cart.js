function Cart({ items }) {
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart">
            <h2>Votre Panier</h2>
            {items.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.name} — {item.price}€
                        </li>
                    ))}
                </ul>
            )}
            {items.length > 0 && (
                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    Total : {total}€
                </p>
            )}
        </div>
    );
}

export default Cart;
