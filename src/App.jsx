import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import PlanesPage from '@/pages/PlanesPage';
import CategoriasPage from '@/pages/CategoriasPage';
import CategoryBusinessesPage from '@/pages/CategoryBusinessesPage';
import ContactoPage from '@/pages/ContactoPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planes" element={<PlanesPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/categoria/:categorySlug" element={<CategoryBusinessesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
