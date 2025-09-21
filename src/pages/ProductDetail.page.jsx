import { useRoute } from "wouter";
import { DetailsPageNavigation } from "../components/Organisms/DetailsPageNavigation/DetailsPageNavigation";
import { ProductDetails } from "../components/Organisms/ProductDetails/ProductDetails";
import { useState } from "react";
import { ProductActions } from "../components/Organisms/ProductActions/ProductActions";

export function ProductDetailPage() {
  const [match, params] = useRoute("/products/:productId-productBrand");
  const [selectedSize, setSelectedSize] = useState(null);

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
        <ProductDetails
          productId={productId}
          productBrand={productBrand}
          sizeCode={selectedSize}
        />
        <ProductActions
          productId={productId}
          setSelectedSize={setSelectedSize}
          selectedSize={selectedSize}
        />
      </main>
    </>
  );
}
