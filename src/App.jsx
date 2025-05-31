import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage.jsx';
import CategoriesPage from '@/pages/CategoriesPage.jsx';
import CategoryBusinessesPage from '@/pages/CategoryBusinessesPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/categorias/:slug_categoria" element={<CategoryBusinessesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
