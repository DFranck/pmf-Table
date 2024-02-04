import { dataType } from "../Types/dataType";
import "./tableBody.css";
export const TableBody = ({
  displayLength,
  pageNumber,
  displayedData,
  sortedColumn,
  tableHeadContents,
}: {
  pageNumber: number;
  displayLength: number;
  displayedData: dataType;
  sortedColumn: string;
  tableHeadContents: string[];
}) => {
  const dataPage = displayedData.slice(
    (pageNumber - 1) * displayLength,
    pageNumber * displayLength
  );
  const columnKeys = Object.keys(displayedData[0] || {});
  const sortedColumnIndex = columnKeys.indexOf(sortedColumn);
  const columnCount = Object.keys(tableHeadContents[0] || {}).length;
  return (
    <tbody className="pmf-tableBody">
      {dataPage.length > 0 ? (
        dataPage.map((row, rowIndex) => (
          <tr
            role="row"
            key={`${row} + ${rowIndex}`}
            className={
              rowIndex % 2 === 0
                ? "pmf-tableBody-row-odd"
                : "pmf-tableBody-row-even"
            }
          >
            {Object.values(row).map((cell, cellIndex) => (
              <td
                key={`${cell} + ${cellIndex}`}
                className={
                  cellIndex === sortedColumnIndex
                    ? rowIndex % 2 === 0
                      ? "pmf-tableBody-cell pmf-tableBody-cell-sorting-odd"
                      : "pmf-tableBody-cell pmf-tableBody-cell-sorting-even"
                    : "pmf-tableBody-cell"
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr role="row">
          <td
            colSpan={columnCount}
            className="pmf-tableBody-cell pmf-tableBody-cell-noData"
          >
            No matching records found
          </td>
        </tr>
      )}
    </tbody>
  );
};
