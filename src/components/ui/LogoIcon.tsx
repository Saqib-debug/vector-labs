interface LogoIconProps {
  className?: string;
  size?: number;
}

export default function LogoIcon({ className = "", size = 40 }: LogoIconProps) {
  return (
    <img
      src="https://lh3.googleusercontent.com/d/1YY08aIPitDSwncZI3MTGj8_CybsymXjU"
      alt="Vector Labs Logo"
      width={size}
      height={size}
      referrerPolicy="no-referrer"
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
      id="logo-image-asset"
    />
  );
}
