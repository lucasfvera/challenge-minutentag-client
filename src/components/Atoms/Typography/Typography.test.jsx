import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";
import { describe, it, expect } from "vitest";
import styles from "./styles.module.css";

describe("Typography", () => {
  it("should render with the correct tag and text", () => {
    // Arrange
    render(<Typography as="h1">Hello World</Typography>);

    // Act
    const heading = screen.getByRole("heading", {
      name: /Hello World/i,
      level: 1,
    });

    // Assert
    expect(heading).toBeInTheDocument();
  });

  it("should apply the correct classes for type and weight", () => {
    // Arrange
    render(
      <Typography type="hero" weight="bold">
        Hello World
      </Typography>
    );

    // Act
    const text = screen.getByText("Hello World");

    // Assert
    expect(text).toHaveClass(styles.hero);
    expect(text).toHaveClass(styles.bold);
  });

  it("should apply inline styles for color, margin, and display", () => {
    // Arrange
    render(
      <Typography color="red" margin="10px" inline>
        Hello World
      </Typography>
    );

    // Act
    const text = screen.getByText("Hello World");

    // Assert
    expect(text).toHaveStyle("color: rgb(255,0,0)");
    expect(text).toHaveStyle("margin: 10px");
    expect(text).toHaveStyle("display: inline-block");
  });
});
