import { Link } from "react-router-dom";
import {useCart} from "../hooks/useCart"

const Navbar = () => {
    const {cartItems} = useCart()

    return(
        <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
            <Link to={`/`} className="hover:text-gray-300">Home</Link>
            <Link to={`/shop`} className="hover:text-gray-300">Shop</Link>
            <span className="font-semibold">Cart: {cartItems.length}</span>
        </nav>
    )
}

export default Navbar
