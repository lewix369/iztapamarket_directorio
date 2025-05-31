import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories.jsx";
import CategoryCard from "@/components/CategoryCard";
import SeoManager from "@/components/SeoManager.jsx";

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
              <Link to={`/categorias/${category.slug}`} key={category.slug}>
                <CategoryCard category={category} />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h2 className="text-xl font-semibold text-destructive mb-2">
                No hay categorías disponibles
              </h2>
              <p className="text-muted-foreground mb-4">
                Por favor vuelve más tarde o revisa si hay un error de conexión.
              </p>
              <Link
                to="/"
                className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
              >
                Ir al inicio
              </Link>
            </div>
          )}
        </div>
      </div>
    </SeoManager>
  );
};

export default CategoriesPage;
