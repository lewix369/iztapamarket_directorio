import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { useBusinessesLoader } from "@/hooks/category_page/useBusinessesLoader";
import BusinessCard from "@/components/BusinessCard";

const CategoryBusinessesPage = () => {
  const { slug } = useParams();
  console.log("🧩 Slug recibido en CategoryBusinessesPage:", slug);

  if (!slug) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          No se especificó ninguna categoría
        </h1>
        <p className="mt-2">Accede desde una categoría válida, por favor.</p>
      </div>
    );
  }

  const slugString = String(slug).toLowerCase();
  const category = categories.find(
    (cat) => cat.slug.toLowerCase() === slugString
  );

  if (!category) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Slug de categoría inválido
        </h1>
        <p className="mt-2">
          Verifica que la URL coincida con una categoría válida.
        </p>
      </div>
    );
  }

  const { businesses, isLoading, error } = useBusinessesLoader(
    category.slug.toLowerCase()
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>

      {isLoading ? (
        <p className="text-center">Cargando negocios...</p>
      ) : error ? (
        <p className="text-center text-red-500">
          Error al cargar negocios: {error}
        </p>
      ) : businesses.length === 0 ? (
        <p className="text-center">
          No hay negocios registrados en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {businesses.map((negocio) => (
            <BusinessCard key={negocio.id} business={negocio} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBusinessesPage;
