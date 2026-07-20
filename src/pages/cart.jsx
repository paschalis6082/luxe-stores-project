import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">

      <h2 style={{color:"black"}} >YOUR SHOPPING CART</h2>

      {cart.length === 0 ? (
        <>
          <h3 style={{color:"black"}}>Your cart is empty.</h3>

          <div className="cart-buttons">
            <Link to="/">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {cart.map((product, index) => (
            <div className="cart-item" key={index}>

              <img
                src={product.image}
                alt={product.title}
                width="120"
              />

              <div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>

            </div>
          ))}

          <div className="cart-buttons">

            <button
              className="clear-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <Link to="/">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>

          </div>

        </>
      )}

    </div>
  );
}

export default Cart;