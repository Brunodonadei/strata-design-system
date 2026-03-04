import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";
import { Spinner } from "../Spinner";

type ButtonVariants = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  onClick?: () => void;
  variant?: ButtonVariants;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  loading,
  disabled,
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${variant} button--${size}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Spinner /> : leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
