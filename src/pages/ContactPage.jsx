import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const PlanesPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-secondary mb-4">Planes de Publicidad</h1>
        <p className="text-lg text-foreground/80">
          Elige el plan ideal para que tu negocio destaque en IztapaMarket.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-2 border-primary/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary">Plan Básico</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1">
              <li>Nombre, dirección y teléfono.</li>
              <li>Aparición básica en el directorio.</li>
              <li>Sin multimedia ni SEO personalizado.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary">Plan Destacado</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1">
              <li>Incluye logo, banner y galería.</li>
              <li>Optimización SEO local.</li>
              <li>Botón de WhatsApp y redes sociales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary">Plan Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1">
              <li>Contenido generado con IA.</li>
              <li>Video promocional y ficha avanzada.</li>
              <li>Mejor posicionamiento y campañas.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default PlanesPage;
