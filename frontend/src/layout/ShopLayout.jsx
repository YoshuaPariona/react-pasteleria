// src/layout/ShopLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FloatingCartButton from "../components/ui/FloatingCartButton";

export const ShopLayout = () => {
  const location = useLocation();

  const showCartButton = ['/', '/productos'].includes(location.pathname);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCartButton show={showCartButton} />
    </div>
  );
};
