// api/order.js

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { product, price, affiliate_ref, customer } = req.body;

    // 1. Validation
    if (!product || !price || !customer) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 2. Database Insertion (Pseudo-code)
    // Insert order into your PostgreSQL/MongoDB database here.
    console.log(`[DB] Creating order for ${customer.name}. Total: ₹${price}`);
    
    // 3. Affiliate Logic
    if (affiliate_ref) {
      // Look up the affiliate in your NewarPrime database
      // Create a PENDING commission entry for them (e.g., ₹100)
      console.log(`[AFFILIATE] Pending commission of ₹100 created for user: ${affiliate_ref}`);
    }

    // 4. Payment Gateway Logic
    // Here you would call the PhonePe or Cashfree API to generate a payment session URL
    const mockPaymentUrl = "https://your-payment-gateway.com/checkout/session_123";

    // 5. Respond to Frontend
    return res.status(200).json({ 
      success: true, 
      message: 'Order initialized',
      payment_url: mockPaymentUrl,
      order_id: 'NP_ORD_998877' 
    });

  } catch (error) {
    console.error('Order creation failed:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}