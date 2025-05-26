import { Utensils, SprayCan, Home, Shirt, Dog, Stethoscope, GraduationCap, Package, UtensilsCrossed } from 'lucide-react';

export const categories = [
  { name: 'Alimentos y Bebidas', slug: 'alimentos-y-bebidas', icon: Utensils, description: "Restaurantes, fondas, antojos y más.", dbName: 'Alimentos y Bebidas' },
  { name: 'Belleza y Cuidado Personal', slug: 'belleza-y-cuidado-personal', icon: SprayCan, description: "Estéticas, barberías, spas, uñas.", dbName: 'Belleza y Cuidado Personal' },
  { name: 'Servicios del Hogar', slug: 'servicios-del-hogar', icon: Home, description: "Plomería, electricidad, limpieza y más.", dbName: 'Servicios del Hogar' },
  { name: 'Moda y Tiendas', slug: 'moda-y-tiendas', icon: Shirt, description: "Ropa, accesorios, calzado y regalos.", dbName: 'Moda y Tiendas' },
  { name: 'Mascotas', slug: 'mascotas', icon: Dog, description: "Veterinarias, tiendas de mascotas, estética canina.", dbName: 'Mascotas' },
  { name: 'Salud y Bienestar', slug: 'salud-y-bienestar', icon: Stethoscope, description: "Consultorios, farmacias, dentistas, terapeutas.", dbName: 'Salud y Bienestar' },
  { name: 'Educación', slug: 'educacion', icon: GraduationCap, description: "Clases, talleres, regularización, escuelas.", dbName: 'Educación' },
  { name: 'Otros', slug: 'otros', icon: Package, description: "Otros servicios y productos diversos.", dbName: 'Otros' },
  { name: 'Tiendas y Abarrotes', slug: 'tiendas-y-abarrotes', icon: Package, description: "Tiendas de abarrotes, productos básicos y misceláneas.", dbName: 'Tiendas y Abarrotes' },
  { name: 'Autos y Talleres', slug: 'autos-y-talleres', icon: Package, description: "Mecánica, refacciones y talleres automotrices.", dbName: 'Autos y Talleres' },
  { name: 'Tecnología', slug: 'tecnologia', icon: Package, description: "Reparación de celulares, gadgets y venta de accesorios.", dbName: 'Tecnología' },
];

export const defaultCategoryIcon = UtensilsCrossed;