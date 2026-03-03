import "./Button.css";

type ButtonVariants = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
  variant?: ButtonVariants;
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button button--${variant}`}>
      {children}
    </button>
  );
};
