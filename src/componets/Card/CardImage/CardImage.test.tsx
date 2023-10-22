// CardImage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardImage from "./CardImage"; // Asegúrate de que la ruta sea la correcta

describe("CardImage", () => {
  it("should render without crashing", () => {
    render(
      <CardImage
        altText="Test Alt Text"
        imageUrl="https://test.com/image.jpg"
      />
    );
  });

  it("should have correct src and alt attributes", () => {
    render(
      <CardImage
        altText="Test Alt Text"
        imageUrl="https://test.com/image.jpg"
      />
    );

    const imgElement = screen.getByRole("img");

    expect(imgElement).toHaveAttribute("src", "https://test.com/image.jpg");
    expect(imgElement).toHaveAttribute("alt", "Test Alt Text");
  });
});
