import { render, screen } from "@testing-library/react";
import { TableInfo } from "./TableInfo";
describe("TableInfo Render Gracefully", () => {
  it("should render correctly if only one page", () => {
    render(
      <TableInfo
        displayLength={10}
        totalLength={100}
        pageNumber={1}
        data={[]}
      />
    );
    const textElement = screen.getByText("Showing 1 to 10 of 100 entries");
    expect(textElement).toBeInTheDocument();
  });
  it("should render correctly if more than one page", () => {
    render(
      <TableInfo
        displayLength={25}
        totalLength={100}
        pageNumber={2}
        data={[]}
      />
    );
    const textElement = screen.getByText("Showing 26 to 50 of 100 entries");
    expect(textElement).toBeInTheDocument();
  });
  it("should render correctly if filtered data", () => {
    const data = [{}, {}, {}, {}, {}];
    render(
      <>
        <TableInfo
          displayLength={0}
          totalLength={0}
          pageNumber={0}
          data={data}
        />
      </>
    );
    const textElement = screen.getByText("Showing 0 to 0 of 0 entries");
    expect(textElement).toBeInTheDocument();
    const totalDataLength = data.length;
    expect(
      screen.getByText(`(filtered from ${totalDataLength} total entries)`)
    ).toBeInTheDocument();
  });
});
