function HireMasterLogo({ size = 40 }) {
  return (
    <div
      className="hiremaster-logo"
      style={{ width: size, height: size }}
      aria-label="HireMaster Logo"
    >
      <svg
        viewBox="0 0 64 64"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#bg)" />
        <path
          d="M20 44V20H26V29H38V20H44V44H38V34H26V44H20Z"
          fill="white"
        />
        <path
          d="M46 18L50 14"
          stroke="#93C5FD"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="bg" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D4ED8" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default HireMasterLogo;