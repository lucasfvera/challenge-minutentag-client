import { useProduct } from "../../../hooks/react-query/useProducts";
import { BagIcon } from "../../Atoms/Icons/BagIcon";
import { Typography } from "../../Atoms/Typography/Typography";
import { Button } from "../../Molecules/Button/Button";
import styles from "./styles.module.css";

export const ProductActions = ({
  productId,
  setSelectedSize,
  selectedSize,
}) => {
  const { data: productInfo, status } = useProduct(productId);

  return (
    <div className={styles.productActions__container}>
      <Typography as="h5" type="subheader" weight="bold">
        Size
      </Typography>
      <div className={styles.productActions__filters}>
        {status === "success" ? (
          productInfo.skus.map((sku, i) => (
            <Button
              key={sku.code}
              variant="secondary"
              size="small"
              onClick={() => setSelectedSize(sku.code)}
              isActive={selectedSize ? selectedSize === sku.code : i === 0}
            >
              <Typography as="span" type="body" color={"inherit"}>
                {sku.name}
              </Typography>
            </Button>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          marginTop: "auto",
        }}
      >
        <Button
          variant="secondary"
          onClick={() => window.alert("Redirecting to cart")}
        >
          <BagIcon />
        </Button>
        <Button fullwidth onClick={() => window.alert("Item added to cart")}>
          <Typography as="span" weight="bold" type="subheader">
            Add to cart
          </Typography>
        </Button>
      </div>
    </div>
  );
};
