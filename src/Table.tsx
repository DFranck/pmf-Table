//dependencies
import { useEffect, useState } from "react";
//subComponents
import { TableBody } from "./TableBody/TableBody";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableHead } from "./TableHead/TableHead";
import { TableInfo } from "./TableInfo/TableInfo";
import { TableLength } from "./TableLength/TableLength";
import { TablePaginate } from "./TablePaginate/TablePaginate";
//minimals styles
import "./style.css";
//functions
import { sortAndFilter } from "./tableFunction";
//types
import { dataType } from "./Types/dataType";
export default function Table({ data }: { data?: dataType }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [displayLength, setDisplayLength] = useState(10);
  const [displayedData, setDisplayedData] = useState(data ?? []);
  const [sortedColumn, setSortedColumn] = useState(
    data ? Object.keys(data[0])[0] : ""
  );
  const [sortDirection, setSortDirection] = useState(
    "pmf-tableHead-cell-sorting-asc"
  );
  const [inputValue, setInputValue] = useState("");
  const [tableHeadContents, setTableHeadContents] = useState<string[]>([]);
  //useEffect for re-render when user sort or filter the table
  useEffect(() => {
    if (data) {
      setTableHeadContents(data ? Object.keys(data[0]) : []);
      sortAndFilter(
        data,
        sortDirection,
        sortedColumn,
        inputValue,
        setDisplayedData
      );
    }
  }, [data, sortDirection, sortedColumn, inputValue]);

  return data ? (
    <section className="pmf-tableWrapper">
      <header className="pmf-tableHeader">
        <TableLength setDisplayLength={setDisplayLength} />
        <TableFilter
          setInputValue={setInputValue}
          setPageNumber={setPageNumber}
        />
      </header>
      <table className="pmf-table">
        <TableHead
          tableHeadContents={tableHeadContents}
          sortedColumn={sortedColumn}
          setSortedColumn={setSortedColumn}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <TableBody
          displayedData={displayedData}
          displayLength={displayLength}
          pageNumber={pageNumber}
          sortedColumn={sortedColumn}
          tableHeadContents={tableHeadContents}
        />
      </table>
      <footer className="pmf-tableFooter">
        <TableInfo
          displayLength={displayLength}
          totalLength={displayedData.length}
          pageNumber={pageNumber}
          data={data}
        />
        <TablePaginate
          displayLength={displayLength}
          totalLength={displayedData.length}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </footer>
    </section>
  ) : (
    <section className="pmf-tableWrapper">
      <header className="pmf-tableHeader">
        <TableLength setDisplayLength={setDisplayLength} />
        <TableFilter
          setInputValue={setInputValue}
          setPageNumber={setPageNumber}
        />
      </header>
      <table className="pmf-table">
        <TableHead
          tableHeadContents={tableHeadContents}
          sortedColumn={sortedColumn}
          setSortedColumn={setSortedColumn}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <TableBody
          displayedData={displayedData}
          displayLength={displayLength}
          pageNumber={pageNumber}
          sortedColumn={sortedColumn}
          tableHeadContents={tableHeadContents}
        />
      </table>
      <footer className="pmf-tableFooter">
        <TableInfo
          displayLength={displayLength}
          totalLength={displayedData.length}
          pageNumber={pageNumber}
          data={[]}
        />
        <TablePaginate
          displayLength={displayLength}
          totalLength={displayedData.length}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </footer>
    </section>
  );
}
