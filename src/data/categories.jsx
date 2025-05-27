import { Utensils, SprayCan, Home, Shirt, Dog, Stethoscope, GraduationCap, Package, UtensilsCrossed } from 'lucide-react';

export const categories = [
  {
    name: 'Alimentos y Bebidas',
    slug: 'alimentos-y-bebidas',
    icon: Utensils,
    description: "Restaurantes, fondas, antojos y más.",
    dbName: 'alimentos-y-bebidas'
  },
  {
    name: 'Belleza y Cuidado Personal',
    slug: 'belleza-y-cuidado-personal',
    icon: SprayCan,
    description: "Estéticas, barberías, spas, uñas.",
    dbName: 'belleza-y-cuidado-personal'
  },
  {
    name: 'Servicios del Hogar',
    slug: 'servicios-del-hogar',
    icon: Home,
    description: "Plomería, electricidad, limpieza y más.",
    dbName: 'servicios-del-hogar'
  },
  {
    name: 'Moda y Tiendas',
    slug: 'moda-y-tiendas',
    icon: Shirt,
    description: "Ropa, accesorios, calzado y regalos.",
    dbName: 'moda-y-tiendas'
  },
  {
    name: 'Mascotas',
    slug: 'mascotas',
    icon: Dog,
    description: "Veterinarias, tiendas de mascotas, estética canina.",
    dbName: 'mascotas'
  },
  {
    name: 'Salud y Bienestar',
    slug: 'salud-y-bienestar',
    icon: Stethoscope,
    description: "Consultorios, farmacias, dentistas, terapeutas.",
    dbName: 'salud-y-bienestar'
  },
  {
    name: 'Educación',
    slug: 'educacion',
    icon: GraduationCap,
    description: "Clases, talleres, regularización, escuelas.",
    dbName: 'educacion'
  },
  {
    name: 'Otros',
    slug: 'otros',
    icon: Package,
    description: "Otros servicios y productos diversos.",
    dbName: 'otros'
  },
  {
    name: 'Tiendas y Abarrotes',
    slug: 'tiendas-y-abarrotes',
    icon: Package,
    description: "Tiendas de abarrotes, productos básicos y misceláneas.",
    dbName: 'tiendas-y-abarrotes'
  },
  {
    name: 'Autos y Talleres',
    slug: 'autos-y-talleres',
    icon: Package,
    description: "Mecánica, refacciones y talleres automotrices.",
    dbName: 'autos-y-talleres'
  },
  {
    name: 'Tecnología',
    slug: 'tecnologia',
    icon: Package,
    description: "Reparación de celulares, gadgets y venta de accesorios.",
    dbName: 'tecnologia'
  }
];

export const defaultCategoryIcon = UtensilsCrossed;