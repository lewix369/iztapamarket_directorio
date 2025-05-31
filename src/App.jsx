import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage.jsx';
import CategoriasPage from '@/pages/CategoriasPage.jsx';
import NegociosPorCategoria from '@/pages/NegociosPorCategoria.jsx';
import BusinessDetailsPage from '@/pages/BusinessDetailsPage.jsx';
import NotFound from '@/pages/NotFound.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/categorias/:slug" element={<NegociosPorCategoria />} />
        <Route path="/negocio/:id" element={<BusinessDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
