import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NewOrderForm from "../components/NewOrderForm";

describe("NewOrderForm", () => {
  it("renders NewOrderForm Component", () => {
    render(<NewOrderForm />);
  });
  it("renders Submit Order button", () => {
    render(<NewOrderForm />);
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
  });
  it("renders Name label", () => {
    render(<NewOrderForm />);
    const label = screen.getByLabelText('Name')
    expect(label).toBeInTheDocument();
  });
  it("renders Amount label", () => {
    render(<NewOrderForm />);
    const label = screen.getByLabelText('Amount')
    expect(label).toBeInTheDocument();
  });


  
});
