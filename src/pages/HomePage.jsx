import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ArrowRight,
  Star,
  MessageCircle,
  Send,
  ShoppingBag,
  DollarSign,
  HelpCircle,
} from "lucide-react";
import { categories } from "@/data/categories.jsx";
import { testimonialsData } from "@/data/businesses.jsx";
import BusinessCard from "@/components/BusinessCard.jsx";
import TestimonialCard from "@/components/TestimonialCard.jsx";
import CategoryCard from "@/components/CategoryCard.jsx";
import { motion } from "framer-motion";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [negociosPorCategoria, setNegociosPorCategoria] = useState({});
  const [featuredBusinesses, setFeaturedBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const { data, error } = await supabase.from("negocios").select("*");
      if (error) {
        console.error("Error al cargar negocios:", error);
        return;
      }

      const agrupados = {};
      data.forEach((negocio) => {
        const categoria = negocio.categoria;
        if (!agrupados[categoria]) agrupados[categoria] = [];
        agrupados[categoria].push(negocio);
      });

      setNegociosPorCategoria(agrupados);
    };

    const fetchFeaturedBusinesses = async () => {
      const { data, error } = await supabase
        .from("negocios")
        .select("*")
        .eq("is_featured", true);

      if (error) {
        console.error("Error al cargar negocios destacados:", error);
        return;
      }

      setFeaturedBusinesses(data);
    };

    fetchBusinesses();
    fetchFeaturedBusinesses();
  }, []);

  const iztapaMarketHeroLogoUrl =
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/726a303c-0921-4d09-936a-1d5c7a669090/360461f31659ff0a75c4e5891d625b0a.png";
  const officialWhatsAppNumber = "525647547221";
  const advertiseMessage = "Hola, quiero anunciar mi negocio en IztapaMarket.";

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${searchTerm}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 md:space-y-20"
    >
      {/* Sección principal */}
      <section className="text-center py-16 md:py-24 rounded-xl bg-background">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col items-center"
        >
          <img
            alt="IztapaMarket Logo Principal - Directorio de Negocios en Iztapalapa"
            className="mx-auto h-36 sm:h-44 md:h-52 lg:h-60 w-auto mb-8"
            src={iztapaMarketHeroLogoUrl}
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary mb-4 px-2 text-center">
            Impulsa tu negocio local en Iztapalapa
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl text-center px-2">
            Anúnciate desde $99 MXN y llega a más clientes con IztapaMarket, el
            directorio digital de tu colonia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center px-2">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-lg sm:text-xl px-8 py-3 rounded-full shadow-lg font-bold w-full sm:w-auto"
            >
              <a
                href={`https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent(
                  advertiseMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="mr-3 h-5 w-5 sm:h-6 sm:w-6" /> ¡Anunciar mi
                negocio!
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg sm:text-xl px-8 py-3 rounded-full shadow-sm font-bold w-full sm:w-auto"
            >
              <Link to="/planes">
                <DollarSign className="mr-3 h-5 w-5 sm:h-6 sm:w-6" /> Ver Planes
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Sección de búsqueda */}
      <section className="py-12 md:py-16 bg-muted/50 rounded-xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center px-4">
            Encuentra lo que necesitas en Iztapalapa
          </h2>
          <form
            onSubmit={handleSearch}
            className="max-w-xl w-full mx-auto flex gap-2 px-4"
          >
            <Input
              type="text"
              placeholder="Buscar negocios, servicios, productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" size="lg">
              <Search className="mr-2 h-5 w-5" /> Buscar
            </Button>
          </form>
        </motion.div>
      </section>

      {/* Categorías */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-10 text-center">
          Explora por Categoría en Iztapalapa
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.slice(0, 8).map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4, duration: 0.4 }}
            >
              <Link
                to={`/categorias/${category.slug
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <CategoryCard
                  category={category}
                  negocios={negociosPorCategoria[category.dbName] || []}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-base sm:text-lg"
          >
            <Link to="/categorias">
              <ShoppingBag className="mr-2 h-5 w-5" /> Ver negocios por
              categoría <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Destacados desde Supabase */}
      <section className="py-12 md:py-16 bg-primary/5 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-10 text-center">
          <Star className="inline-block text-yellow-400 mr-2 h-8 w-8" />
          Negocios Destacados en Iztapalapa
        </h2>
        {featuredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredBusinesses.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index + 0.1, duration: 0.5 }}
              >
                <BusinessCard business={business} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Próximamente más negocios destacados. ¡Vuelve pronto!
          </p>
        )}
      </section>

      {/* Testimonios */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-10 text-center">
          <MessageCircle className="inline-block text-primary mr-2 h-8 w-8" />
          Lo que dicen de IztapaMarket
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index + 0.6, duration: 0.4 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="py-12 md:py-16 bg-muted/50 rounded-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 px-4">
          ¿Listo para Empezar o Tienes Preguntas?
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl mx-auto px-4">
          Conecta con nosotros para más información o para anunciar tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl px-8 py-3 rounded-full shadow-lg font-bold w-full sm:w-auto"
          >
            <Link to="/contacto">
              <HelpCircle className="mr-3 h-5 w-5 sm:h-6 sm:w-6" /> Contacto y
              Soporte
            </Link>
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
