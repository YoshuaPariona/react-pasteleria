import { Route, Routes } from "react-router-dom"
import { ProductsPage } from "./pages/shop/ProductsPage"
import { HomePage } from "./pages/shop/HomePage"
import { ShopLayout } from "./layout/ShopLayout"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
