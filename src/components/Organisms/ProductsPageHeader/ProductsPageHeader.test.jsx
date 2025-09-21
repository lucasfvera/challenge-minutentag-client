import { render, screen } from "@testing-library/react";
import { ProductsPageHeader } from "./ProductsPageHeader";
import { describe, it, expect } from "vitest";

describe("ProductsPageHeader component", () => {
  it("renders the header with a greeting and a welcome message", () => {
    // Arrange
    render(<ProductsPageHeader />);

    const mainHeader = screen.getByRole("heading", {
      name: /welcome back!/i,
      level: 1,
    });
    const userMsg = screen.getByText(/hi mr. michael,/i);
    // Assert
    expect(userMsg).toBeInTheDocument();
    expect(mainHeader).toBeInTheDocument();
  });
});
