import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

const CategoriesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/categorias/${category.slug}`}
            className="block p-4 border rounded shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <span>
                {React.createElement(category.icon, { className: "w-6 h-6" })}
              </span>
              <div>
                <h3 className="text-lg font-bold">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
