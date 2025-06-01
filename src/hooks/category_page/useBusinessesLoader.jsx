import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

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

    const cleanedSlug = slug_categoria?.toString().trim().toLowerCase();
    if (!cleanedSlug) return;

    const validSlugs = [
      "alimentos-y-bebidas",
      "belleza-y-cuidado-personal",
      "servicios-del-hogar",
      "moda-y-tiendas",
      "mascotas-y-tiendas",
      "salud-y-bienestar",
      "educacion-y-escuelas",
      "otros-negocios",
      "tiendas-y-abarrotes",
      "autos-y-talleres",
      "tecnologia-y-tiendas",
    ];
    if (!validSlugs.includes(cleanedSlug)) {
      console.warn("⚠️ Slug inválido:", cleanedSlug);
      setError("Slug de categoría inválido");
      setBusinesses([]);
      setIsLoading(false);
      return;
    }

    const fetchBusinesses = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log("🔎 Buscando negocios con slug_categoria:", cleanedSlug);

        const { data, error } = await supabase
          .from("negocios")
          .select(
            "id, nombre, descripcion, categoria, slug_categoria, direccion, whatsapp, imagen_url, logo_url, web, hours, gallery_images, menu, telefono, plan_type, video_embed_url, mapa_embed_url, created_at, instagram, facebook, services"
          )
          .eq("slug_categoria", cleanedSlug.toLowerCase()); // ✅ AQUÍ ES DONDE ESTABA EL ERROR

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
