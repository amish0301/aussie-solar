"use client";

const Payment = () => {
  const handlePayment = async () => {
    window.open("https://buy.stripe.com/test_cN2bLb4hogSU3dK9AC", "_blank");
  };

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Kangaroo Solar - Secure Payment</h2>

      <div className="row justify-content-center">
        {/* Left Card - Stripe Payment */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body text-center">
              {/* Title */}
              <h4 className="card-title fw-bold">Secure Online Payment</h4>

              {/* Payment Description */}
              <p className="text-muted">
                Pay securely using your debit or credit card. You will be
                redirected to Stripe's secure payment page.
              </p>

              {/* Card Icons (Using Online URLs) */}
              <div className="mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                  className="mx-1"
                  width="60"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                  alt="Mastercard"
                  className="mx-1"
                  width="60"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="mx-1"
                  width="60"
                />
              </div>

              {/* Pay Button */}
              <button
                className="btn btn-primary w-25 py-2"
                onClick={handlePayment}
              >
                Pay
              </button>

              {/* Security Note */}
              <p className="text-success mt-3 fw-bold">
                🔒 100% Secure Payment via Stripe
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

