import { useRoute } from "wouter";
import { Typography } from "../components/Atoms/Typography/Typography";
import { DetailsPageNavigation } from "../components/Organisms/DetailsPageNavigation/DetailsPageNavigation";
import { ProductDetails } from "../components/Organisms/ProductDetails/ProductDetails";
import { Button } from "../components/Molecules/Button/Button";
import { BagIcon } from "../components/Atoms/Icons/BagIcon";

export function ProductDetailPage() {
  const [match, params] = useRoute("/products/:productId-productBrand");
  if (!match) {
    console.error("Route didn't match");
    return null;
  }

  // Regex for detecting a valid id-brand pattern url. The brand can have hyphen too
  const expectedPattern = /^(\w+)-(.+)$/;

  const matchedParams = params["productId-productBrand"].match(expectedPattern);

  if (!matchedParams) {
    return <div>Product not found</div>;
  }

  const productId = matchedParams[1];
  const productBrand = matchedParams[2];

  return (
    <>
      <DetailsPageNavigation />
      <main>
        <ProductDetails productId={productId} productBrand={productBrand} />
        {/* <ProductActions /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "1.25rem",
            background: "white",
            padding: "0 1.5rem 2.5rem 1.5rem",
          }}
        >
          <Typography as="h5" type="subheader" weight="bold">
            Size
          </Typography>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button variant="secondary" size="small">
              <Typography as="span" type="body" color={"inherit"}>
                12 - 24oz
              </Typography>
            </Button>
            <Button variant="secondary" size="small" isActive>
              <Typography as="span" type="body" color={"inherit"}>
                18 - 12oz
              </Typography>
            </Button>
            <Button variant="secondary" size="small">
              <Typography as="span" type="body" color={"inherit"}>
                Half Barrel
              </Typography>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "auto",
            }}
          >
            <Button variant="secondary">
              <BagIcon />
            </Button>
            <Button fullwidth>
              <Typography as="span" weight="bold" type="subheader">
                Add to cart
              </Typography>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
