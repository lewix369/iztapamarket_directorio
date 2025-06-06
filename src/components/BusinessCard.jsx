import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  MapPin,
  Clock,
  ExternalLink,
  ShoppingCart,
  MessageSquare,
  Youtube,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { categories as allCategories } from "@/data/categories.jsx";
import { Utensils as defaultCategoryIcon } from "lucide-react";

const BusinessCard = ({ business, className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!business || !business.id) {
    console.warn(
      "BusinessCard recibió datos de negocio incompletos o inválidos:",
      business
    );
    return null;
  }

  const {
    id,
    nombre,
    description,
    category,
    address,
    hours,
    images,
    logoUrl,
    whatsapp,
    menuItems,
    website,
    videoEmbedUrl,
    slug_categoria,
  } = business;

  let parsedMenuItems = [];
  let menuLink = null;

  try {
    if (typeof menuItems === "string") {
      if (menuItems.startsWith("http")) {
        menuLink = menuItems;
      } else {
        parsedMenuItems = JSON.parse(menuItems);
      }
    } else if (Array.isArray(menuItems)) {
      parsedMenuItems = menuItems;
    }
  } catch (error) {
    console.warn(`⚠️ Error al parsear el menú para ${nombre}:`, error);
    parsedMenuItems = [];
  }

  const categoryDetails = allCategories.find(
    (cat) => cat.slug === slug_categoria || cat.dbName === slug_categoria
  );
  const CategoryIconComponent = categoryDetails?.icon ?? defaultCategoryIcon;

  const categoryName = categoryDetails?.name || slug_categoria;

  const finalImageUrl =
    business.imagen_url && business.imagen_url.startsWith("http")
      ? business.imagen_url
      : images?.[0] && images[0].startsWith("http")
      ? images[0]
      : logoUrl && logoUrl.startsWith("http")
      ? logoUrl
      : `https://source.unsplash.com/random/600x400/?business,${encodeURIComponent(
          categoryName || "abstract"
        )}&cachebust=${id}`;

  const isValidYoutubeLink = (url) => {
    if (!url) return false;
    try {
      const parsedUrl = new URL(url);
      return (
        (parsedUrl.hostname === "www.youtube.com" &&
          parsedUrl.pathname === "/watch" &&
          parsedUrl.searchParams.has("v")) ||
        (parsedUrl.hostname === "youtu.be" && parsedUrl.pathname !== "")
      );
    } catch (e) {
      return false;
    }
  };
  const showVideoLink = isValidYoutubeLink(videoEmbedUrl);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`h-full ${className}`}
      >
        <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-border/20 bg-card text-card-foreground">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Link
              to={`/negocios/${id}`}
              aria-label={`Ver detalles de ${nombre}`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt={`Imagen de ${nombre}`}
                src={finalImageUrl}
              />
            </Link>
            {CategoryIconComponent && (
              <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-md">
                <CategoryIconComponent className="mr-1.5 h-4 w-4" />{" "}
                {categoryName}
              </div>
            )}
          </div>

          <CardContent className="p-5 flex flex-col flex-grow">
            <h3
              className="text-xl lg:text-2xl font-bold text-primary mb-2 truncate"
              title={nombre}
            >
              <Link to={`/negocios/${id}`} className="hover:underline">
                {nombre}
              </Link>
            </h3>

            {address && (
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <MapPin className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                <span className="truncate" title={address}>
                  {address}
                </span>
              </div>
            )}
            {hours && (
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Clock className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                <span className="truncate" title={hours}>
                  {hours}
                </span>
              </div>
            )}

            <p className="text-sm text-foreground/80 mb-4 line-clamp-3 flex-grow">
              {description ||
                "Este negocio aún no ha agregado una descripción."}
            </p>

            <div className="mt-auto space-y-2.5">
              <Button asChild variant="default" className="w-full">
                <Link to={`/negocios/${id}`}>
                  Conocer Más <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              {whatsapp && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-500 text-green-600"
                >
                  <a
                    href={`https://wa.me/${whatsapp.replace(
                      /\D/g,
                      ""
                    )}?text=Hola,%20vi%20tu%20negocio%20${encodeURIComponent(
                      nombre
                    )}%20en%20IztapaMarket%20y%20quisiera%20más%20información.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Pedir por
                    WhatsApp
                  </a>
                </Button>
              )}

              {menuLink && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-orange-500 text-orange-600"
                >
                  <a href={menuLink} target="_blank" rel="noopener noreferrer">
                    <ImageIcon className="mr-2 h-4 w-4" /> Ver Menú
                  </a>
                </Button>
              )}

              {parsedMenuItems && parsedMenuItems.length > 0 && (
                <Button
                  variant="outline"
                  className="w-full border-orange-500 text-orange-600"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Ver Menú
                </Button>
              )}

              {showVideoLink && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-red-500 text-red-600"
                >
                  <a
                    href={videoEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="mr-2 h-4 w-4" /> Ver Video
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {parsedMenuItems && parsedMenuItems.length > 0 && (
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Menú de {nombre}</DialogTitle>
              <DialogDescription>
                Descubre los platillos que {nombre} ofrece.
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-y-auto py-4 space-y-3 pr-2">
              {parsedMenuItems.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-muted/50 rounded-md border flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    {item.description && (
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <p className="font-semibold text-primary whitespace-nowrap">
                    {typeof item.price === "number"
                      ? `$${item.price.toFixed(2)}`
                      : item.price || "N/A"}
                  </p>
                </div>
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cerrar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default BusinessCard;
