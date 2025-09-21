import App from "./App";
import { render, screen } from "./utils/testUtils";
import { expect, describe, it } from "vitest";

describe("App component", () => {
  it("Mounts without errors", () => {
    render(<App />);

    const welcomeMessage = screen.getByText(/welcome back/i);

    expect(welcomeMessage).toBeInTheDocument();
  });
});
