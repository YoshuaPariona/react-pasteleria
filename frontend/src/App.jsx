// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
import { ShopLayout } from './layout/ShopLayout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/shop/ProductsPage';
import { OrderHistoryPage } from './pages/shop/OrderHistoryPage';
import { AboutPage } from './pages/AboutPage';
import { CartSidebar } from './components/ui/CartSidebar';


function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeModal = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ShopLayout
              openLoginModal={openLoginModal}
              openRegisterModal={openRegisterModal}
              openCart={openCart}
              closeCart={closeCart}
              isCartOpen={isCartOpen} // Pasamos el estado del carrito
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="productos" element={<ProductsPage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="historial-pedidos" element={<OrderHistoryPage />} />
        </Route>
      </Routes>

      <LoginModal isOpen={isLoginModalOpen} closeModal={closeModal} />
      <RegisterModal isOpen={isRegisterModalOpen} closeModal={closeModal} />
      <CartSidebar 
        isOpen={isCartOpen} 
        closeCart={closeCart}
        openLoginModal={openLoginModal}
      />
    </>
  );
}

export default App;
