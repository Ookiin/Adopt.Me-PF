import { useState } from "react";
import React from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import StripeCheckout from 'react-stripe-checkout';

const MySwal = withReactContent(Swal);

export default function Stripes() {
  
    const publishableKey =
  'pk_test_51M9wCWDFa6jLCwa92xpEczTJ20PPSzL6XTQmi8OZan1aNkHFGAv9A0AX7OJIw8wJf1Ru59PdJrRpGnnBvopiFK5T000lEuF7rB';
  const [product, setProduct] = useState({
    name: 'Headphone',
    price: 5,
  });
  const priceForStripe = product.price * 100;

  function handleSuccess() {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
  };
  function handleFailure() {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const payNow = async token => {
    try {
      console.log("voy a hacer la petision")
      const response = await axios({
        url: 'http://localhost:3001/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container">
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow}
      />
    </div>
  );
}
