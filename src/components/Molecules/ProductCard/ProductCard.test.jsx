import { render, screen, mockQueryClient } from "../../../utils/testUtils";
import { ProductCard } from "./ProductCard";
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import * as useStockPriceModule from "../../../hooks/react-query/useStockPrice"; // Import the module as a whole
import { beforeAll } from "vitest";

describe("ProductCard component", () => {
  const mockedProduct = {
    id: 1,
    brand: "Test Beer",
    image: "/products/test-beer.jpg",
    rating: 4.5,
    skus: [{ code: "123" }],
  };
  const mockedStockPrice = { price: 10.99, stock: 100 };
  beforeAll(() => {
    mockQueryClient.setQueryData(["products", "123"], mockedStockPrice);
  });

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it("renders product information correctly", () => {
    render(<ProductCard product={mockedProduct} />);

    // Assert
    expect(screen.getByText("Test Beer")).toBeInTheDocument();
    expect(
      screen.getByAltText("A bottle of Test Beer beer")
    ).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("$ 10.99")).toBeInTheDocument();
  });

  it("shows a loading state for price", async () => {
    const localMock = vi
      .spyOn(useStockPriceModule, "useStockPrice")
      .mockReturnValue({
        data: null,
        isPending: true,
      });
    const { ProductCard } = await import("./ProductCard");
    // Arrange
    render(<ProductCard product={mockedProduct} />);

    // Assert
    expect(screen.getByText("$ -")).toBeInTheDocument();
    localMock.mockRestore();
  });

  it("calls the proper action when plus button is clicked", async () => {
    // Arrange
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<ProductCard product={mockedProduct} />);

    // Act
    const plusButton = screen.getByRole("button");
    await userEvent.click(plusButton);

    // Assert
    expect(alertSpy).toHaveBeenCalledWith(
      "Product Test Beer added to the cart"
    );

    // Cleanup
    alertSpy.mockRestore();
  });

  it.todo("redirects to the product page when clicking the card");
});
