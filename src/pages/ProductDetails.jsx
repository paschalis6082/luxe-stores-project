import { useEffect, useState, useContext} from "react";
import { useParams,Link } from "react-router-dom";
import { getProduct } from "../services/api";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {

        async function loadProduct() {

            const data = await getProduct(id);

            setProduct(data);

        }

        loadProduct();

    }, [id]);

    if (!product) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="product-details">

            <Link to="/" className="back-link">
             ←
            </Link>

            <img
                src={product.image}
                alt={product.title}
                className="details-image"
            />

            <div className="details">

                <h1>{product.title}</h1>

                <h2>${product.price}</h2>

                <p>{product.description}</p>

             <button className="add-cart-btn"
             onClick={() => {
             addToCart(product);
             toast.success("Item added to cart successfully!");
             }}>
             Add to Cart
             </button>
            </div>

        </div>

    );

}

export default ProductDetails;