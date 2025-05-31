import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

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

    const slugMap = {
      alimentos: 'alimentos-y-bebidas',
      mascotas: 'mascotas-y-tiendas',
      educacion: 'educacion-y-escuelas',
      belleza: 'belleza-y-cuidado-personal',
      hogar: 'servicios-del-hogar',
      moda: 'moda-y-tiendas',
      salud: 'salud-y-bienestar',
      tecnologia: 'tecnologia-y-servicios',
      transporte: 'transporte-y-logistica',
      entretenimiento: 'entretenimiento-y-tiempo-libre'
    };

    const realSlug = slugMap[cleanedSlug] || cleanedSlug;

    const fetchBusinesses = async () => {
      setIsLoading(true);
      setError(null);

      console.log("📥 Hook recibido con categoría:", slug_categoria);
      console.log("🔍 Slug limpio enviado al hook:", cleanedSlug);

      try {
        console.log("🧾 Consulta enviada a Supabase:");
        console.log({
          tabla: 'negocios',
          filtro: 'slug_categoria',
          valor: realSlug
        });

        const { data, error } = await supabase
          .from('negocios')
          .select('id, nombre, descripcion, categoria, slug_categoria, direccion, whatsapp, imagen_url, logo_url, web, hours, gallery_images, menu, telefono, plan_type, video_embed_url, mapa_embed_url, created_at, instagram, facebook, services')
          .eq('slug_categoria', realSlug);

        console.log("📊 Resultado crudo de Supabase:", data);

        if (error) throw error;

        if (!data || data.length === 0) {
          console.warn("⚠️ No se encontraron datos en Supabase. Verifica si el slug coincide exactamente con lo almacenado:", realSlug);
        }

        setBusinesses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('❌ Error fetching businesses:', err);
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
