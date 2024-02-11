import { render, screen, waitFor } from "@testing-library/react";
import Table from "./Table";

describe("Table component", () => {
  let testData = [
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
  it('TableHeaderContents should be ["Id", "Name", "Age"]', async () => {
    const { rerender, container } = render(<Table data={testData} />);

    await waitFor(() => expect(container).toBeInTheDocument());

    testData = [
      { id: 1, name: "George", age: 50 },
      { id: 2, name: "Jaine", age: 20 },
      { id: 3, name: "Lima", age: 33 },
    ];

    rerender(<Table data={testData} />);

    const tableHeaders = screen.getAllByRole("columnheader");

    expect(tableHeaders.map((element) => element.textContent)).toEqual([
      "Id",
      "Name",
      "Age",
    ]);
  });
  it("renders 'no data' message when data prop is empty", () => {
    render(<Table />);
    const noDataMessage = screen.getByText("No data available in table");
    expect(noDataMessage).toBeInTheDocument();
  });
});
