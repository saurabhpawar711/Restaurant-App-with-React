import "./App.css";
import CartProvider from "./cart-context/CartProvider";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <CartProvider>
      <Header />
      <Home />
    </CartProvider>
  );
}

export default App;
