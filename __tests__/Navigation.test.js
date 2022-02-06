import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementation(() => ({
    pathname: "/",
  }));
  it("renders Navigation Component", () => {
    render(<Navigation />);
  });
  it("renders Logo text", () => {
    render(<Navigation />);
    const text = screen.getByText('Giovanni', {exact: false})
    expect(text).toBeInTheDocument();
  });
  it("renders Add New Order anchor", () => {
    render(<Navigation />);
    const text = screen.getByText('Add New Order')
    expect(text).toBeInTheDocument();
  });
  it("renders Order Schedule anchor", () => {
    render(<Navigation />);
    const text = screen.getByText('Order Schedule')
    expect(text).toBeInTheDocument();
  });
});
