import React from "react";
import "../../index.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean; // Optional prop for full-width buttons
  icon?: React.ReactNode; // Optional prop for icons
}

export const Button = ({
  label,
  onClick,
  disabled = false,
  size = "md",
  variant = "primary",
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button-${variant} button-${size} button-hover ${
        fullWidth ? "w-full" : ""
      } disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};
