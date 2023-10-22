import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

describe("Card", () => {
  const mockBankInfo = {
    description: "Banco Paga Todo es Para Todos",
    age: 10,
    url: "https://some-image-url.com",
    bankName: "Paga Todo",
  };

  it("should render without crashing", () => {
    render(<Card bankInfo={mockBankInfo} />);
  });

  it("should display the correct bank name", () => {
    render(<Card bankInfo={mockBankInfo} />);
    expect(screen.getByText("Paga Todo")).toBeInTheDocument();
  });

  it("should display the correct bank description", () => {
    render(<Card bankInfo={mockBankInfo} />);
    expect(
      screen.getByText("Banco Paga Todo es Para Todos")
    ).toBeInTheDocument();
  });

  it("should display the correct bank age", async () => {
    render(<Card bankInfo={mockBankInfo} />);
    const ageElement = await screen.findByText((content, element) => {
      return element?.textContent === "Edad: 10";
    });
    expect(ageElement).toBeInTheDocument();
  });

  it("should display the correct bank image", () => {
    render(<Card bankInfo={mockBankInfo} />);
    const img = screen.getByRole("img", { name: /Paga Todo/i });
    expect(img).toHaveAttribute("src", "https://some-image-url.com");
  });
});
