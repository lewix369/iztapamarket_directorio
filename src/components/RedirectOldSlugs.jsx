import { useParams, Navigate } from 'react-router-dom';

const RedirectOldSlugs = () => {
  const { slug } = useParams();

  const slugMap = {
    'alimentos': 'alimentos-y-bebidas',
    'belleza': 'belleza-y-cuidado-personal',
    'servicios': 'servicios-del-hogar',
    'moda': 'moda-y-tiendas',
    'salud': 'salud-y-bienestar',
    'tiendas': 'tiendas-y-abarrotes',
    'autos': 'autos-y-talleres',
    'educacion': 'educacion',
    'otros': 'otros',
    'tecnologia': 'tecnologia'
  };

  if (slugMap[slug]) {
    return <Navigate to={`/categorias/${slugMap[slug]}`} replace />;
  }

  return null;
  return <Navigate to="/categorias" replace />;
};

export default RedirectOldSlugs;