"use client"
import useGlobalContext from "@/hooks/use-context";
import React from "react";
const MobileSearch = () => {
  const { openSearchBox, toggleSearchBar } = useGlobalContext();
  const handleform = (e: { preventDefault: () => void; }) =>{
    e.preventDefault()
  }
  return (
    <>
      <div className={`mobile-search ${openSearchBox ? "slide" : ""}`}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <form onSubmit={handleform}>
                <label>What are you lookking for?</label>
                <div className="d-flex search-bar">
                  <input type="text" placeholder="Type Here to Search" />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div onClick={toggleSearchBar} className="search-cross-btn">
                <i className="fa fa-times"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSearch;
