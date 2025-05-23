import { useState, useEffect, useCallback } from 'react';
import { useToast } from "@/components/ui/use-toast.jsx";
import { fetchBusinessesByCategory, formatBusinessData } from '@/services/businessService.jsx';

export const useBusinessesLoader = (slugCategoria) => {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const loadBusinesses = useCallback(async () => {
    if (!slugCategoria) {
      setIsLoading(false);
      setError("Slug de categoría no definido.");
      console.error("Error en useBusinessesLoader: Slug de categoría no definido.", slugCategoria);
      return;
    }

    setIsLoading(true);
    setError(null);

    console.log(`Fetching businesses for slug_categoria: '${slugCategoria}'`);

    try {
      const rawData = await fetchBusinessesByCategory(slugCategoria.toLowerCase());
      console.log(`Raw data for ${slugCategoria}:`, rawData);

      const formattedData = rawData.map(b => formatBusinessData(b));
      setBusinesses(formattedData);

      if (formattedData.length === 0) {
        console.log(`No businesses found for slug_categoria: ${slugCategoria}`);
      }

    } catch (fetchError) {
      setError(fetchError.message);
      toast({
        title: "Error de Carga",
        description: `No se pudieron cargar los negocios de ${slugCategoria}. Detalles: ${fetchError.message}`,
        variant: "destructive",
      });
      console.error(`Error loading businesses for ${slugCategoria}:`, fetchError);
    } finally {
      setIsLoading(false);
    }
  }, [slugCategoria, toast]);

  useEffect(() => {
    loadBusinesses();
  }, [loadBusinesses]);

  return { businesses, isLoading, error, loadBusinesses };
};
