import { Typography } from "@/components/Atoms/Typography/Typography";
import { PlusIcon } from "@/components/Atoms/Icons/PlusIcon";
import styles from "./styles.module.css";

export const ProductCard = () => {
  return (
    <article aria-labelledby="item-name" className={styles.productCard}>
      <Typography
        className={styles.productCard__header}
        as="h4"
        type="subheader"
        weight="medium"
        id="item-name"
      >
        Modelo Especial
      </Typography>
      <img
        className={styles.productCard__img}
        src="/modelo-especial.jpeg"
        alt="A bottle of modelo special beer"
        width={100}
        height={100}
      />

      <Typography
        className={styles.productCard__price}
        type="subheader"
        weight="medium"
      >
        $26.65
      </Typography>
      <button
        onClick={() => window.alert("Product added to the cart")}
        className={styles.productCard__btn}
      >
        <PlusIcon />
      </button>
    </article>
  );
};
