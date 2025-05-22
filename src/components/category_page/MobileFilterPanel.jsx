
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button.jsx";
import { X } from 'lucide-react';
import FilterSidebar from '@/components/category_page/FilterSidebar.jsx';

const MobileFilterPanel = ({
  showFilters,
  setShowFilters,
  sidebarProps
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setShowFilters(false)}
        aria-hidden="true"
      />
      <motion.div
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-background shadow-xl z-50 
                   lg:static lg:block lg:h-auto lg:w-1/4 lg:max-w-none lg:bg-transparent lg:shadow-none
                   transform ${showFilters ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        role="dialog"
        aria-modal={showFilters}
        aria-labelledby="filter-panel-title"
      >
        <div className="flex justify-between items-center p-4 border-b border-border lg:hidden">
          <h3 id="filter-panel-title" className="text-lg font-semibold text-primary">Filtrar</h3>
          <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)} aria-label="Cerrar filtros">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <FilterSidebar {...sidebarProps} />
      </motion.div>
    </>
  );
};

export default MobileFilterPanel;
