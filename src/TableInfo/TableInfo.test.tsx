import { render, screen } from "@testing-library/react";
import { TableInfo } from "./TableInfo";
describe("TableInfo Render Gracefully", () => {
  it("should render correctly", () => {
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
});
