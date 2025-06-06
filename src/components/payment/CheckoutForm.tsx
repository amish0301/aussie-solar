import { useState } from "react";
// import axios from "axios";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png";

const StripeRedirect = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`http:localhost:3000/api/payment?amount=${amount}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    console.log('response', response)

    const res = await response.json();

    if (res.url) {
      window.location.href = res.url; // Redirect to Stripe Checkout
    }

    setAmount("");
  };

  return (
    <div className="container text-center mt-4">
      <Image src={logo} alt="Company Logo" width="150" />
      <h3 className="mt-3">Aussie Electrical Solar Energy - Secure Payment</h3>

      <input
        type="number"
        className="form-control my-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount (AUD)"
      />

      <button className="btn btn-primary" onClick={(e) => handlePayment(e)}>
        Pay with Stripe
      </button>
    </div>
  );
};

export default StripeRedirect;
