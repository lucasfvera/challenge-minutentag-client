import { Typography } from "../../Atoms/Typography/Typography";
import { ProductCard } from "../../Molecules/ProductCard/ProductCard";
import styles from "./styles.module.css";

export const ProductsList = () => {
  return (
    <section className={styles.productsList__container}>
      <Typography as="h2" type="header" weight="bold">
        Our Products
      </Typography>
      <ul className={styles.productsList}>
        {Array(10)
          .fill(1)
          .map((el, i) => (
            <li key={i}>
              <ProductCard />
            </li>
          ))}
      </ul>
    </section>
  );
};
