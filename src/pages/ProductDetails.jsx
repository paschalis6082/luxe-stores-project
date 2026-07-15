import { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
// import { CartContext } from "../context/CartContext";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    // const { addToCart } = useContext(CartContext);

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

            <img
                src={product.image}
                alt={product.title}
                className="details-image"
            />

            <div className="details">

                <h1>{product.title}</h1>

                <h2>${product.price}</h2>

                <p>{product.description}</p>

               <button>Add to cart</button>

            </div>

        </div>

    );

}

export default ProductDetails;