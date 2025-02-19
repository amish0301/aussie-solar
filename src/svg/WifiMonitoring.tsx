import React from "react";

const WifiMonitoring = ({ size = 64, color = "#ffffff" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Solar Panel */}
      <rect x="12" y="32" width="40" height="16" fill={color} stroke="#000" strokeWidth="2" />
      <line x1="12" y1="40" x2="52" y2="40" stroke="#000" strokeWidth="2" />
      
      {/* Stand */}
      <line x1="24" y1="48" x2="24" y2="56" stroke="#000" strokeWidth="2" />
      <line x1="40" y1="48" x2="40" y2="56" stroke="#000" strokeWidth="2" />
      
      {/* WiFi Signals */}
      <path d="M32 12 C40 12, 48 16, 52 24" stroke="#000" strokeWidth="2" fill="none" />
      <path d="M32 16 C38 16, 44 20, 48 26" stroke="#000" strokeWidth="2" fill="none" />
      <path d="M32 20 C36 20, 40 24, 44 30" stroke="#000" strokeWidth="2" fill="none" />
      
      {/* Sun */}
      <circle cx="12" cy="12" r="6" fill="yellow" stroke="#000" strokeWidth="2" />
      <line x1="12" y1="2" x2="12" y2="6" stroke="#000" strokeWidth="2" />
      <line x1="12" y1="18" x2="12" y2="22" stroke="#000" strokeWidth="2" />
      <line x1="2" y1="12" x2="6" y2="12" stroke="#000" strokeWidth="2" />
      <line x1="18" y1="12" x2="22" y2="12" stroke="#000" strokeWidth="2" />
    </svg>
  );
};

export default WifiMonitoring;
