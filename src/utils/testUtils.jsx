import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";

export const mockQueryClient = new QueryClient();

const AllTheProviders = ({ children }) => {
  return (
    <QueryClientProvider client={mockQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

//eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

export { customRender as render };
