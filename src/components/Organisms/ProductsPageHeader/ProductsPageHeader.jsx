import { Typography } from "../../Atoms/Typography/Typography";
import styles from "./styles.module.css";

export const ProductsPageHeader = () => {
  return (
    <section className={styles.productsPage__header}>
      <Typography as="p" type="subheader" color="var(--medium-dark-text)">
        Hi Mr. Michael,
      </Typography>
      <Typography as="h1" type="hero" weight="bold" margin="0 0 1rem 0">
        Welcome Back!
      </Typography>
    </section>
  );
};
