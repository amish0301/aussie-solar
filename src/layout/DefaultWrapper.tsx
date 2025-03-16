//@refresh
"use client";
import React, { useEffect, useState } from "react";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import FooterOne from "./footer/FooterOne";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/FooterTwo";
import Preloader from "@/utils/Preloader";
import BacktoTop from "@/utils/BacktoTop";
interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathName = usePathname();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <> 
      <div className={`${isLoading ? "" : "page-loaded"}`}>
        <Preloader/>
        {(() => {
          switch (pathName) {
            case "/home-two":
              return <HeaderTwo />;
            default:
              return <HeaderOne />;
          }
        })()}
        {children}
        {(() => {
          switch (pathName) {
            case "/":
              return <FooterOne />;
            default:
              return <FooterTwo />;
          }
        })()}
      </div>
      <BacktoTop />
    </>
  );
};

export default Wrapper;
