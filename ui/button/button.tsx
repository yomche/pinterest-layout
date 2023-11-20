"use client";
import classNames from "classnames";
import styles from "./button.module.scss";
import { IconType } from "react-icons";

interface ButtonProps {
  title?: string;
  icon?: JSX.Element;
  position: "center" | "right";
  action?: () => void;
}

export const Button = ({
  title,
  icon,
  action,
  position = "center",
}: ButtonProps) => {
  const handleClick = () => {
    action?.();
  };

  return (
    <div
      className={classNames(styles.button, styles[position])}
      onClick={handleClick}
    >
      {icon ? icon : title}
    </div>
  );
};
