import { Typography } from "../../Atoms/Typography/Typography";
import { PlusIcon } from "../../Atoms/Icons/PlusIcon";
import { Link } from "wouter";
import { StarIcon } from "../../Atoms/Icons/StarIcon";
import { useStockPrice } from "../../../hooks/react-query/useStockPrice";
import styles from "./styles.module.css";

export const ProductCard = ({ product }) => {
  const { data: stockPrice, isPending } = useStockPrice(product.skus[0].code);
  // TODO: this should come from another place, but the requirements are not consistent. The provided data is not good enough to build the link
  const productLinkBrand = product?.image?.split("/")[2]?.split(".")[0];

  return (
    <Link to={`/products/${product.id}-${productLinkBrand}`} asChild>
      <article className={styles.productCard}>
        <Typography
          className={styles.productCard__header}
          as="h4"
          type="subheader"
          weight="medium"
        >
          {product.brand}
        </Typography>
        <img
          loading="lazy"
          className={styles.productCard__img}
          src={product.image}
          alt={`A bottle of ${product.brand} beer`}
          width={122}
          height={122}
        />
        {product.rating && (
          <div className={styles.productCard__star}>
            <StarIcon />
            <Typography
              type="caption"
              weight="medium"
              color="var(--medium-text)"
            >
              {product.rating}
            </Typography>
          </div>
        )}
        <Typography
          className={styles.productCard__price}
          type="subheader"
          weight="medium"
        >
          $ {isPending ? "-" : stockPrice.price}
        </Typography>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.alert(`Product ${product.brand} added to the cart`);
          }}
          className={styles.productCard__btn}
        >
          <PlusIcon />
        </button>
      </article>
    </Link>
  );
};
