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
} from "lucide-react";

export const categories = [
  {
    name: "Alimentos y Bebidas",
    slug: "alimentos-y-bebidas",
    icon: Utensils,
    description: "Restaurantes, fondas, antojos y más.",
  },
  {
    name: "Belleza y Cuidado Personal",
    slug: "belleza-y-cuidado-personal",
    icon: SprayCan,
    description: "Estéticas, barberías, spas, uñas.",
  },
  {
    name: "Servicios del Hogar",
    slug: "servicios-del-hogar",
    icon: Home,
    description: "Plomería, electricidad, limpieza y más.",
  },
  {
    name: "Moda y Tiendas",
    slug: "moda-y-tiendas",
    icon: Shirt,
    description: "Ropa, accesorios, calzado y regalos.",
  },
  {
    name: "Mascotas",
    slug: "mascotas",
    icon: Dog,
    description: "Veterinarias, tiendas de mascotas.",
  },
  {
    name: "Salud y Bienestar",
    slug: "salud-y-bienestar",
    icon: Stethoscope,
    description: "Consultorios, clínicas, remedios y más.",
  },
  {
    name: "Educación",
    slug: "educacion",
    icon: GraduationCap,
    description: "Escuelas, cursos, talleres y más.",
  },
  {
    name: "Tecnología y Servicios",
    slug: "tecnologia-y-servicios",
    icon: MonitorCheck,
    description: "Reparación, soporte, tiendas tech.",
  },
  {
    name: "Paquetería y Otros",
    slug: "paqueteria-y-otros",
    icon: Package,
    description: "Mensajería, copias, papelerías y más.",
  },
];
