import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";

function App(){
  return(
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App