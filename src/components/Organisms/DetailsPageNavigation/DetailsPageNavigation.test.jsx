import { render, screen, within } from "@testing-library/react";
import { DetailsPageNavigation } from "./DetailsPageNavigation";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

// Mock wouter
const navigate = vi.fn();
vi.mock("wouter", () => ({
  useLocation: () => ["/products/1", navigate],
}));

describe("DetailsPageNavigation component", () => {
  it("renders the navigation bar with back button, title, and options button", () => {
    // Arrange
    render(<DetailsPageNavigation />);

    const navigationBar = screen.getByRole("navigation");
    const backButton = within(navigationBar).getByLabelText(
      /back navigation button/i
    );
    const navHeader = within(navigationBar).getByRole("heading", {
      name: /detail/i,
      level: 1,
    });
    const moreButton =
      within(navigationBar).getByLabelText(/more options button/i);

    // Assert
    expect(navigationBar).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(navHeader).toBeInTheDocument();
    expect(moreButton).toBeInTheDocument();
  });

  it("calls navigate when the back button is clicked", async () => {
    // Arrange
    render(<DetailsPageNavigation />);
    const backButton = screen.getByLabelText("back navigation button");

    // Act
    await userEvent.click(backButton);

    // Assert
    expect(navigate).toHaveBeenCalledWith("../");
  });

  it("calls window.alert when the options button is clicked", async () => {
    // Arrange
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<DetailsPageNavigation />);
    const optionsButton = screen.getByLabelText("more options button");

    // Act
    await userEvent.click(optionsButton);

    // Assert
    expect(alertSpy).toHaveBeenCalledWith("More options");

    // Cleanup
    alertSpy.mockRestore();
  });
});
