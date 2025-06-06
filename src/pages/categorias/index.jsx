import React from "react";
import { categories } from "@/data/categories.jsx";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoManager from "@/components/SeoManager.jsx";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
  return (
    <SeoManager
      title="Categorías de Negocios en Iztapalapa"
      description="Explora todas las categorías disponibles en IztapaMarket: alimentos, belleza, servicios, tecnología y más."
      canonicalUrl="/categorias"
    >
      <Layout title="Categorías de Negocios">
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-10">
            Explora las Categorías
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/categorias/${category.slug}`}
                  className="border rounded-xl p-5 shadow hover:shadow-lg transition duration-200 group bg-white hover:bg-orange-50"
                >
                  <div className="flex items-center gap-4">
                    {React.createElement(category.icon, {
                      className:
                        "w-8 h-8 text-orange-500 group-hover:text-orange-600",
                    })}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                        {category.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No hay categorías disponibles en este momento.
              </p>
            )}
          </div>
        </section>
      </Layout>
    </SeoManager>
  );
}
