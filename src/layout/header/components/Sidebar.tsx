import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar__area">
        <div
          className="sidebar__shape"
          data-background="assets/img/shape/hexa.png"
        ></div>
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <span>
                <i className="fal fa-times"></i>
              </span>
              <span>close</span>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="logo mb-40">
              <Link href="/">
                <Image src="assets/img/logo/logo-white.png" alt="logo" />
              </Link>
            </div>
            <div className="mobile-menu d-block"></div>
            <div className="hedder-button mt-30">
              <Link className="h-btn h-btn-2 mb-15" href="#">
                <i className="far fa-user-circle"></i> Sign In
              </Link>
              <Link className="h-btn h-btn-green h-btn-white" href="#">
                <i className="far fa-lock-alt"></i> Log In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
