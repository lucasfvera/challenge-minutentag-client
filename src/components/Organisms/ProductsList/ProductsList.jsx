import { ProductCard } from "../../Molecules/ProductCard/ProductCard";
import styles from "./styles.module.css";

export const ProductsList = () => {
  return (
    <ul className={styles.productsList}>
      {Array(10)
        .fill(1)
        .map((el, i) => (
          <li key={i}>
            <ProductCard />
          </li>
        ))}
    </ul>
  );
};
