import {
  Utensils,
  SprayCan,
  Home,
  Shirt,
  Dog,
  Stethoscope,
  GraduationCap,
  Package,
  MonitorCheck,
  Car,
  ShoppingBag,
} from "lucide-react";

const slugify = (text) =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\n|\r/g, "");

export const categories = [
  {
    name: "Alimentos y Bebidas",
    slug: slugify("Alimentos y Bebidas"),
    icon: Utensils,
    description: "Restaurantes, fondas, antojos y más.",
    dbName: "alimentos",
  },
  {
    name: "Belleza y Cuidado Personal",
    slug: slugify("Belleza y Cuidado Personal"),
    icon: SprayCan,
    description: "Estéticas, barberías, spas, uñas.",
    dbName: "belleza",
  },
  {
    name: "Servicios del Hogar",
    slug: slugify("Servicios del Hogar"),
    icon: Home,
    description: "Plomería, electricidad, limpieza y más.",
    dbName: "servicios",
  },
  {
    name: "Moda y Tiendas",
    slug: slugify("Moda y Tiendas"),
    icon: Shirt,
    description: "Ropa, accesorios, calzado y regalos.",
    dbName: "moda",
  },
  {
    name: "Mascotas y Tiendas",
    slug: slugify("Mascotas y Tiendas"),
    icon: Dog,
    description: "Veterinarias, tiendas de mascotas.",
    dbName: "mascotas",
  },
  {
    name: "Salud y Bienestar",
    slug: slugify("Salud y Bienestar"),
    icon: Stethoscope,
    description: "Consultorios, clínicas, remedios y más.",
    dbName: "salud",
  },
  {
    name: "Educación y Escuelas",
    slug: slugify("Educación y Escuelas"),
    icon: GraduationCap,
    description: "Escuelas, cursos, talleres y más.",
    dbName: "educacion",
  },
  {
    name: "Tecnología y Servicios",
    slug: slugify("Tecnología y Servicios"),
    icon: MonitorCheck,
    description: "Reparación, soporte, tiendas tech.",
    dbName: "tecnologia",
  },
  {
    name: "Paquetería y Otros",
    slug: slugify("Paquetería y Otros"),
    icon: Package,
    description: "Mensajería, copias, papelerías y más.",
    dbName: "paqueteria",
  },
  {
    name: "Tiendas y Abarrotes",
    slug: slugify("Tiendas y Abarrotes"),
    icon: ShoppingBag,
    description: "Abarrotes, tienditas y productos básicos.",
    dbName: "abarrotes",
  },
  {
    name: "Otros Negocios",
    slug: slugify("Otros Negocios"),
    icon: Package,
    description: "Negocios varios y otros giros.",
    dbName: "otros",
  },
  {
    name: "Autos y Talleres",
    slug: slugify("Autos y Talleres"),
    icon: Car,
    description: "Mecánicos, refacciones y servicios automotrices.",
    dbName: "autos",
  },
];
