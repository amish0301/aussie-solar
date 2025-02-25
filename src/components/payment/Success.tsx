"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Next.js 13+ API
import axios from "axios";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get("payment_intent");
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    if (paymentIntent) {
      axios
        .get(`/api/payment/success?payment_intent=${paymentIntent}`)
        .then((res) => {
          setAmount(res.data.amount / 100); // Convert cents to dollars
        })
        .catch((err) => {
          console.error("Error fetching payment details:", err);
        });
    }
  }, [paymentIntent]);

  return (
    <div className="container text-center py-5">
      <h2>🎉 Payment Successful!</h2>
      {amount !== null && <p>✅ Amount Paid: <strong>A$ {amount}</strong></p>}
      <a href="/" className="btn btn-primary mt-3">Go Home</a>
    </div>
  );
};

export default SuccessPage;
