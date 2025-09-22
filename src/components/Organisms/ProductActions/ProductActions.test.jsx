import { screen } from "@testing-library/react";
import { ProductActions } from "./ProductActions";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { mockQueryClient, render } from "../../../utils/testUtils";
import * as useProductsModule from "../../../hooks/react-query/useProducts";
import userEvent from "@testing-library/user-event";

describe("ProductActions component", () => {
  const mockedProduct = {
    id: 1,
    skus: [
      { code: "123", name: "6 pack" },
      { code: "456", name: "12 pack" },
    ],
  };

  beforeAll(() => {
    mockQueryClient.setQueryData(["products"], [mockedProduct]);
  });

  it("renders the proper structure and information", () => {
    const setSelectedSize = vi.fn();
    render(
      <ProductActions
        productId="1"
        setSelectedSize={setSelectedSize}
        selectedSize="123"
      />
    );

    const header = screen.getByRole("heading", { name: /size/i, level: 5 });
    const firstFilterButton = screen.getByRole("button", {
      name: mockedProduct.skus[0].name,
    });
    const secondFilterButton = screen.getByRole("button", {
      name: mockedProduct.skus[1].name,
    });
    const bagButton = screen.getByRole("button", { name: /bag icon/i });
    const mainCtaButton = screen.getByRole("button", { name: /add to cart/i });

    expect(header).toBeInTheDocument();
    expect(firstFilterButton).toBeInTheDocument();
    expect(secondFilterButton).toBeInTheDocument();
    expect(bagButton).toBeInTheDocument();
    expect(mainCtaButton).toBeInTheDocument();
  });

  it("renders size buttons and handles selection", async () => {
    // Arrange
    const setSelectedSize = vi.fn();

    render(
      <ProductActions
        productId="1"
        setSelectedSize={setSelectedSize}
        selectedSize="123"
      />
    );

    const sizeButton = screen.getByRole("button", {
      name: mockedProduct.skus[1].name,
    });

    // Act
    await userEvent.click(sizeButton);

    // Assert
    expect(setSelectedSize).toHaveBeenCalledWith(mockedProduct.skus[1].code);
  });

  it("renders a loading state", () => {
    // Arrange
    const productMock = vi
      .spyOn(useProductsModule, "useProduct")
      .mockReturnValue({ data: null, status: "pending" });

    render(
      <ProductActions
        productId="1"
        setSelectedSize={() => {}}
        selectedSize="123"
      />
    );

    // Assert
    expect(screen.getByText("Loading")).toBeInTheDocument();

    productMock.mockRestore();
  });

  it("calls the proper action when clicking the ctas buttons", async () => {
    // Arrange
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <ProductActions
        productId="1"
        setSelectedSize={() => {}}
        selectedSize="123"
      />
    );

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    const bagButton = screen.getByRole("button", {
      name: /bag icon/i,
    });

    // Act
    await userEvent.click(addToCartButton);
    await userEvent.click(bagButton);

    // Assert
    expect(alertSpy).toHaveBeenCalledWith("Item added to cart");
    expect(alertSpy).toHaveBeenCalledWith("Redirecting to cart");

    alertSpy.mockRestore();
  });
});
