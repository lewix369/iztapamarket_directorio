import React from 'react';
import { Loader2, AlertTriangle, Search } from 'lucide-react';
import { Button } from "@/components/ui/button.jsx";
import { Link } from 'react-router-dom';
import BusinessList from '@/components/category_page/BusinessList.jsx';
import { motion } from 'framer-motion';

const CategoryResultsDisplay = ({
  isLoading,
  error,
  businesses,
  categoryName,
  searchTerm,
  loadBusinesses
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[300px] text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Cargando negocios de {categoryName}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[300px] bg-destructive/10 p-6 rounded-lg text-center"
      >
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <h3 className="text-xl font-semibold text-destructive mb-2">¡Ups! Algo salió mal</h3>
        <p className="text-destructive/80 mb-1">No se pudieron cargar los negocios.</p>
        <p className="text-sm text-destructive/70 mb-4">Detalle: {error.message || String(error)}</p>
        <Button onClick={loadBusinesses} className="mt-6">
          Intentar de Nuevo
        </Button>
      </motion.div>
    );
  }

  if (!Array.isArray(businesses)) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[300px] bg-yellow-100 text-yellow-800 p-6 rounded-lg text-center border border-dashed border-yellow-400"
      >
        <h3 className="text-xl font-semibold mb-2">Error de Formato</h3>
        <p>La estructura de datos recibida no es válida. Esperábamos una lista de negocios.</p>
      </motion.div>
    );
  }

  if (businesses.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[300px] bg-muted/20 p-6 rounded-lg text-center border border-dashed border-muted-foreground/30"
      >
        <Search className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold text-secondary mb-2">No se encontraron negocios</h3>
        <p className="text-muted-foreground max-w-md">
          {searchTerm
            ? `No hay negocios que coincidan con tu búsqueda "${searchTerm}" en la categoría ${categoryName}. Intenta con otros términos.`
            : `Parece que aún no hay negocios registrados en la categoría ${categoryName}. ¡Anímate a ser el primero o explora otras categorías!`}
        </p>
        <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/registrarse">Registra tu Negocio Aquí</Link>
        </Button>
        <Button asChild variant="outline" className="mt-3">
          <Link to="/categorias">Ver Todas las Categorías</Link>
        </Button>
      </motion.div>
    );
  }

  console.log("✅ Negocios recibidos para renderizar:", businesses);
  console.log("📊 Lista final de negocios recibida para renderizar:", businesses);
  return <BusinessList businesses={businesses} />;
};

export default CategoryResultsDisplay;
