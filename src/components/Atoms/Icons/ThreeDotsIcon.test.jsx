import { render, screen } from "../../../utils/testUtils";
import { ThreeDotsIcon } from "./ThreeDotsIcon";
import { describe, it, expect } from "vitest";

describe("ThreeDotsIcon", () => {
  it("should render the icon", () => {
    // Arrange
    render(<ThreeDotsIcon />);

    // Act
    const icon = screen.getByTitle("Three Dots Icon");

    // Assert
    expect(icon).toBeInTheDocument();
  });
});
