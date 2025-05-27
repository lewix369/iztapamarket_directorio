import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const useBusinessesLoader = (category) => {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const slug =
      typeof category === 'string'
        ? category.trim().toLowerCase()
        : (category.slug || '').trim().toLowerCase();

    if (!slug) return;

    const fetchBusinesses = async () => {
      setIsLoading(true);
      setError(null);

      console.log("📥 Hook recibido con categoría:", category);
      console.log("🔍 Slug limpio enviado al hook:", slug);

      try {
        console.log("🧾 Consulta enviada a Supabase:");
        console.log({
          tabla: 'negocios',
          filtro: 'slug_categoria',
          valor: slug
        });

        const normalizedSlug = slug.replace(/\s+/g, '-').toLowerCase();

        const { data, error } = await supabase
          .from('negocios')
          .select('id, nombre, descripcion, categoria, slug_categoria, direccion, whatsapp, imagen_url, logo_url, web, hours, gallery_images, menu, telefono, plan_type, video_embed_url, mapa_embed_url, created_at, instagram, facebook, services')
          .eq('slug_categoria', normalizedSlug);

        console.log("📊 Resultado crudo de Supabase:", data);

        if (error) throw error;

        if (!data || data.length === 0) {
          console.warn("⚠️ No se encontraron datos en Supabase. Verifica si el slug coincide exactamente con lo almacenado:", slug);
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
  }, [category]);

  return { businesses, isLoading, error };
};
