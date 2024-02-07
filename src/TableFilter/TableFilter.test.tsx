import { fireEvent, render, screen } from "@testing-library/react";
import { TableFilter } from "./TableFilter";

describe("TableFilter Render Gracefully", () => {
  it("should init correctly", () => {
    const setInputValue = jest.fn();
    const setPageNumber = jest.fn();
    render(
      <TableFilter
        setInputValue={setInputValue}
        setPageNumber={setPageNumber}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.id).toBe("pmf-tableFilter-input");
  });
  it("should change correctly", () => {
    const setInputValue = jest.fn();
    const setPageNumber = jest.fn();
    render(
      <TableFilter
        setInputValue={setInputValue}
        setPageNumber={setPageNumber}
      />
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(setInputValue).toHaveBeenCalledWith("test");
    expect(setPageNumber).toHaveBeenCalledWith(1);
  });
});
