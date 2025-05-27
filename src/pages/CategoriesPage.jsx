import React from 'react';
import { categories } from '@/data/categories.jsx';
import CategoryCard from '@/components/ui/CategoryCard.jsx';
import SeoManager from '@/components/SeoManager.jsx';

const CategoriesPage = () => {
  return (
    <SeoManager
      title="Categorías de Negocios en Iztapalapa"
      description="Explora todas las categorías disponibles en IztapaMarket: alimentos, belleza, servicios, tecnología y más."
      canonicalUrl="/categorias"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Explora por Categoría</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </SeoManager>
  );
};

export default CategoriesPage;
