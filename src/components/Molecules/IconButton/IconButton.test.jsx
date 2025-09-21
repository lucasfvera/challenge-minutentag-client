import { render, screen } from "../../../utils/testUtils";
import { IconButton } from "./IconButton";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import styles from "./styles.module.css";

describe("IconButton component", () => {
  it("renders with children and handles click", async () => {
    // Arrange
    const handleClick = vi.fn();
    const ariaLabel = "Test button";
    render(
      <IconButton onClick={handleClick} ariaLabel={ariaLabel}>
        <span>Icon</span>
      </IconButton>
    );

    // Act
    const button = screen.getByRole("button", { name: ariaLabel });
    await userEvent.click(button);

    // Assert
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has the correct class", () => {
    // Arrange
    render(
      <IconButton onClick={() => {}} ariaLabel="Test button">
        <span>Icon</span>
      </IconButton>
    );

    // Act
    const button = screen.getByRole("button");

    // Assert
    expect(button).toHaveClass(styles.iconButton);
  });
});
