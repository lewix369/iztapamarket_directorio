import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { categories as allCategories, defaultCategoryIcon } from '@/data/categories.jsx';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button.jsx";

import CategoryHeader from '@/components/category_page/CategoryHeader.jsx';
import MobileFilterPanel from '@/components/category_page/MobileFilterPanel.jsx';
import CategoryResultsDisplay from '@/components/category_page/CategoryResultsDisplay.jsx';
import SeoManager from '@/components/SeoManager.jsx';
import { useBusinessesLoader } from '@/hooks/category_page/useBusinessesLoader.jsx';
import { useBusinessFilters } from '@/hooks/category_page/useBusinessFilters.jsx';

const CategoryBusinessesPage = () => {
  const { slug: rawSlug } = useParams();
  const slug = rawSlug?.toLowerCase().trim().replace(/\s+/g, '-');
  console.log("🔍 Slug capturado desde URL:", slug);
  console.log("🧹 Slug sanitizado:", slug);

  console.log("🧩 Categorías cargadas desde categories.jsx:", allCategories);
  const category = useMemo(() => {
    return allCategories.find(cat =>
      cat.slug.toLowerCase().trim().replace(/\s+/g, '-') === slug
    );
  }, [slug]);

  if (!allCategories || allCategories.length === 0 || !category) {
    console.warn(`❌ Slug inválido o categorías no cargadas: "${slug}". Redirigiendo a /categorias.`);
    return <Navigate to="/categorias" replace />;
  }

  const location = useLocation();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('name-asc'); 
  const [distanceFilter, setDistanceFilter] = useState(5); 
  const [showFilters, setShowFilters] = useState(false);


  console.log("📦 Slug recibido desde URL:", slug);
  if (category) {
    console.log("🔁 dbName enviado al hook:", category.dbName);
  }
  // Usar category.slug como filtro correcto para el hook
  const { businesses, isLoading, error, loadBusinesses } = useBusinessesLoader(category?.slug || slug);
  console.log("✅ slug para consulta:", slug);
  console.log("📊 Datos recibidos del hook:", businesses);
  console.log("❌ Error desde el hook:", error);
  const filteredAndSortedBusinesses = useBusinessFilters(businesses, searchTerm, sortOrder);
  
  useEffect(() => {
    if (category) {
      console.log("Category context updated:", category);
    }
    console.log("Businesses loaded:", businesses?.length || 0, "IsLoading:", isLoading);
  }, [category, businesses, isLoading]);

  const seoTitle = `${category.name} en Iztapalapa | IztapaMarket`;
  const seoDescription = category.description || `Encuentra los mejores negocios de ${category.name} en Iztapalapa. Directorio local actualizado.`;
  const canonicalUrl = `${import.meta.env.VITE_APP_BASE_URL || 'https://iztapamarket.com'}${location.pathname}`;

  const sidebarProps = {
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
    distanceFilter,
    setDistanceFilter,
    categoryName: category.name,
  };

  return (
    <SeoManager title={seoTitle} description={seoDescription} canonicalUrl={canonicalUrl}>
      <div className="container mx-auto px-4 py-8">
        <CategoryHeader category={category} businessCount={filteredAndSortedBusinesses.length} />
        
        <div className="lg:flex lg:space-x-8 mt-8">
          <MobileFilterPanel
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            sidebarProps={sidebarProps}
          />

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <h2 className="text-xl font-semibold text-secondary">Resultados ({filteredAndSortedBusinesses.length})</h2>
              <Button variant="outline" onClick={() => setShowFilters(true)} className="lg:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" /> Filtrar
              </Button>
            </div>

            <CategoryResultsDisplay
              isLoading={isLoading}
              error={error}
              businesses={filteredAndSortedBusinesses}
              categoryName={category.name}
              searchTerm={searchTerm}
              loadBusinesses={loadBusinesses}
            />
          </div>
        </div>
      </div>
    </SeoManager>
  );
};

export default CategoryBusinessesPage;
