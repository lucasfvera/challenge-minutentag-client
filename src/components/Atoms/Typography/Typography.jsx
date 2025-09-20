import typography from "./styles.module.css";

/**
 *
 * @param {{as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', weight?: 'regular' | 'medium' | 'bold', type: 'hero' | 'header' | 'subheader', color?: string, children: string, className?: string, margin?: string}} props
 * @returns
 */
export const Typography = ({
  as = "p",
  weight = "regular",
  type,
  color,
  children,
  className,
  margin,
  ...props
}) => {
  const Component = as;

  return (
    <Component
      className={`${typography[type]} ${typography[weight]} ${className}`}
      style={{ color, margin }}
      {...props}
    >
      {children}
    </Component>
  );
};
