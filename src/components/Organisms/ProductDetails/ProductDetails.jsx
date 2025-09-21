import { useRoute } from "wouter";
import { useProduct } from "../../../hooks/react-query/useProducts";
import { Typography } from "../../Atoms/Typography/Typography";
import styles from "./styles.module.css";
import { BRAND_ICON_MAP } from "../../../utils/brandIconMap";

export const ProductDetails = ({ productId, productBrand }) => {
  const { data: productInfo, status } = useProduct(productId);

  if (status === "pending") return <div>Loading</div>;

  const imgSrc = BRAND_ICON_MAP[productBrand];

  return (
    <div className={styles.productDetailsContainer}>
      <img
        loading="lazy"
        src={imgSrc}
        alt={`A bottle of ${productInfo.brand} beer`}
        width={240}
        height={240}
      />
      <div className={styles.productDetailsCard}>
        <div className={styles.productDetailsCard__header}>
          <Typography as="h2" type="hero" weight="bold">
            {productInfo.brand}
          </Typography>
          <Typography
            as="h3"
            type="hero"
            weight="bold"
            color="var(--primary-color)"
            className={styles.productDetailsCard__price}
          >
            $26.40
          </Typography>
          <Typography type="body" color="var(--medium-text)">
            Origin: {productInfo.origin} | Stock: 456
          </Typography>
        </div>
        <div className={styles.productDetailsCard__description}>
          <Typography as="h4" type="subheader" weight="bold">
            Description
          </Typography>
          <Typography type="subheader" color="var(--medium-text)">
            {productInfo.information} ...{" "}
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
