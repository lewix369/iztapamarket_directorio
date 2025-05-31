import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "@/data/categories.jsx";
import { supabase } from "@/lib/supabaseClient";

const CategoryBusinessesPage = () => {
  const { slug } = useParams();
  if (!slug) return null;
  const [negocios, setNegocios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaNombre, setCategoriaNombre] = useState("");

  const categoriaEncontrada = categories.find(
    (c) => c.slug?.toLowerCase().trim() === slug?.toLowerCase().trim()
  );

  useEffect(() => {
    if (!categoriaEncontrada) {
      setLoading(false);
      setNegocios([]);
      return;
    }

    setCategoriaNombre(categoriaEncontrada.name);

    const fetchNegocios = async () => {
      const { data, error } = await supabase
        .from("negocios")
        .select("*")
        .eq("slug_categoria", categoriaEncontrada.slug);

      if (error) {
        console.error("Error al obtener negocios:", error);
        setNegocios([]);
      } else {
        setNegocios(data);
      }
      setLoading(false);
    };

    fetchNegocios();
  }, [slug]);

  if (!categoriaEncontrada) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-red-600">
          Error: Slug de categoría inválido
        </h1>
        <p className="text-gray-600">
          No se encontraron negocios en esta categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Negocios en la categoría: {categoriaNombre}
      </h1>

      {loading ? (
        <p className="text-gray-600">Cargando negocios...</p>
      ) : negocios.length === 0 ? (
        <p className="text-gray-600">
          No se encontraron negocios en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {negocios.map((n) => (
            <div
              key={n.id}
              className="border p-4 rounded shadow bg-white space-y-2"
            >
              <h2 className="text-xl font-semibold text-blue-800">
                {n.nombre}
              </h2>
              <p className="text-sm text-gray-600">{n.categoria}</p>
              <p className="text-sm">{n.direccion}</p>
              <p className="text-sm">📞 {n.telefono}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBusinessesPage;
