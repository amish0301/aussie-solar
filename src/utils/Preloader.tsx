import React from "react";
const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <div>
          <div className="multi-spinner-container">
            <div className="multi-spinner">
              <div className="multi-spinner">
                <div className="multi-spinner">
                  <div className="multi-spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
