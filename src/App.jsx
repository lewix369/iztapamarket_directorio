import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/HomePage.jsx";
import CategoriesPage from "@/pages/CategoriesPage.jsx";
import CategoryBusinessesPage from "@/pages/CategoryBusinessesPage.jsx";
import PlansPage from "@/pages/PlansPage.jsx";
import BusinessDetailPage from "@/pages/BusinessDetailsPage.jsx";
import ContactPage from "@/pages/ContactPage.jsx"; // 👈 Esta es la línea nueva

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/categorias/:slug" element={<CategoryBusinessesPage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="/negocios/:id" element={<BusinessDetailPage />} />
        <Route path="/contacto" element={<ContactPage />} />{" "}
        {/* 👈 También esta */}
      </Routes>
    </Router>
  );
}

export default App;
