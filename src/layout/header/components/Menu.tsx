import navMenuData from "@/data/menu/menu-data";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      <ul>
        {navMenuData?.map((item) => (
          <li key={item?.id} className={item?.id === 1 ? "active" : ""}>
            <Link href={item?.link}>
              {item?.label}{" "}
              <i
                className={
                  item?.hasDropdown === true
                    ? "far fa-angle-down"
                    : "far fa-cloud-upload"
                }
              ></i>
            </Link>
            {item?.hasDropdown === true && (
              <ul className="sub-menu text-left">
                {item?.subMenu?.map((itm) => (
                  <li key={itm.id}>
                    <Link href={itm.link}> {itm.label} </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
