export default function AngularLogo({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 250 250" width={size} height={size}>
      <path d="M125 0 L250 45 L227 200 L125 250 L23 200 L0 45 Z" fill="#dd0031" />
      <path
        d="M125 30 L204 190 H172 L155 150 H94 L77 190 H45 Z M125 65 L104 120 H146 Z"
        fill="#fff"
      />
    </svg>
  );
}
