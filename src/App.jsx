import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoriesView from "@/pages/CategoriesView";
import CategoryBusinessesPage from "@/pages/CategoryBusinessesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/categorias" element={<CategoriesView />} />
        <Route path="/categorias/:slug" element={<CategoryBusinessesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
