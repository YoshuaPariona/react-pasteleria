// src/layout/ShopLayout.jsx
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ShopLayout = ({ openLoginModal, openRegisterModal, openCart, closeCart, isCartOpen }) => {
  return (
    <>
      <Header
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
        openCart={openCart}
        closeCart={closeCart}
        isCartOpen={isCartOpen} // Recibimos el estado aquí
      />
      <main className="-bg-conic-0pt-[120px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
