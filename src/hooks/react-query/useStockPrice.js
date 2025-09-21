import { useQuery } from "@tanstack/react-query";

/**
 *
 * @param {string} sku
 * @returns
 */
const getStockPrice = (sku) => {
  return fetch(
    `${import.meta.env.VITE_PRODUCT_SERVICE_BASE_URL}/stock-price/${sku}`
  ).then(async (res) => {
    const { data } = await res.json();

    return formatStockPriceData(data);
  });
};

const formatStockPriceData = (stockPrice) => {
  const priceFloat = (stockPrice.price / 100).toFixed(2);
  return { ...stockPrice, price: priceFloat };
};

/**
 *
 * @param {string} sku
 * @returns
 */
export const useStockPrice = (sku) => {
  const query = useQuery({
    queryKey: ["products", sku],
    queryFn: () => getStockPrice(sku),
    refetchInterval: 5000,
  });
  return query;
};
