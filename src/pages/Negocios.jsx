import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const Negocios = () => {
  const [negocios, setNegocios] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNegocios = async () => {
      const { data, error } = await supabase
        .from('negocios')
        .select('*')
        .order('nombre', { ascending: true })

      if (error) {
        console.error('Error al obtener negocios:', error)
        setLoading(false);
      } else {
        setNegocios(data)
        setLoading(false);
      }
    }

    fetchNegocios()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Directorio de Negocios</h1>

      {loading ? (
        <p className="text-gray-600">Cargando negocios...</p>
      ) : negocios.length === 0 ? (
        <p className="text-gray-600">No se encontraron negocios registrados.</p>
      ) : (
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
      )}
    </div>
  )
}

export default Negocios