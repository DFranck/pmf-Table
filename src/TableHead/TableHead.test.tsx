import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TableHead } from "./TableHead";

describe("TableHead Render Gracefully", () => {
  it("should init correctly thead cells", async () => {
    const setSortedColumn = jest.fn();
    const setSortDirection = jest.fn();
    render(
      <TableHead
        sortDirection={"pmf-tableHead-cell-sorting-asc"}
        sortedColumn={"column1"}
        setSortedColumn={setSortedColumn}
        setSortDirection={setSortDirection}
        tableHeadContents={["column1", "column2", "column3"]}
      />
    );
    const column = screen.getAllByRole("columnheader");
    expect(column).toHaveLength(3);
    expect(column[0]).toHaveTextContent("Column1");
    expect(column[1]).toHaveTextContent("Column2");
    expect(column[2]).toHaveTextContent("Column3");
    expect(column[0]).toHaveClass("pmf-tableHead-cell-sorting-asc");
    expect(column[1]).toHaveClass("pmf-tableHead-cell-sorting");
    expect(column[2]).toHaveClass("pmf-tableHead-cell-sorting");
  });
  it("should re-render correctly thead cells after click", async () => {
    const setSortedColumn = jest.fn();
    const setSortDirection = jest.fn();
    const { rerender } = render(
      <TableHead
        sortDirection={"pmf-tableHead-cell-sorting-asc"}
        sortedColumn={"column1"}
        setSortedColumn={setSortedColumn}
        setSortDirection={setSortDirection}
        tableHeadContents={["column1", "column2", "column3"]}
      />
    );
    const column = screen.getAllByRole("columnheader");
    fireEvent.click(column[1]);
    await waitFor(() => {
      expect(setSortDirection).toHaveBeenCalledWith(
        "pmf-tableHead-cell-sorting-asc"
      );
      expect(setSortedColumn).toHaveBeenCalledWith("column2");
    });

    rerender(
      <TableHead
        sortDirection={"pmf-tableHead-cell-sorting-asc"}
        sortedColumn={"column2"}
        setSortedColumn={setSortedColumn}
        setSortDirection={setSortDirection}
        tableHeadContents={["column1", "column2", "column3"]}
      />
    );

    fireEvent.click(column[1]);
    await waitFor(() => {
      expect(setSortDirection).toHaveBeenCalledWith(
        "pmf-tableHead-cell-sorting-desc"
      );
      expect(setSortedColumn).toHaveBeenCalledWith("column2");
    });

    rerender(
      <TableHead
        sortDirection={"pmf-tableHead-cell-sorting-desc"}
        sortedColumn={"column2"}
        setSortedColumn={setSortedColumn}
        setSortDirection={setSortDirection}
        tableHeadContents={["column1", "column2", "column3"]}
      />
    );

    fireEvent.click(column[1]);
    await waitFor(() => {
      expect(setSortDirection).toHaveBeenCalledWith(
        "pmf-tableHead-cell-sorting-asc"
      );
      expect(setSortedColumn).toHaveBeenCalledWith("column2");
    });
  });
});
