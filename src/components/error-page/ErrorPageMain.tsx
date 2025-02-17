import React from "react";
import bgImg from "../../../public/assets/img/404.jpg";
import Link from "next/link";
const ErrorPageMain = () => {
  return (
    <>
      <section
        className="error-section"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="error">
            <h2>
              4<span>0</span>4
            </h2>
            <h3>Sorry! The page can’t be found.</h3>
            <p>We {`Can't`} Seem to find the page {`you're`} looking for.</p>
            <form>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address..."
              />
              <button type="submit" className="error-button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <Link href="/" className="button">
              <span>Back To Home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPageMain;
