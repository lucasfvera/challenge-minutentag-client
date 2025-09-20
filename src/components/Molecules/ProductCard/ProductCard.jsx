import { Typography } from "../../Atoms/Typography/Typography";
import { PlusIcon } from "../../Atoms/Icons/PlusIcon";
import { Link } from "wouter";
import { StarIcon } from "../../Atoms/Icons/StarIcon";
import styles from "./styles.module.css";

export const ProductCard = () => {
  return (
    <Link to="/products/127-modelo-especial">
      <article className={styles.productCard}>
        <Typography
          className={styles.productCard__header}
          as="h4"
          type="subheader"
          weight="medium"
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

        <div className={styles.productCard__star}>
          <StarIcon />
          <Typography type="caption" weight="medium" color="var(--medium-text)">
            4.9
          </Typography>
        </div>
        <Typography
          className={styles.productCard__price}
          type="subheader"
          weight="medium"
        >
          $26.65
        </Typography>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.alert("Product added to the cart");
          }}
          className={styles.productCard__btn}
        >
          <PlusIcon />
        </button>
      </article>
    </Link>
  );
};
