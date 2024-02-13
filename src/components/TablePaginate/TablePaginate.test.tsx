import { render, screen } from "@testing-library/react";
import { TablePaginate } from "./TablePaginate";

describe("TablePaginate Render Gracefully", () => {
  it("should init correctly", () => {
    const setPageNumber = jest.fn();
    const { rerender } = render(
      <TablePaginate
        displayLength={10}
        totalLength={26}
        pageNumber={1}
        setPageNumber={setPageNumber}
      />
    );
    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons.length).toBe(5);
    expect(paginationButtons[0]).toHaveTextContent("Previous");
    expect(paginationButtons[0]).toHaveClass(
      "pmf-tablePaginate-button-disabled pmf-tablePaginate-button-previous"
    );
    expect(paginationButtons[4]).toHaveClass(
      "pmf-tablePaginate-button pmf-tablePaginate-button-next"
    );
    rerender(
      <TablePaginate
        displayLength={10}
        totalLength={26}
        pageNumber={3}
        setPageNumber={setPageNumber}
      />
    );
    expect(paginationButtons[0]).toHaveClass(
      "pmf-tablePaginate-button pmf-tablePaginate-button-previous"
    );
    expect(paginationButtons[4]).toHaveClass(
      "pmf-tablePaginate-button-disabled pmf-tablePaginate-button-next"
    );
  });
  it("should change correctly", () => {
    const setPageNumber = jest.fn();
    render(
      <TablePaginate
        displayLength={10}
        totalLength={26}
        pageNumber={2}
        setPageNumber={setPageNumber}
      />
    );

    const nextButton = screen.getByText("Next");
    nextButton.click();
    expect(setPageNumber).toHaveBeenCalledWith(expect.any(Function));

    const previousButton = screen.getByText("Previous");
    previousButton.click();
    expect(setPageNumber).toHaveBeenCalledWith(expect.any(Function));
  });
});
