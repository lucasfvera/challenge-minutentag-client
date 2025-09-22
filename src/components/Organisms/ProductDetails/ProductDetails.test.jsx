import { screen } from "@testing-library/react";
import { ProductDetails } from "./ProductDetails";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { mockQueryClient, render } from "../../../utils/testUtils";
import * as useStockPriceModule from "../../../hooks/react-query/useStockPrice";
import userEvent from "@testing-library/user-event";

describe("ProductDetails component", () => {
  const mockedProduct = {
    id: 1,
    brand: "Test Beer",
    image: "/products/test-beer.jpeg",
    information:
      "This is a test beer description that it should be long enough to be truncated so we can expect truncation because the text has to be as long as 200 characters or more to be replaced with ellipsis and this text is definitely that long or even more so we can test the functionality properly.",
    origin: "Testland",
    skus: [{ code: "123", name: "test name sku" }],
  };

  const mockedStockPrice = {
    price: 10.49,
    stock: 100,
  };

  beforeAll(() => {
    mockQueryClient.setQueryData(["products"], [mockedProduct]);
    mockQueryClient.setQueryData(["products", "123"], mockedStockPrice);
  });

  it("renders product details correctly", () => {
    render(
      <ProductDetails productId="1" productBrand="test-beer" sizeCode={"123"} />
    );

    const brandText = screen.getByRole("heading", {
      name: mockedProduct.brand,
      level: 2,
    });
    const price = screen.getByText("$10.49");
    const origin = screen.getByText(
      `Origin: ${mockedProduct.origin} | Stock: ${mockedStockPrice.stock}`
    );
    const descriptionHeader = screen.getByRole("heading", {
      name: /description/i,
      level: 4,
    });
    const description = screen.getByText(
      mockedProduct.information.substring(0, 200),
      { exact: false }
    );

    // Assert
    expect(brandText).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(origin).toBeInTheDocument();
    expect(descriptionHeader).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("expands and collapses the description", async () => {
    // Arrange
    render(
      <ProductDetails productId="1" productBrand="test-beer" sizeCode={"123"} />
    );
    const readMoreButton = screen.getByText(/read more/i);

    // Act
    await userEvent.click(readMoreButton);

    // Assert
    expect(screen.getByText(/read less/i)).toBeInTheDocument();

    const readLessButton = screen.getByText("Read less");

    // Act
    await userEvent.click(readLessButton);

    // Assert
    expect(screen.getByText(/read more/i)).toBeInTheDocument();
  });

  it("renders a loading state for stock and price", () => {
    // Arrange
    const stockPriceMock = vi
      .spyOn(useStockPriceModule, "useStockPrice")
      .mockReturnValue({ data: null, isPending: true });
    render(
      <ProductDetails productId="1" productBrand="test-beer" sizeCode={"123"} />
    );

    // Assert
    expect(screen.getByText("$-")).toBeInTheDocument();
    expect(
      screen.getByText(`Origin: ${mockedProduct.origin} | Stock: -`)
    ).toBeInTheDocument();

    stockPriceMock.mockRestore();
  });
});
