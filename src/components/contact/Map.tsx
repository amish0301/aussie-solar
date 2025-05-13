import React from "react";

const Map = () => {
  return (
    <>
      <div className="container gap no-top">
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.519738898674!2d151.08963787559906!3d-33.94718892321547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bc6237494ec3%3A0x9b7829db3e56e9e2!2s2%20Fripp%20Cres%2C%20Beverly%20Hills%20NSW%202209%2C%20Australia!5e0!3m2!1sen!2sau!4v1715593596904!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - 2 Fripp Cres"
          />
        </div>
      </div>
    </>
  );
};

export default Map;
