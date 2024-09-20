import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {useCart} from "../hooks/useCart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const {addToCart} = useCart();

    useEffect(()=>{
        const fetchProduct = async() => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data)
        };

        fetchProduct();
    },[])

    return(
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    )
}

export default Shop
