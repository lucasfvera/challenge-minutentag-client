import typography from "./styles.module.css";

/**
 *
 * @param {{as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', weight?: 'regular' | 'medium' | 'bold', type?: 'hero' | 'header' | 'subheader' | 'body' | 'caption', color?: string, children: import("react").ReactNode, className?: string, margin?: string, inline?: boolean}} props
 * @returns
 */
export const Typography = ({
  as = "p",
  weight = "regular",
  type = "body",
  color,
  children,
  className = "",
  margin,
  inline,
  ...props
}) => {
  const Component = as;

  return (
    <Component
      className={`${typography[type]} ${typography[weight]} ${className}`}
      style={{ color, margin, display: inline ? "inline-block" : "block" }}
      {...props}
    >
      {children}
    </Component>
  );
};
