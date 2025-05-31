import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/categories.jsx';

const CategoriasPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categorías disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/categorias/${cat.slug?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
            className="block border p-4 rounded shadow hover:bg-gray-50 transition"
          >
            <h2 className="text-lg font-semibold">{cat.name}</h2>
            <p className="text-sm text-gray-600">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriasPage;
