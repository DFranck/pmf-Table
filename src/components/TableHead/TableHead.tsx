import sortAscIcon from "../img/sort_asc.png";
import sortBothIcon from "../img/sort_both.png";
import sortDescIcon from "../img/sort_desc.png";
import { setDirectionAndColumn } from "../tableFunction";
import "./tableHead.css";
export const TableHead = ({
  sortDirection,
  sortedColumn,
  setSortedColumn,
  setSortDirection,
  tableHeadContents,
}: {
  sortDirection: string;
  sortedColumn: string;
  setSortedColumn: (column: string) => void;
  setSortDirection: (direction: string) => void;
  tableHeadContents: string[];
}) => {
  return (
    <thead className="pmf-tableHead">
      <tr className="pmf-tableHead-row">
        {tableHeadContents.map((cell, cellIndex) => (
          <th
            key={cell + cellIndex}
            onClick={(e) =>
              setDirectionAndColumn(cell, e, setSortDirection, setSortedColumn)
            }
            style={{
              backgroundImage: `url(${
                cell === sortedColumn
                  ? sortDirection === "pmf-tableHead-cell-sorting-asc"
                    ? sortAscIcon
                    : sortDirection === "pmf-tableHead-cell-sorting-desc"
                    ? sortDescIcon
                    : sortBothIcon
                  : sortBothIcon
              })`,
            }}
            className={
              cell === sortedColumn
                ? sortDirection
                : "pmf-tableHead-cell-sorting"
            }
          >
            {cell.charAt(0).toUpperCase() +
              cell.slice(1).replace(/([A-Z])/g, " $1")}
          </th>
        ))}
      </tr>
    </thead>
  );
};
