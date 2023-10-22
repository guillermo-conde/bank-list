// CardBody.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardBody from "./CardBody"; // Asegúrate de que la ruta sea la correcta

describe("CardBody", () => {
  it("should render without crashing", () => {
    render(
      <CardBody
        bankName="Test Bank"
        bankDescription="Test Description"
        bankAge={10}
      />
    );
  });

  it("should display the correct bank name", () => {
    render(
      <CardBody
        bankName="Test Bank"
        bankDescription="Test Description"
        bankAge={10}
      />
    );
    expect(screen.getByText("Test Bank")).toBeInTheDocument();
  });

  it("should display the correct bank description", () => {
    render(
      <CardBody
        bankName="Test Bank"
        bankDescription="Test Description"
        bankAge={10}
      />
    );
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should display the correct bank age", async () => {
    render(
      <CardBody
        bankName="Test Bank"
        bankDescription="Test Description"
        bankAge={10}
      />
    );
    const ageElement = await screen.findByText((content, element) => {
      return element?.textContent === "Edad: 10";
    });
    expect(ageElement).toBeInTheDocument();
  });
});
