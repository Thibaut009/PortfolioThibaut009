export default function AngularShield({
  size = 64,
  iconSize = 36,
}: {
  size?: number;
  iconSize?: number;
}) {
  return (
    <div className="angular-shield" style={{ width: size, height: size }}>
      <svg viewBox="0 0 250 250" width={iconSize} height={iconSize}>
        <path d="M125 0 L250 45 L227 200 L125 250 L23 200 L0 45 Z" fill="#dd0031" />
        <path
          d="M125 30 L204 190 H172 L155 150 H94 L77 190 H45 Z M125 65 L104 120 H146 Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}
