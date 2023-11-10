import { MouseEventHandler } from "react";

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

  if (primary) classList.push("primary");
  else if (secondary) classList.push("secondary");

  if (block) classList.push("block");
  else if (outline) classList.push("outline");

  classList.push(size);

  const classListToStr = classList.join(" ");

  return (
    <button disabled={isDisabled} className={classListToStr} onClick={onClick}>
      {children}
    </button>
  );
}
