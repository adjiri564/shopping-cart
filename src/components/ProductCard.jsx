/* eslint-disable react/prop-types */
import { useState} from "react";

const ProductCard = ({product, addToCart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1)
    const handleDecrement = () => setQuantity(prev => (prev > 1? prev - 1 : 1))

    const handleAddCart = () => {
        addToCart(product, quantity); 
        setQuantity(1); // reset quantity after adding to cart
    }

    return(
        <>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow mb-4">
            <h3 className="text-lg font-semibold"> {product.title}</h3>
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <div className="container flex items-center mb-2">
                <div className="separate">
                    <button onClick={handleDecrement} className="bg-gray-300 text-gray-800 px-2 py-1 rounded">-</button>
                    <input type="number" value={quantity} readOnly className="mx-2 w-12 text-center" />
                    <button onClick={handleIncrement} className="bg-gray-300 text-gray-800 px-2 py-1 rounded">+
                    </button>
                </div>
                
                <button onClick={handleAddCart} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Add To Cart</button>
            </div>
            </div>
        </>
    )
}

export default ProductCard