export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Raj Kumar Khadka"
    >
      <defs>
        <radialGradient id="logo-bg" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#1E1050" />
          <stop offset="100%" stopColor="#0A0F1E" />
        </radialGradient>
        <linearGradient id="logo-ring" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="logo-mark" x1="32" y1="40" x2="168" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8F4FF" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="100" cy="100" r="100" fill="url(#logo-bg)" />

      {/* Outer glow ring */}
      <circle cx="100" cy="100" r="94" fill="none" stroke="url(#logo-ring)" strokeWidth="4" opacity="0.25" />

      {/* Sharp border ring */}
      <circle cx="100" cy="100" r="93" fill="none" stroke="url(#logo-ring)" strokeWidth="1.5" opacity="0.9" />

      {/* R — left vertical bar (slight italic lean) */}
      <polygon points="32,40 55,40 58,160 35,160" fill="url(#logo-mark)" />

      {/* R — bowl with counter cutout (evenodd = stroke effect) */}
      <path
        fillRule="evenodd"
        fill="url(#logo-mark)"
        d="M55,40 L115,40 L138,58 L138,88 L115,105 L55,105 Z
           M72,57 L110,57 L124,66 L124,80 L110,88 L72,88 Z"
      />

      {/* K — upper arm (diagonal to upper-right) */}
      <polygon points="85,105 103,105 168,40 150,40" fill="url(#logo-mark)" />

      {/* K — lower arm (diagonal to lower-right) */}
      <polygon points="100,105 115,105 147,160 132,160" fill="url(#logo-mark)" />
    </svg>
  );
}
