// src/App.jsx
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/shop/ProductsPage";
import { HomePage } from "./pages/shop/HomePage";
import { ShopLayout } from "./layout/ShopLayout";
import { AboutPage } from "./pages/shop/AboutPage";
import { CartPage } from "./pages/shop/CartPage";
import { OrderHistoryPage } from "./pages/shop/OrderHistoryPage";
import { LoginPage } from "./pages/shop/LoginPage";
import { RegisterPage } from "./pages/shop/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/historial-pedidos" element={<OrderHistoryPage />} />
          <Route path="/iniciar-sesion" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
