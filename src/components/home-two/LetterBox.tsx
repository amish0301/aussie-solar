"use client"
import useGlobalContext from "@/hooks/use-context";
import React from "react";

const LetterBox = () => {
  const { openLetterBox, setOpenLetterBox } = useGlobalContext();
  return (
    <>
      <div className={`latterbox ${openLetterBox === true ? "slide" : ""}`}>
        <form className="request-quote-form">
          <h3>Request a Quote</h3>
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="text" name="Email Address" placeholder="Email Address" />
          <input type="text" name="Phone No" placeholder="Phone No" />
          <input type="text" name="Address" placeholder="Address" />
          <textarea placeholder="Message"></textarea>
          <button className="button">Send Message</button>
        </form>
        <div
          onClick={() => setOpenLetterBox(!openLetterBox)}
          className="latterbox-cross-btn"
        >
          <i className="fa fa-times"></i>
        </div>
      </div>
    </>
  );
};

export default LetterBox;
