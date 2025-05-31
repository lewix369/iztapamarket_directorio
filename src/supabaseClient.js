import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesPage({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <Link to={`/categorias/${category.slug}`} key={category.slug}>
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default CategoriesPage;