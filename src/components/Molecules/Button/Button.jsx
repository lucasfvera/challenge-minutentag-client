import React from "react";
import styles from "./styles.module.css";

/**
 *
 * @param {{children: React.ReactNode, variant?: 'primary' | 'secondary' | 'chip', size?: 'small' | 'large', fullwidth?: boolean & React.ButtonHTMLAttributes<HTMLButtonElement>}} props
 * @returns
 */
export const Button = ({
  children,
  variant = "primary",
  size = "large",
  fullwidth = false,
  ...props
}) => {
  const fullWidthClass = fullwidth ? styles.fullwidth : "";

  return (
    <button
      className={`${styles.baseButton} ${styles[variant]} ${styles[size]} ${fullWidthClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
