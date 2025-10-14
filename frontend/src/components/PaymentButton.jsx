import { useRazorpay } from "react-razorpay";
import React from "react";

export default function PaymentButton() {
  // 1. Call the hook for its side-effect: loading the Razorpay script.
  // It does NOT return anything.
  useRazorpay();

  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_ID;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handlePayment = async () => {
    // 2. Check if the script has loaded and created the window.Razorpay object.
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Are you online?");
      return;
    }
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1 }), 
      });
      
      if (!response.ok) {
        throw new Error("Failed to create order on the server.");
      }
      
      const order = await response.json();
      
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Funds Catalyst",
        description: "Test Transaction",
        order_id: order.id,
        // callback_url: `${BACKEND_URL}/payment-success`,
        handler: async (response) => {
          console.log("razorpay response:", response);
          try {
            const verificationResponse = await fetch(`${BACKEND_URL}/api/payment/verify-payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
              
            const result = await verificationResponse.json();
            if (result.success) {
              alert("Payment successful!");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            alert("Payment verification failed: " + err.message);
          }
        },
        prefill: {
          name: "user",
          email: "user@gmail.com",
          contact: "9336274936",
        },
        theme: {
          color: "#3399cc",
        },
      };

      console.log("Razorpay options:", options);
      // 3. Create a new instance using the global window.Razorpay object.
      const rzpay = new window.Razorpay(options);
      rzpay.open();

    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return <button onClick={handlePayment}>Pay with Razorpay</button>;
}