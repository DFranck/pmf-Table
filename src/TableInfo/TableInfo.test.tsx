import { render } from "@testing-library/react";
import { TableInfo } from "./TableInfo";

describe("TableInfo Component", () => {
  it("displays correct range of entries when total length is greater than display length", () => {
    const { getByText } = render(
      <TableInfo
        displayLength={10}
        totalLength={100}
        pageNumber={2}
        data={[]}
      />
    );
    expect(getByText("Showing 11 to 20 of 100 entries")).toBeInTheDocument();
  });

  test("displays correct range of entries when total length is less than display length", () => {
    const { getByText } = render(
      <TableInfo displayLength={10} totalLength={8} pageNumber={1} data={[]} />
    );
    expect(getByText("Showing 1 to 8 of 8 entries")).toBeInTheDocument();
  });

  test("displays filtered entries when total data length is greater than total length", () => {
    const { getByText } = render(
      <TableInfo
        displayLength={10}
        totalLength={100}
        pageNumber={1}
        data={[]}
      />
    );
    expect(
      getByText("(filtered from {totalDataLength} total entries)")
    ).toBeInTheDocument();
  });
});
