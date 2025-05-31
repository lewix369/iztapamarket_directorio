import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { categories } from '@/data/categories.jsx';

const Negocios = () => {
  const { slug } = useParams();
  const [negocios, setNegocios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaNombre, setCategoriaNombre] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const categoriaEncontrada = categories.find(
    (c) =>
      encodeURIComponent(c.slug?.toLowerCase()) === slug?.toLowerCase() ||
      encodeURIComponent(c.dbName?.toLowerCase()) === slug?.toLowerCase()
  );

  useEffect(() => {
    if (!categoriaEncontrada) {
      setLoading(false);
      setNegocios([]);
      return;
    }

    setCategoriaNombre(categoriaEncontrada.name);

    const fetchNegocios = async () => {
      const { data, error } = await supabase
        .from('negocios')
        .select('*')
        .eq('slug_categoria', categoriaEncontrada.dbName);

      if (error) {
        console.error('Error al obtener negocios:', error);
        setNegocios([]);
      } else {
        setNegocios(
          data.filter((n) =>
            n.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            n.direccion?.toLowerCase().includes(busqueda.toLowerCase()) ||
            n.descripcion?.toLowerCase().includes(busqueda.toLowerCase())
          )
        );
      }
      setLoading(false);
    };

    fetchNegocios();
  }, [slug, busqueda]);

  if (!categoriaEncontrada) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Error: Slug de categoría inválido</h1>
        <p className="text-gray-600">No se encontraron negocios en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-4">
        <a href="/categorias" className="text-blue-600 hover:underline">← Volver a categorías</a>
      </div>
      <h1 className="text-2xl font-bold mb-4">Negocios de {categoriaNombre}</h1>
      <p className="text-gray-600 mb-4">Resultados encontrados: {negocios.length}</p>

      {loading ? (
        <p className="text-gray-600">Cargando negocios...</p>
      ) : negocios.length === 0 ? (
        <p className="text-gray-600">No se encontraron negocios en esta categoría.</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Buscar negocio..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="mb-4 w-full p-2 border rounded"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {negocios.map((n) => (
              <div key={n.id} className="border p-4 rounded shadow bg-white space-y-2">
                <h2 className="text-xl font-semibold text-blue-800">{n.nombre}</h2>
                <p className="text-sm text-gray-600">{n.categoria}</p>
                <p className="text-sm">{n.direccion}</p>
                <p className="text-sm">📞 {n.telefono}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Negocios;