export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Raj Kumar Khadka"
    >
      <defs>
        <linearGradient id="rk-slash" x1="22" y1="22" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9A3C" />
          <stop offset="100%" stopColor="#C85F00" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="44" height="44" rx="10" fill="#0A0F1E" />

      {/* Central spine — right side of Я, left side of K */}
      <line x1="22" y1="5" x2="22" y2="39" stroke="white" strokeWidth="6" strokeLinecap="round" />

      {/* Я — bowl arcs from spine-top leftward and back to spine-mid */}
      <path
        d="M 22 5 Q 3 5 3 14 Q 3 23 22 23"
        stroke="white"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Я — leg: spine-mid to lower-left */}
      <line x1="22" y1="23" x2="5" y2="39" stroke="white" strokeWidth="5.5" strokeLinecap="round" />

      {/* K — upper arm: spine-mid to upper-right */}
      <line x1="22" y1="23" x2="40" y2="5" stroke="white" strokeWidth="5.5" strokeLinecap="round" />

      {/* K — lower slash arm: spine-mid to lower-right (orange) */}
      <line x1="22" y1="23" x2="40" y2="39" stroke="url(#rk-slash)" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}
