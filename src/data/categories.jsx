import {
  Utensils,
  SprayCan,
  Home,
  Shirt,
  Dog,
  Stethoscope,
  GraduationCap,
  Package,
  UtensilsCrossed,
} from "lucide-react";

export const categories = [
  {
    name: "Alimentos y Bebidas",
    slug: "alimentos-y-bebidas",
    dbName: "Alimentos y Bebidas",
    icon: Utensils,
    description: "Restaurantes, fondas, antojos y más.",
  },
  {
    name: "Belleza y Cuidado Personal",
    slug: "belleza-y-cuidado-personal",
    dbName: "Belleza y Cuidado Personal",
    icon: SprayCan,
    description: "Estéticas, barberías, spas, uñas.",
  },
  {
    name: "Servicios del Hogar",
    slug: "servicios-del-hogar",
    dbName: "Servicios del Hogar",
    icon: Home,
    description: "Plomería, electricidad, limpieza y más.",
  },
  {
    name: "Moda y Tiendas",
    slug: "moda-y-tiendas",
    dbName: "Moda y Tiendas",
    icon: Shirt,
    description: "Ropa, accesorios, calzado y regalos.",
  },
  {
    name: "Mascotas y Tiendas",
    slug: "mascotas-y-tiendas",
    dbName: "Mascotas y Tiendas",
    icon: Dog,
    description: "Veterinarias, tiendas de mascotas, estética canina.",
  },
  {
    name: "Salud y Bienestar",
    slug: "salud-y-bienestar",
    dbName: "Salud y Bienestar",
    icon: Stethoscope,
    description: "Consultorios, farmacias, dentistas, terapeutas.",
  },
  {
    name: "Educación y Escuelas",
    slug: "educacion-y-escuelas",
    dbName: "Educación y escuelas",
    icon: GraduationCap,
    description: "Clases, talleres, regularización, escuelas.",
  },
  {
    name: "Otros Negocios",
    slug: "otros-negocios",
    dbName: "Otros Negocios",
    icon: Package,
    description: "Otros servicios y productos diversos.",
  },
  {
    name: "Tiendas y Abarrotes",
    slug: "tiendas-y-abarrotes",
    dbName: "Tiendas y Abarrotes",
    icon: Package,
    description: "Tiendas de abarrotes, productos básicos y misceláneas.",
  },
  {
    name: "Autos y Talleres",
    slug: "autos-y-talleres",
    dbName: "Autos y Talleres",
    icon: Package,
    description: "Mecánica, refacciones y talleres automotrices.",
  },
  {
    name: "Tecnología y Tiendas",
    slug: "tecnologia-y-tiendas",
    dbName: "Tecnología",
    icon: Package,
    description: "Reparación de celulares, gadgets y venta de accesorios.",
  },
];

export const defaultCategoryIcon = UtensilsCrossed;
