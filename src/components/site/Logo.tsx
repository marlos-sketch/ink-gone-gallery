import logoAsset from "@/assets/logo-mesquita.png.asset.json";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <img
      src={logoAsset.url}
      alt="Sr & Sra Mesquita — Beauty / Clinic"
      className={className}
      style={variant === "light" ? { filter: "invert(1) brightness(2)" } : undefined}
    />
  );
}
