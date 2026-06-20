export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <img
      src="/favicon.svg"
      width={size}
      height={size}
      alt="Raj Kumar Khadka"
      style={{ borderRadius: "50%" }}
    />
  );
}
