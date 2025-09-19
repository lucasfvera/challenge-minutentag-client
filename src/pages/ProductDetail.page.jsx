import { useRoute } from 'wouter';

export function ProductDetailPage() {
    const [match, params] = useRoute('/products/:productId-productBrand');
    if (!match) {
        return null;
    }

    // Regex for detecting a valid id-brand pattern url
    const expectedPattern = /^(\w+)-(\w+)$/;

    const matchedParams =
        params['productId-productBrand'].match(expectedPattern);

    if (!matchedParams) {
        return <div>Product not found</div>;
    }

    const productId = matchedParams[1];
    const productBrand = matchedParams[2];

    return (
        <div>
            Product Detail for: {productId} - {productBrand}
        </div>
    );
}
