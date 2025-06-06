
export const featuredBusinesses = [
  {
    id: '1',
    name: 'Taquería El Güero',
    logoUrl: '/placeholder-logo-1.png',
    promotion: '¡Tacos al pastor 2x1 los Miércoles!',
    category: 'Alimentos y Bebidas',
    whatsapp: '5215500000001',
    description: 'Los mejores tacos de la colonia. Sabor auténtico y tradicional.',
    address: 'Calle Falsa 123, Col. Esperanza',
    hours: 'L-D: 12pm - 11pm',
    images: ['/placeholder-tacos1.jpg', '/placeholder-tacos2.jpg'],
  },
  {
    id: '2',
    name: 'Estética Glamour',
    logoUrl: '/placeholder-logo-2.png',
    promotion: '10% de descuento en tu primer corte.',
    category: 'Belleza y Cuidado Personal',
    whatsapp: '5215500000002',
    description: 'Expertos en color y corte. Luce espectacular con nosotros.',
    address: 'Av. Siempre Viva 742, Col. Santa Cruz',
    hours: 'M-S: 10am - 7pm',
    images: ['/placeholder-estetica1.jpg', '/placeholder-estetica2.jpg'],
  },
  {
    id: '3',
    name: 'Reparaciones Don Pepe',
    logoUrl: '/placeholder-logo-3.png',
    promotion: '¡Presupuesto sin costo!',
    category: 'Servicios del Hogar',
    whatsapp: '5215500000003',
    description: 'Soluciones rápidas y eficientes para tu hogar. Plomería y electricidad.',
    address: 'Cerrada del Triunfo 45, Col. San Miguel',
    hours: 'L-V: 9am - 6pm',
    images: ['/placeholder-reparacion1.jpg'],
  },
];

export const testimonialsData = [
  {
    id: '1',
    quote: 'Gracias a IztapaMarket ahora mis vecinos me encuentran fácil. ¡Ya me llegaron 2 clientes esta semana!',
    author: 'Estética Lupita',
    businessType: 'Belleza y Cuidado Personal',
  },
  {
    id: '2',
    quote: 'Excelente plataforma para dar a conocer mi fondita. ¡Muy recomendable!',
    author: 'Cocina Doña Mary',
    businessType: 'Alimentos y Bebidas',
  },
  {
    id: '3',
    quote: 'Me encanta que sea un directorio local. Apoyemos lo nuestro.',
    author: 'Juan Pérez',
    businessType: 'Cliente Satisfecho',
  },
];

export const initialBusinesses = [
  ...featuredBusinesses,
  {
    id: '4',
    name: 'Moda Urbana Kids',
    logoUrl: '/placeholder-logo-4.png',
    description: 'Ropa y accesorios para niños y jóvenes con estilo.',
    category: 'Tiendas y Moda',
    address: 'Calle Principal 500, Col. Desarrollo Urbano Quetzalcoatl',
    hours: 'L-S: 11am - 8pm',
    whatsapp: '5215500000004',
    images: ['/placeholder-moda1.jpg', '/placeholder-moda2.jpg'],
    socialMedia: { facebook: '#', instagram: '#' }
  },
  {
    id: '5',
    name: 'Clínica Veterinaria Patitas Felices',
    logoUrl: '/placeholder-logo-5.png',
    description: 'Cuidado integral para tu mascota. Consultas, vacunas y estética canina.',
    category: 'Mascotas',
    address: 'Avenida Telecomunicaciones S/N, Col. Ejército Constitucionalista',
    hours: 'L-V: 9am - 7pm, S: 9am - 2pm',
    whatsapp: '5215500000005',
    images: ['/placeholder-vet1.jpg', '/placeholder-vet2.jpg', '/placeholder-vet3.jpg'],
  }
];
  