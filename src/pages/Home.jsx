import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="home-container">

      <h1 className="welcome-title">
        Welcome to Luxe Avenue Stores
      </h1>

      <h2 className="featured-title">
        Featured Designs
      </h2>

      <p className="featured-text">
        Browse our latest collection.
      </p>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;