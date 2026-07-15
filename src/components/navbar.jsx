import { Link } from "react-router-dom";

function Navbar() {
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
          <Link>Products</Link>
        </li>

         <li>
          <Link>contact us</Link>
        </li>

        <li>
          <Link to="/cart">🛒 Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;