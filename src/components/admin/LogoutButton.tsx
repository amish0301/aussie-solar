"use client";

import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      className="btn btn-danger d-flex align-items-center gap-2 px-3 py-2"
      style={{
        borderRadius: "8px",
        transition: "0.3s ease-in-out",
        fontWeight: "500",
      }}
      onClick={async () => await signOut({ callbackUrl: "/login" })}
    >
      <FontAwesomeIcon icon={faSignOutAlt} />
      <span className="d-none d-sm-inline">Logout</span>
    </button>
  );
};

export default LogoutButton;
