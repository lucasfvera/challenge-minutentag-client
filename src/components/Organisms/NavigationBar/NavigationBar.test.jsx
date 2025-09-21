import { render, screen, within } from "@testing-library/react";
import { NavigationBar } from "./NavigationBar";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("NavigationBar component", () => {
  it("renders the navigation bar with a burger menu button and an avatar", () => {
    // Arrange
    render(<NavigationBar />);

    const navigationBar = screen.getByRole("navigation");
    const burgerMenuButton = within(navigationBar).getByRole("button", {
      name: /burger menu/i,
    });
    const avatarImg = within(navigationBar).getByRole("img");

    // Assert
    expect(navigationBar).toBeInTheDocument();
    expect(burgerMenuButton).toBeInTheDocument();
    expect(avatarImg).toBeInTheDocument();
  });

  it("calls window.alert when the burger menu button is clicked", async () => {
    // Arrange
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<NavigationBar />);
    const burgerMenuButton = screen.getByLabelText("burger menu");

    // Act
    await userEvent.click(burgerMenuButton);

    // Assert
    expect(alertSpy).toHaveBeenCalledWith("Open the burger menu");

    // Cleanup
    alertSpy.mockRestore();
  });
});
