import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Developer Desk Kit',
    price: 999,
    category: 'Bundle',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Minimalist Code T-Shirt',
    price: 599,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Matte Black Coffee Mug',
    price: 349,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800',
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">New Arrivals</h1>
          <p className="mt-2 text-gray-500 text-sm">Upgrade your workspace with our premium gear.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-xl">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{product.category}</p>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{product.name}</h3>
              </div>
              <p className="text-lg font-black text-gray-900">₹{product.price}</p>
            </div>
            <button className="mt-4 w-full bg-gray-900 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-600 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}