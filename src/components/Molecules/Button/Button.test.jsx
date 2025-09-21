import { render, screen } from "../../../utils/testUtils";
import { Button } from "./Button";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import styles from "./styles.module.css";

describe("Button component", () => {
  it("renders with default props", () => {
    // Arrange
    render(<Button>Click me</Button>);

    // Act
    const button = screen.getByRole("button", { name: /click me/i });

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(styles.baseButton);
    expect(button).toHaveClass(styles.primary);
    expect(button).toHaveClass(styles.large);
  });

  it("renders with secondary variant", () => {
    // Arrange
    render(<Button variant="secondary">Click me</Button>);

    // Act
    const button = screen.getByRole("button", { name: /click me/i });

    // Assert
    expect(button).toHaveClass(styles.secondary);
  });

  it("renders as a small", () => {
    // Arrange
    render(<Button size="small">Click me</Button>);

    // Act
    const button = screen.getByRole("button", { name: /click me/i });

    // Assert
    expect(button).toHaveClass(styles.small);
  });

  it("renders with fullwidth", () => {
    // Arrange
    render(<Button fullwidth>Click me</Button>);

    // Act
    const button = screen.getByRole("button", { name: /click me/i });

    // Assert
    expect(button).toHaveClass(styles.fullwidth);
  });

  it("calls the proper action when clicked", async () => {
    // Arrange
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    // Act
    await userEvent.click(button);

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies inactive class when isActive is false for small buttons", () => {
    // Arrange
    render(
      <Button size="small" isActive={false}>
        Click me
      </Button>
    );

    // Act
    const button = screen.getByRole("button", { name: /click me/i });

    // Assert
    expect(button).toHaveClass(styles.inactive);
  });

  it("does not apply inactive class when isActive is true for small buttons", () => {
    // Arrange
    render(
      <Button size="small" isActive={true}>
        Click me
      </Button>
    );

    // Act
    const button = screen.getByRole("button", { name: /click me/i });

    // Assert
    expect(button).not.toHaveClass(styles.inactive);
  });
});
