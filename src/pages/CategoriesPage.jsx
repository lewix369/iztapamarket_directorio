import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import SeoManager from "@/components/SeoManager.jsx";

const CategoriesPage = () => {
  console.log("🟢 Vista CategoriesPage cargada");
  console.log("📦 Categorías disponibles:", categories);

  return (
    <SeoManager
      title="Categorías de Negocios en Iztapalapa"
      description="Explora todas las categorías disponibles en IztapaMarket: alimentos, belleza, servicios, tecnología y más."
      canonicalUrl="/categorias"
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">
          Categorías disponibles en IztapaMarket
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories && categories.length > 0 ? (
            categories.map((category) => {
              const cleanedSlug = category.slug
                ?.toString()
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/\n|\r/g, "");
              console.log(`🧭 Generando enlace para categoría: ${cleanedSlug}`);
              return (
                <CategoryCard
                  category={{ ...category, slug: cleanedSlug }}
                  key={cleanedSlug}
                  isFullPage={false}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                No hay categorías disponibles
              </h2>
              <p className="text-gray-500 mb-4">
                Por favor vuelve más tarde o revisa si hay un error de conexión.
              </p>
              <Link
                to="/"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
