import { render, screen } from "../../../utils/testUtils";
import { PlusIcon } from "./PlusIcon";
import { describe, it, expect } from "vitest";

describe("PlusIcon", () => {
  it("should render the icon", () => {
    // Arrange
    render(<PlusIcon />);

    // Act
    const icon = screen.getByTitle("Plus Icon");

    // Assert
    expect(icon).toBeInTheDocument();
  });
});
