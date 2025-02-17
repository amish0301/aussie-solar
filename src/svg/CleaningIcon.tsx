const SolarPanelCleaningIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Solar Panel */}
      <rect x="10" y="30" width="44" height="14" rx="2" fill="#3CB043" />
      <path d="M10 34H54" stroke="#0A9642" strokeWidth="2" />
      <path d="M22 30V44" stroke="#0A9642" strokeWidth="2" />
      <path d="M42 30V44" stroke="#0A9642" strokeWidth="2" />

      {/* Cleaning Bubbles */}
      <circle cx="18" cy="22" r="4" fill="#0A9642" />
      <circle cx="26" cy="18" r="3" fill="#0A9642" />
      <circle cx="36" cy="22" r="4" fill="#0A9642" />
      <circle cx="46" cy="18" r="3" fill="#0A9642" />

      {/* Cleaning Wiper */}
      <path
        d="M12 48H52"
        stroke="#3CB043"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="28" y="44" width="8" height="6" fill="#0A9642" />
    </svg>
  );
};


export default SolarPanelCleaningIcon;