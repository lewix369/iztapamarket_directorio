import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "@/data/categories";
import { useBusinessesLoader } from "@/hooks/category_page/useBusinessesLoader";
import BusinessCard from "@/components/BusinessCard";

const slugify = (text) =>
  decodeURIComponent(text || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\n|\r/g, "");

const CategoryBusinessesPage = () => {
  const { slug } = useParams();
  console.log("📦 Slug crudo desde URL:", slug);
  const navigate = useNavigate();

  useEffect(() => {
    const decodedSlug = slugify(decodeURIComponent(slug));

    const exists = categories.some((cat) => slugify(cat.slug) === decodedSlug);

    if (!exists) {
      console.warn("❌ Slug no encontrado en categorías, redirigiendo...");
      navigate("/categorias", { replace: true });
    }
  }, [slug, navigate]);

  console.log("👉 Slug recibido:", JSON.stringify(slug));

  const slugString = slugify(slug);
  const category = categories.find((cat) => slugify(cat.slug) === slugString);
  console.log("✅ Categoría activa:", category);

  const fallbackCategory = {
    name: "Negocios",
    description: "Explora los negocios disponibles.",
    slug: slugString,
  };

  const activeCategory = category || fallbackCategory;

  const { businesses, isLoading, error } = useBusinessesLoader(slugString);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{activeCategory.name}</h1>
      <p className="text-gray-600 mb-8">{activeCategory.description}</p>

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
