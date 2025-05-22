import { Route, Routes } from "react-router-dom"
import { ProductsPage } from "./pages/shop/ProductsPage"
import { HomePage } from "./pages/shop/HomePage"
import { ShopLayout } from "./layout/ShopLayout"
import { AboutPage } from "./pages/shop/AboutPage"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
