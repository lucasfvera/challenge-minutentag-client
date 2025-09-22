import { screen } from "@testing-library/react";
import { ProductsList } from "./ProductsList";
import { describe, it, expect, vi } from "vitest";
import { mockQueryClient, render } from "../../../utils/testUtils";
import * as useProductsModule from "../../../hooks/react-query/useProducts";
import { beforeAll } from "vitest";

// vi.mock("../../Molecules/ProductCard/ProductCard.jsx", () => ({
//   ProductCard: () => <div data-testid="productCardMock">ProductCardMock</div>,
// }));

describe("ProductsList component", () => {
  const mockedProducts = [
    {
      id: 1,
      brand: "Buzz",
      image: "products/buzz-keg.png",
      rating: 4.5,
      skus: [{ code: "123" }],
    },
    {
      id: 2,
      brand: "Bud",
      image: "products/bud-gek.png",
      rating: 4.5,
      skus: [{ code: "124" }],
    },
  ];

  beforeAll(() => {
    mockQueryClient.setQueryData(["products"], mockedProducts);
  });

  it("renders a list of products", async () => {
    // Arrange
    render(<ProductsList />);

    const products = await screen.findAllByRole("listitem");

    // Assert
    expect(products).toHaveLength(mockedProducts.length);
  });

  it("renders a loading state", async () => {
    // Arrange
    const localMock = vi
      .spyOn(useProductsModule, "useProducts")
      .mockReturnValue({ data: null, status: "pending" });

    render(<ProductsList />);
    const loadingCards = await screen.findAllByTestId(/loading-product-card/i);

    // Assert
    expect(loadingCards).toHaveLength(5);
    localMock.mockRestore();
  });

  it("renders an error state", async () => {
    // Arrange
    const localMock = vi
      .spyOn(useProductsModule, "useProducts")
      .mockReturnValue({ data: null, status: "error" });
    render(<ProductsList />);

    const errorMsg = await screen.findByText("Something failed");

    // Assert
    expect(errorMsg).toBeInTheDocument();
    localMock.mockRestore();
  });
});
