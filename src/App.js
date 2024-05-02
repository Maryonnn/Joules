import { Routes,Route } from "react-router-dom";
import Auth from "./Login/Auth.js";
import Register from "./Login/Register.js";
import Home from "./Components/Home.js";
import Menu from "./Components/Menu.js";
import About from "./Components/About.js";
import Reviews from "./Components/Reviews.js";
import Cart from "./Components/Cart.js";
import MyPurchases from "./Components/MyPurchases.js";
import Food from "./Components/Food.js";
import Drinks from "./Components/Drinks.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchases" element={<MyPurchases />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </>
  );
}

export default App;
