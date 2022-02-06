import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Schedule from "../pages/schedule/index";

describe("Schedule", () => {
  it("renders Schedule", () => {
    render(<Schedule />);
  });
  it("renders text when items are empty array", () => {
    const emptyArray = [];
    render(<Schedule items={emptyArray} />);
    const items = [];
    const text = screen.getByText("There are no pending orders", {
      exact: false,
    });
    expect(text).toBeInTheDocument();
  });

  it("no to render text when items is not empty array", () => {
    const dummy_items = [
      {
        id: 1,
        duration: 2.5,
        text: "Make 1 sandwich for Alfi",
        status: "pending",
      },
    ];
    render(<Schedule items={dummy_items} />);

    const text = screen.queryByText("There are no pending orders", {
      exact: false,
    });
    expect(text).toBeNull();
  });
});
