import { Utensils, SprayCan, Home, Shirt, Dog, Stethoscope, GraduationCap, Package, UtensilsCrossed } from 'lucide-react';

export const categories = [
  {
    name: 'Alimentos y Bebidas',
    slug: 'alimentos-y-bebidas',
    dbName: 'alimentos-y-bebidas',
    icon: Utensils,
    description: "Restaurantes, fondas, antojos y más."
  },
  {
    name: 'Belleza y Cuidado Personal',
    slug: 'belleza-y-cuidado-personal',
    dbName: 'belleza-y-cuidado-personal',
    icon: SprayCan,
    description: "Estéticas, barberías, spas, uñas."
  },
  {
    name: 'Servicios del Hogar',
    slug: 'servicios-del-hogar',
    dbName: 'servicios-del-hogar',
    icon: Home,
    description: "Plomería, electricidad, limpieza y más."
  },
  {
    name: 'Moda y Tiendas',
    slug: 'moda-y-tiendas',
    dbName: 'moda-y-tiendas',
    icon: Shirt,
    description: "Ropa, accesorios, calzado y regalos."
  },
  {
    name: 'Mascotas',
    slug: 'mascotas-y-tiendas',
    dbName: 'mascotas-y-tiendas',
    icon: Dog,
    description: "Veterinarias, tiendas de mascotas, estética canina."
  },
  {
    name: 'Salud y Bienestar',
    slug: 'salud-y-bienestar',
    dbName: 'salud-y-bienestar',
    icon: Stethoscope,
    description: "Consultorios, farmacias, dentistas, terapeutas."
  },
  {
    name: 'Educación',
    slug: 'educacion-y-escuelas',
    dbName: 'educacion-y-escuelas',
    icon: GraduationCap,
    description: "Clases, talleres, regularización, escuelas."
  },
  {
    name: 'Otros',
    slug: 'otros-y-servicios',
    dbName: 'otros-y-servicios',
    icon: Package,
    description: "Otros servicios y productos diversos."
  },
  {
    name: 'Tiendas y Abarrotes',
    slug: 'tiendas-y-abarrotes',
    dbName: 'tiendas-y-abarrotes',
    icon: Package,
    description: "Tiendas de abarrotes, productos básicos y misceláneas."
  },
  {
    name: 'Autos y Talleres',
    slug: 'autos-y-talleres',
    dbName: 'autos-y-talleres',
    icon: Package,
    description: "Mecánica, refacciones y talleres automotrices."
  },
  {
    name: 'Tecnología',
    slug: 'tecnologia',
    dbName: 'tecnologia',
    icon: Package,
    description: "Reparación de celulares, gadgets y venta de accesorios."
  }
];

export const defaultCategoryIcon = UtensilsCrossed;