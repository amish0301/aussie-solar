"use client";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import logo from "../../../public/assets/img/logo.png";
import Image from "next/image";

const Payment = () => {
  // const amt = 50; // user can be enter
  // if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  //   throw new Error("Stripe public key is not set");
  // }
  // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Kangaroo Solar - Secure Payment</h2>

      <div className="row justify-content-center">
        {/* Left Card - Stripe Payment */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <CheckoutForm />
              <p className="text-muted text-center mt-2">
                You will be redirected to a secure Stripe payment page.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card - Company Bank Account Info */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-center">Company Bank Account</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Bank Name:</strong> Australian National Bank
                </li>
                <li className="list-group-item">
                  <strong>Account Name:</strong> Kangaroo Solar Pty Ltd
                </li>
                <li className="list-group-item">
                  <strong>BSB:</strong> 123-456
                </li>
                <li className="list-group-item">
                  <strong>Account Number:</strong> 987654321
                </li>
                <li className="list-group-item">
                  <strong>SWIFT Code:</strong> ANZBAU3M
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
