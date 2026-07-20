import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <nav>

      <Link to="/" className="logo">
        Luxe Avenue Stores
      </Link>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">Products</Link>
        </li>

        <li>
          <Link to="/">Contact Us</Link>
        </li>

        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart

            {cart.length > 0 && (
              <span className="cart-count">
                {cart.length}
              </span>
            )}
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;