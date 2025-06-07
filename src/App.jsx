import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoriesPage from "@/pages/CategoriesPage";
import CategoryBusinessesPage from "@/pages/CategoryBusinessesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/categorias/:slug" element={<CategoryBusinessesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
