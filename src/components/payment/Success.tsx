"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/session?session_id=${sessionId}`);
      setAmount(res?.data?.amount);
    };
    fetchData();
  }, [sessionId]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4 text-center"
        style={{ maxWidth: "400px" }}
      >
        <div className="text-success mb-3">
          <i
            className="bi bi-check-circle-fill"
            style={{ fontSize: "3rem" }}
          ></i>
        </div>
        <h2 className="text-dark">Payment Successful!</h2>
        {amount && (
          <p className="fw-bold text-muted">
            Amount Paid: <span className="text-success">A$ {amount / 100}</span>
          </p>
        )}
        <a href="/" className="btn btn-primary mt-3">
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
