import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/categories.jsx';
import CategoryCard from '@/components/CategoryCard';
import SeoManager from '@/components/SeoManager.jsx';

const CategoriesPage = () => {
  console.log("Categorías cargadas:", categories);
  return (
    <SeoManager
      title="Categorías de Negocios en Iztapalapa"
      description="Explora todas las categorías disponibles en IztapaMarket: alimentos, belleza, servicios, tecnología y más."
      canonicalUrl="/categorias"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Explora por Categoría</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <Link
                to={`/categorias/${encodeURIComponent(category.slug)}`}
                key={category.slug}
              >
                <CategoryCard category={category} />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-muted-foreground">
              No hay categorías disponibles en este momento.
            </p>
          )}
        </div>
      </div>
    </SeoManager>
  );
};

export default CategoriesPage;
