import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { categories } from "@/data/categories.jsx";

export const useBusinessesLoader = (slug_categoria) => {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug_categoria) {
      console.warn("⛔ No hay slug, no se ejecuta la consulta");
      setBusinesses([]);
      setIsLoading(false);
      return;
    }

    const cleanedSlug = slug_categoria?.toString().trim();
    if (!cleanedSlug) return;

    const matchedCategory = categories.find((cat) => cat.slug === cleanedSlug);

    if (!matchedCategory) {
      console.warn("🚫 Slug de categoría inválido:", cleanedSlug);
      setBusinesses([]);
      setIsLoading(false);
      return;
    }

    const fetchBusinesses = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(
          "🔎 Buscando negocios con slug_categoria:",
          matchedCategory.slug
        );

        const { data, error } = await supabase
          .from("negocios")
          .select(
            "id, nombre, descripcion, categoria, slug_categoria, direccion, whatsapp, imagen_url, logo_url, web, hours, gallery_images, menu, telefono, plan_type, video_embed_url, mapa_embed_url, created_at, instagram, facebook, services"
          )
          .eq("slug_categoria", matchedCategory.slug);

        if (error) throw error;

        setBusinesses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("❌ Error al obtener negocios:", err);
        setError(err.message);
        setBusinesses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusinesses();
  }, [slug_categoria]);

  return { businesses, isLoading, error };
};
