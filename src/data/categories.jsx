import { Utensils, SprayCan, Home, Shirt, Dog, Stethoscope, GraduationCap, Package, UtensilsCrossed } from 'lucide-react';

export const categories = [
  { name: 'Alimentos', slug: 'alimentos', icon: Utensils, description: "Restaurantes, fondas, antojos y más.", dbName: 'Alimentos' },
  { name: 'Belleza y Cuidado Personal', slug: 'belleza', icon: SprayCan, description: "Estéticas, barberías, spas, uñas.", dbName: 'Belleza' },
  { name: 'Servicios del Hogar', slug: 'servicios', icon: Home, description: "Plomería, electricidad, limpieza y más.", dbName: 'Servicios' },
  { name: 'Moda y Tiendas', slug: 'moda', icon: Shirt, description: "Ropa, accesorios, calzado y regalos.", dbName: 'Moda' },
  { name: 'Mascotas', slug: 'mascotas', icon: Dog, description: "Veterinarias, tiendas de mascotas, estética canina.", dbName: 'Mascotas' },
  { name: 'Salud', slug: 'salud', icon: Stethoscope, description: "Consultorios, farmacias, dentistas, terapeutas.", dbName: 'Salud' },
  { name: 'Educación', slug: 'educacion', icon: GraduationCap, description: "Clases, talleres, regularización, escuelas.", dbName: 'Educación' },
  { name: 'Otros', slug: 'otros', icon: Package, description: "Otros servicios y productos diversos.", dbName: 'Otros' },
  { name: 'Tiendas y Abarrotes', slug: 'tiendas', icon: Package, description: "Tiendas de abarrotes, productos básicos y misceláneas.", dbName: 'Abarrotes' },
  { name: 'Autos y Talleres', slug: 'autos', icon: Package, description: "Mecánica, refacciones y talleres automotrices.", dbName: 'Autos' },
  { name: 'Tecnología', slug: 'tecnologia', icon: Package, description: "Reparación de celulares, gadgets y venta de accesorios.", dbName: 'Tecnología' },
];

export const defaultCategoryIcon = UtensilsCrossed;