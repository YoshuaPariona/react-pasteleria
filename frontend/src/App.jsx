// src/App.jsx
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { ProductsPage } from "./pages/shop/ProductsPage";
import { ShopLayout } from "./layout/ShopLayout";
import { OrderHistoryPage } from "./pages/shop/OrderHistoryPage";
import { CartPage } from "./pages/shop/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<HomePage />} />
        <Route path="productos" element={<ProductsPage />} />
        <Route path="carrito" element={<CartPage />} />
        <Route path="historial-pedidos" element={<OrderHistoryPage />} />
        <Route path="iniciar-sesion" element={<LoginPage />} />
        <Route path="registro" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
