"use client";

import React, { createContext, useState, useEffect } from "react";
import { AppContextType } from "@/interFace/interFace";
import { usePathname } from "next/navigation";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  // old
  const [scrollDirection, setScrollDirection] = useState("up");
  const [niceSelectData, setNiceSelectData] = useState<string | string[]>("no-data");
 
  // new
  const [openLetterBox, setOpenLetterBox] = useState<boolean>(false);
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [openSearchBox, setopenSearchBox] = useState<boolean>(false);

  // old
  useEffect(() => {
    setNiceSelectData("no-data");
  }, [pathName]);

  // new 

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const toggleSearchBar = () => {
    setopenSearchBox(!openSearchBox);
  };

  const contextValue: AppContextType = {
    scrollDirection,
    setScrollDirection,
    niceSelectData,
    setNiceSelectData,
    openLetterBox,
    setOpenLetterBox,
    toggleSideMenu,
    setSideMenuOpen,
    sideMenuOpen,
    openSearchBox, setopenSearchBox,
    toggleSearchBar,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
