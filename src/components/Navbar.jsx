import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <Menu className="h-6 w-6 text-gray-500 md:hidden cursor-pointer" />
            <Link to="/" className="text-xl font-black text-gray-900 tracking-tighter">
              NEWAR<span className="text-indigo-600">STORE</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">All Products</Link>
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">T-Shirts</Link>
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">Accessories</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <Search className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-900" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="h-5 w-5 text-gray-500 hover:text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}