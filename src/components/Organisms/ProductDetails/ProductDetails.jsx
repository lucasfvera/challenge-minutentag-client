import { useState } from "react";
import { useProduct } from "../../../hooks/react-query/useProducts";
import { Typography } from "../../Atoms/Typography/Typography";
import styles from "./styles.module.css";
import { BRAND_ICON_MAP } from "../../../utils/brandIconMap";
import { useStockPrice } from "../../../hooks/react-query/useStockPrice";

export const ProductDetails = ({ productId, productBrand, sizeCode }) => {
  const { data: productInfo, status } = useProduct(productId);
  const { data: stockPrice, isPending: isPendingStockPrice } = useStockPrice(
    sizeCode || productInfo?.skus[0].code
  );
  const [isExpanded, setIsExpanded] = useState(false);

  if (status === "pending") return <div>Loading</div>;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const description = productInfo.information;
  const truncatedDescription = description.substring(0, 200) + "...";

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
            ${isPendingStockPrice ? "-" : stockPrice.price}
          </Typography>
          <Typography type="body" color="var(--medium-text)">
            Origin: {productInfo.origin} | Stock:{" "}
            {isPendingStockPrice ? "-" : stockPrice.stock}
          </Typography>
        </div>
        <div className={styles.productDetailsCard__description}>
          <Typography as="h4" type="subheader" weight="bold">
            Description
          </Typography>
          <Typography type="subheader" color="var(--medium-text)">
            {isExpanded ? description : truncatedDescription}
            <Typography
              as="span"
              type="subheader"
              weight="bold"
              color="var(--primary-color)"
              inline
              onClick={toggleExpanded}
              className={styles.productDetailsCard__description_button}
            >
              {isExpanded ? "Read less" : "Read more"}
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};
