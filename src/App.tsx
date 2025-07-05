import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import ProductDetail from './components/ProductDetail';
// import ProductList from './pages/ProductPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          {/* <Route path="products" element={<ProductList />} /> --- ver.01 bị lỗi dùng để tham khảo  */}
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;