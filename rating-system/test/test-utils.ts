import { render } from "@testing-library/react";

// Add in any providers here if necessary:
type ProvidersProps = {
    children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
    return children;
};

const customRender = (ui: React.ReactElement, options?: any) =>
    render(ui, { wrapper: Providers as React.ComponentType, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };