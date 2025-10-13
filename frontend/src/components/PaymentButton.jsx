import useRazorpay from "react-razorpay";

export default function PaymentButton() {
  // 1. The useRazorpay hook loads the script and doesn't return anything to be stored in a variable.
  // useRazorpay();

  // 2. In Vite, environment variables MUST be prefixed with VITE_
  const RAZORPAY_KEY_ID = import.meta.env.RAZORPAY_ID;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  console.log(BACKEND_URL)
  console.log(RAZORPAY_KEY_ID)

  const handlePayment = async () => {
    // Check if the Razorpay script has loaded and is available on the window object
    // if (!window.Razorpay) {
    //   alert("Razorpay SDK not loaded. Are you online?");
    //   return;
    // }

    // try {
    //   // Create the order on your backend
    //   const response = await fetch(`${BACKEND_URL}/api/payment/create-order`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ amount: 500 }), // Amount is in the smallest currency unit (e.g., 500 paisa = ₹5)
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to create order on the server.");
    //   }

    //   const order = await response.json();

    //   // Configure the payment options
    //   const options = {
    //     key: RAZORPAY_KEY_ID,
    //     amount: order.amount,
    //     currency: order.currency,
    //     name: "Your Company Name",
    //     description: "Test Transaction",
    //     order_id: order.id,
    //     handler: async (response) => {
    //       // Verify the payment on your backend
    //       try {
    //         const verificationResponse = await fetch(`${BACKEND_URL}/api/payment/verify`, {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({
    //             razorpay_order_id: response.razorpay_order_id,
    //             razorpay_payment_id: response.razorpay_payment_id,
    //             razorpay_signature: response.razorpay_signature,
    //           }),
    //         });
            
    //         const result = await verificationResponse.json();
    //         if (result.success) {
    //             alert("Payment successful!");
    //         } else {
    //             alert("Payment verification failed. Please contact support.");
    //         }
    //       } catch (err) {
    //         alert("Payment verification failed: " + err.message);
    //       }
    //     },
    //     prefill: {
    //       name: "John Doe",
    //       email: "john.doe@example.com",
    //       contact: "9999999999",
    //     },
    //     theme: {
    //       color: "#3399cc",
    //     },
    //   };

    //   // 3. The Razorpay constructor is on the `window` object
    //   const rzpay = new window.Razorpay(options);

    //   // 4. The .open() method does not take any arguments
    //   rzpay.open();

    // } catch (err) {
    //   alert("Error: " + err.message);
    // }
    alert("this is razor")
  };

  return <button onClick={handlePayment}>Pay with Razorpay</button>;
}