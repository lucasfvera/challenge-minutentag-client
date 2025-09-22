import { useProducts } from "../../../hooks/react-query/useProducts";
import { Typography } from "../../Atoms/Typography/Typography";
import { ProductCard } from "../../Molecules/ProductCard/ProductCard";
import { ProductCardSkeleton } from "../../Molecules/ProductCardSkeleton/ProductCardSkeleton";
import styles from "./styles.module.css";

export const ProductsList = () => {
  const { data: products, status } = useProducts();

  return (
    <section className={styles.productsList__container}>
      <Typography as="h2" type="header" weight="bold">
        Our Products
      </Typography>
      <ul className={styles.productsList}>
        {status === "pending" ? (
          Array(5)
            .fill(1)
            .map((el, i) => (
              <li key={i}>
                <ProductCardSkeleton />
              </li>
            ))
        ) : status === "error" ? (
          <div>Something failed</div>
        ) : (
          products.map((product) => (
            <li className={styles.productsList__item} key={product.id}>
              <ProductCard product={product} />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};
