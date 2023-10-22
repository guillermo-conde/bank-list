import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardContainer from "./CardContainer"; // Asegúrate de que la ruta sea la correcta

describe("CardContainer", () => {
  it("should render without crashing", () => {
    render(
      <CardContainer>
        <div data-testid="test-child"></div>
      </CardContainer>
    );
  });

  it("should render its children", () => {
    render(
      <CardContainer>
        <div data-testid="test-child"></div>
      </CardContainer>
    );
    const child = screen.getByTestId("test-child");
    expect(child).toBeInTheDocument();
  });
});
