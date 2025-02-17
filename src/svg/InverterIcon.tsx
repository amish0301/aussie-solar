const SolarInverterIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Inverter Body */}
      <rect x="16" y="12" width="32" height="40" rx="4" fill="#0A9642" />
      <rect x="20" y="16" width="24" height="32" rx="3" fill="#3CB043" />

      {/* Power Indicator */}
      <circle cx="32" cy="32" r="5" fill="#0A9642" />
      <path d="M32 27V32" stroke="white" strokeWidth="2" />
      <path d="M32 32L34 36" stroke="white" strokeWidth="2" />

      {/* Bottom Connection */}
      <rect x="24" y="48" width="16" height="4" fill="#0A9642" />
    </svg>
  );
};


export default SolarInverterIcon;