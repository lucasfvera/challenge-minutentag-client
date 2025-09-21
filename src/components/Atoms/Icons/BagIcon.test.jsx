import { render, screen } from "../../../utils/testUtils";
import { BagIcon } from "./BagIcon";
import { describe, it, expect } from "vitest";

describe("BagIcon", () => {
  it("should render the icon", () => {
    // Arrange
    render(<BagIcon />);

    // Act
    const icon = screen.getByTitle("Bag Icon");

    // Assert
    expect(icon).toBeInTheDocument();
  });
});
