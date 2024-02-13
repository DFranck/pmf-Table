import { fireEvent, render, screen } from "@testing-library/react";
import { TableLength } from "./TableLength";

describe("TableLength Render Gracefully", () => {
  it("should init correctly", () => {
    const setDisplayLength = jest.fn();
    render(<TableLength setDisplayLength={setDisplayLength} />);
    const selectElement = screen.getByRole("combobox", { name: /show/i });

    expect(selectElement).toBeInTheDocument();
  });

  it("should change correctly", () => {
    const setDisplayLength = jest.fn();
    render(<TableLength setDisplayLength={setDisplayLength} />);
    const selectElement = screen.getByRole("combobox", { name: /show/i });

    fireEvent.change(selectElement, { target: { value: "25" } });
    expect(setDisplayLength).toHaveBeenCalledWith(25);
  });
});
