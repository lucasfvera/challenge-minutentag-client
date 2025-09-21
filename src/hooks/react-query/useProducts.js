import { useQuery } from "@tanstack/react-query";

const getProducts = () => {
  return fetch(
    `${import.meta.env.VITE_PRODUCT_SERVICE_BASE_URL}/products`
  ).then(async (res) => {
    const { data } = await res.json();
    return data;
  });
};

export const useProducts = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });

  return query;
};

/**
 *
 * @param {string} id
 * @returns
 */
export const useProduct = (id) => {
  const idNumber = parseInt(id);

  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    // The select function will run after the data is fetched and cached
    select: (products) => {
      return products.find((product) => product.id === idNumber);
    },
  });
  return query;
};
