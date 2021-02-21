import './App.css';
import React, { useState } from 'react';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: 'Battery',
      cost: '$2.99',
      image: 'https://brain-images-ssl.cdn.dixons.com/6/5/13878556/l_13878556_001.jpg',
    },
    {
      name: 'Blanket',
      cost: '$19.99',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71THWcYwDML._AC_SL1500_.jpg',
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove))
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  const renderProducts = () => (
    <>
          <h1>Products</h1>
          <div className="products">
            {products.map((product, idx) => (
              <div className="product" key={idx}>
                <h3>{product.name}</h3>
                <h4>{product.cost}</h4>
                <img src={product.image} alt={product.name} />
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </>
  );

  const renderCart = () => (
    <>
          <h1>Cart</h1>
          <div className="products">
            {cart.map((product, idx) => (
              <div className="product" key={idx}>
                <h3>{product.name}</h3>
                <h4>{product.cost}</h4>
                <img src={product.image} alt={product.name} />
                <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
              </div>
            ))}
          </div>
        </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
      </header>
      <header>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;