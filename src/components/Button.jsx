import { useState } from "react";

function Button({
  color,
  hoverColor,
  text,
  onClick,
  textColor,
  hoverTextColor,
  size = "medium",
}) {
  const [isHovered, setIsHovered] = useState(false); // Use boolean, not string

  const sizeVariants = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  const buttonSize = sizeVariants[size];

  return (
    <button
      className={`${buttonSize} rounded-full font-semibold`}
      style={{
        backgroundColor: isHovered ? hoverColor || color : color,
        color: isHovered ? hoverTextColor || textColor : textColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
