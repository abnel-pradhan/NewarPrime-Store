import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// This component silently catches the ?ref=ID parameter on any route
function AffiliateTracker() {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      localStorage.setItem('affiliate_ref', ref);
      console.log('Affiliate locked:', ref);
    }
  }, [searchParams]);
  return null;
}

export default function App() {
  return (
    <Router>
      <AffiliateTracker />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* We will build these next: */}
            {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}