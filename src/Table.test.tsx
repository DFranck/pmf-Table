import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table component", () => {
  const testData = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Doe", age: 40 },
  ];

  it("renders the table with data", () => {
    render(<Table data={testData} />);
    const tableHeaders = screen.getAllByRole("columnheader");
    const tableRows = screen.getAllByRole("row");

    expect(tableHeaders).toHaveLength(3);
    expect(tableRows).toHaveLength(4);
  });

  it("renders 'no data' message when data prop is empty", () => {
    render(<Table />);
    const noDataMessage = screen.getByText("no data");
    expect(noDataMessage).toBeInTheDocument();
  });
});
