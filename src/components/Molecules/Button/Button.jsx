import React from "react";
import styles from "./styles.module.css";

/**
 *
 * @param {{children: React.ReactNode, variant?: 'primary' | 'secondary' | 'chip', size?: 'small' | 'large', fullwidth?: boolean, isActive?: boolean, onClick?: (...args: any[]) => void}} props
 * @returns
 */
export const Button = ({
  children,
  variant = "primary",
  size = "large",
  fullwidth = false,
  isActive = false,
  ...props
}) => {
  const fullWidthClass = fullwidth ? styles.fullwidth : "";
  const activeFilterClass =
    size === "small" && !isActive ? styles.inactive : "";

  return (
    <button
      className={`${styles.baseButton} ${styles[variant]} ${styles[size]} ${fullWidthClass} ${activeFilterClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
