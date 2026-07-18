import AngularLogo from "./AngularLogo";

export default function AngularShield({
  size = 64,
  iconSize = 36,
}: {
  size?: number;
  iconSize?: number;
}) {
  return (
    <div className="angular-shield" style={{ width: size, height: size }}>
      <AngularLogo size={iconSize} />
    </div>
  );
}
