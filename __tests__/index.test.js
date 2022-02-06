import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders Home", () => {
    render(<Home />);
  });
  it("renders Feeling hungry?", () => {
    render(<Home />);

    const text = screen.getByText('Feeling hungry?', {exact: false})
    expect(text).toBeInTheDocument();
  });
  it("renders Giovanni", () => {
    render(<Home />);

    const text = screen.getByText('Giovanni', {exact: false})
    expect(text).toBeInTheDocument();
  });
  it("renders Order Button", () => {
    render(<Home />);

    const text = screen.getByText('Order a sandwich', {exact: false})
    expect(text).toBeInTheDocument();
  });
});
