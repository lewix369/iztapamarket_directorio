import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-secondary mb-4">
          Contacto y Soporte
        </h1>
        <p className="text-lg text-foreground/80">
          ¿Tienes dudas o deseas anunciar tu negocio? ¡Estamos para ayudarte!
        </p>
      </header>

      <div className="max-w-xl mx-auto text-center space-y-6 text-lg">
        <p>
          Puedes contactarnos vía WhatsApp al número:
          <a
            href="https://wa.me/525647547221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline ml-1"
          >
            +52 56 4754 7221
          </a>
        </p>
        <p>
          O envíanos un correo a:
          <a
            href="mailto:contacto@iztapamarket.com"
            className="text-primary underline ml-1"
          >
            contacto@iztapamarket.com
          </a>
        </p>
        <p>
          También puedes seguirnos en nuestras redes sociales para conocer
          novedades, promociones y negocios destacados en Iztapalapa.
        </p>
      </div>
    </motion.div>
  );
};

export default ContactPage;
