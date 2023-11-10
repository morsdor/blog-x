import { MouseEventHandler } from "react";
import styles from './Button.module.css'

export type ButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  block?: boolean;
  outline?: boolean;
  width?: string;
  isDisabled?: boolean;
  size?: "small" | "medium" | "large" | "full";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  primary = true,
  secondary = false,
  block = true,
  outline = false,
  isDisabled = false,
  size = "small",
  onClick,
}: ButtonProps) {
  const classList = [];

  if (secondary) classList.push(styles["secondary"]);
  else classList.push(styles["primary"]);

  
  if (outline) classList.push(styles["outline"]);
  else classList.push(styles["block"]);

  classList.push(styles[size]);

  const classListToStr = classList.join(" ");

  return (
    <button disabled={isDisabled} className={classListToStr} onClick={onClick}>
      {children}
    </button>
  );
}
