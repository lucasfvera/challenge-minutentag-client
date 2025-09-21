import { render } from "@testing-library/react";

const AllTheProviders = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

//eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

export { customRender as render };
