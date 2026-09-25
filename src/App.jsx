import { useEffect, useState } from 'react';

export default function App() {
  const [refId, setRefId] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Capture the Affiliate ID from the URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      setRefId(ref);
      // Optional: Save to localStorage so it persists even if they navigate away
      localStorage.setItem('affiliate_ref', ref);
    } else {
      setRefId(localStorage.getItem('affiliate_ref'));
    }
  }, []);

  // 2. Handle the Checkout Process
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: 'Developer Desk Kit',
          price: 999,
          affiliate_ref: refId,
          // You would collect customer details via a form here
          customer: { name: 'Test User', phone: '9876543210' } 
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Order placed! Redirecting to payment...');
        // Insert PhonePe/Cashfree checkout redirect here
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0 bg-gray-200 w-full md:w-96 flex items-center justify-center p-8">
            {/* Replace with your actual product image from the shop */}
            <span className="text-gray-500 text-lg font-semibold">Bundle Image Placeholder</span>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              NewarPrime Exclusives
            </div>
            <h1 className="mt-1 text-2xl font-bold text-gray-900">
              The Developer Desk Kit
            </h1>
            <p className="mt-2 text-gray-600">
              Everything you need for your workspace. Includes a premium heavy-cotton T-shirt, a matte black coffee mug, and an extended desk mousepad.
            </p>
            
            <div className="mt-6 flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900">₹999</span>
              <span className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                Free Shipping
              </span>
            </div>

            {refId && (
              <div className="mt-4 text-xs text-gray-500 bg-gray-100 p-2 rounded">
                Affiliate tracking active: <strong>{refId}</strong>
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-70"
            >
              {loading ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}