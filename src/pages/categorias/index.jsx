import { categories } from '@/data/categories';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function CategoriasIndex() {
  return (
    <Layout title="Categorías de Negocios">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-10">Explora las Categorías</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categorias/${category.slug}`}
                className="border rounded-xl p-5 shadow hover:shadow-lg transition duration-200 group bg-white hover:bg-orange-50"
              >
                <div className="flex items-center gap-4">
                  <category.icon className="w-8 h-8 text-orange-500 group-hover:text-orange-600" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                      {category.name}
                    </h2>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No hay categorías disponibles en este momento.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}