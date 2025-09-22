import styles from "./styles.module.css";

export const ProductCardSkeleton = () => {
  return (
    <div data-testid="loading-product-card" className={styles.skeleton}></div>
  );
};
