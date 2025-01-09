
import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const PaymentForm = () => {
  const [product, setProduct] = useState({
    name: 'Test Product',
    price: 10.99,
    description: 'This is a test product',
  });

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
    axios.post('/api/checkout', {
      token,
      product,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Product: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      <StripeCheckout
        token={onToken}
        stripeKey="YOUR_STRIPE_PUBLISHABLE_KEY"
        name="Test Product"
        description="This is a test product"
        amount={product.price * 100}
      />
      {stripeToken && (
        <div>
          <h2>Payment successful!</h2>
          <p>Stripe token: {('link unavailable')}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
