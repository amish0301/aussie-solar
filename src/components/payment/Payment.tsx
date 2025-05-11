"use client";

import Image from "next/image";
import visa from "../../../public/assets/img/Visa.png";
import mastercard from "../../../public/assets/img/master-card.png";
import paypal from "../../../public/assets/img/pay-pal.png";

const Payment = () => {
  const handlePayment = () => {
    window.open("https://buy.stripe.com/test_cN2bLb4hogSU3dK9AC", "_blank");
  };

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Complete Your Payment Securely</h2>

      <div className="row justify-content-center">
        {/* Left Card - Stripe Payment */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <div className="card-body text-center">
              {/* Title */}
              <h4 className="card-title fw-bold text-primary mb-3">
                Secure Online Payment
              </h4>

              {/* Payment Description */}
              <p className="text-muted">
                Make payments securely using your debit/credit card.
                All transactions are encrypted and processed through a secure
                gateway to ensure your financial information remains protected.
              </p>

              {/* Payment Icons */}
              <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                <Image src={visa} alt="Visa" width="50" />
                <Image src={mastercard} alt="Mastercard" width="50" />
                <Image src={paypal} alt="PayPal" width="50" />
              </div>

              {/* Pay Button */}
              <button
                className="btn btn-primary w-100 py-2 fw-semibold"
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>

              {/* Security Badge */}
              <p className="text-success mt-3 fw-bold">
                🔒 100% Secure & Encrypted Transactions
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
                  <strong>Account Name:</strong> Aussie Electrical Solar Energy Pty Ltd
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
