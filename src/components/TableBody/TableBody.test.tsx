import { render, screen } from "@testing-library/react";
import { TableBody } from "./TableBody";

describe("TableBody Render Gracefully", () => {
  it("should init correctly tbody cells", () => {
    render(
      <table>
        <TableBody
          displayedData={[
            { column1: "data1", column2: "data2", column3: "data3" },
          ]}
          displayLength={10}
          pageNumber={1}
          sortedColumn={"column1"}
          tableHeadContents={["column1", "column2", "column3"]}
        />
      </table>
    );
    const columns = screen.getAllByRole("row");
    expect(columns).toHaveLength(1);
  });

  it("should handle empty data", () => {
    render(
      <table>
        <TableBody
          displayedData={[]}
          displayLength={10}
          pageNumber={1}
          sortedColumn={"column1"}
          tableHeadContents={["column1", "column2", "column3"]}
        />
      </table>
    );
    const noDataMessage = screen.getByText("No matching records found");
    expect(noDataMessage).toBeInTheDocument();
    const columnCount = screen
      .getByTestId("column-count")
      .getAttribute("colspan");
    expect(columnCount).toBe("3");
  });

  it("should apply correct className based on row index", () => {
    render(
      <table>
        <TableBody
          displayedData={[
            { column1: "data1", column2: "data2", column3: "data3" },
            { column1: "data4", column2: "data5", column3: "data6" },
          ]}
          displayLength={10}
          pageNumber={1}
          sortedColumn={"column1"}
          tableHeadContents={["column1", "column2", "column3"]}
        />
      </table>
    );
    const rows = screen.getAllByRole("row");
    expect(rows[0]).toHaveClass("pmf-tableBody-row-odd");
    expect(rows[0]).not.toHaveClass("pmf-tableBody-row-even");
    expect(rows[1]).toHaveClass("pmf-tableBody-row-even");
    expect(rows[1]).not.toHaveClass("pmf-tableBody-row-odd");
  });
  it("should apply correct className based on cell index", () => {
    render(
      <table>
        <TableBody
          displayedData={[
            { column1: "data1", column2: "data2", column3: "data3" },
            { column1: "data4", column2: "data5", column3: "data6" },
          ]}
          displayLength={10}
          pageNumber={1}
          sortedColumn={"column1"}
          tableHeadContents={["column1", "column2", "column3"]}
        />
      </table>
    );
    const cells = screen.getAllByRole("cell");
    const nonSortedCell = cells.filter(
      (cell) =>
        cell.textContent === "data2" ||
        cell.textContent === "data3" ||
        cell.textContent === "data5" ||
        cell.textContent === "data6"
    );
    const sortedColumnCells = cells.filter(
      (cell) => cell.textContent === "data1" || cell.textContent === "data4"
    );
    expect(
      nonSortedCell.every((className) =>
        className.classList.contains("pmf-tableBody-cell")
      )
    ).toBe(true);
    expect(
      nonSortedCell.every((className) =>
        className.classList.contains("pmf-tableBody-cell-sorting-odd")
      )
    ).not.toBe(true);
    expect(
      nonSortedCell.every((className) =>
        className.classList.contains("pmf-tableBody-cell-sorting-even")
      )
    ).not.toBe(true);
    expect(sortedColumnCells[0]).toHaveClass(
      "pmf-tableBody-cell pmf-tableBody-cell-sorting-odd"
    );
    expect(sortedColumnCells[1]).toHaveClass(
      "pmf-tableBody-cell pmf-tableBody-cell-sorting-even"
    );
  });
});
