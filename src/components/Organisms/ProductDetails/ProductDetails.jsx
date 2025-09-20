import { Typography } from "../../Atoms/Typography/Typography";
import styles from "./styles.module.css";

export const ProductDetails = () => {
  return (
    <div className={styles.productDetailsContainer}>
      <img
        src="/icons/modelo-especial-img.png"
        alt="A bottle of beer brand Modelo Especial"
        width={240}
        height={240}
      />
      <div className={styles.productDetailsCard}>
        <div className={styles.productDetailsCard__header}>
          <Typography as="h2" type="hero" weight="bold">
            Modelo Especial
          </Typography>
          {/* TODO: Align the price to the end */}
          <Typography
            as="h3"
            type="hero"
            weight="bold"
            color="var(--primary-color)"
            className={styles.productDetailsCard__price}
          >
            $26.40
          </Typography>
          <Typography type="caption" color="var(--medium-text)">
            Origin: Import | Stock: 456
          </Typography>
        </div>
        <div className={styles.productDetailsCard__description}>
          <Typography as="h4" type="subheader" weight="bold">
            Description
          </Typography>
          <Typography type="subheader">
            Selling imported beer in the US with nearly 60 million cases in
            annual sales, growing more than 15 million cases over the past 2
            years. A full flavored Mexican lager consistently delivering ...{" "}
            <Typography
              as="span"
              type="subheader"
              weight="bold"
              color="var(--primary-color)"
              inline
            >
              Read more
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};
