import { dataType } from "./Types/dataType";

export const sortAndFilter = (
  data: dataType,
  sortDirection: string,
  sortedColumn: string,
  inputValue: string,
  setDisplayedData: (data: dataType) => void
) => {
  let filtredData = data;
  let sortedData;
  const filter = (data: dataType, inputValue: string) => {
    filtredData = [...data].filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });
    });
  };
  const sort = (sortedColumn: string, sortDirection: string) => {
    const parseDate = (dateString: string): Date => {
      const parts = dateString.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      return new Date(year, month - 1, day);
    };

    const sortedDirection =
      sortDirection === "pmf-tableHead-cell-sorting-asc" ? 1 : -1;
    sortedData = [...filtredData].sort((a, b) => {
      if (sortedColumn === "dateOfBirth" || sortedColumn === "startDate") {
        const dateA = parseDate(String(a[sortedColumn]));
        const dateB = parseDate(String(b[sortedColumn]));
        return dateA > dateB ? sortedDirection : -sortedDirection;
      } else {
        if (a[sortedColumn] === b[sortedColumn]) return 0;
        return a[sortedColumn] > b[sortedColumn]
          ? sortedDirection
          : -sortedDirection;
      }
    });
  };
  inputValue ? filter(data, inputValue) : (filtredData = data);
  sort(sortedColumn, sortDirection);
  if (sortedData) setDisplayedData(sortedData);
};

export const setDirectionAndColumn = (
  cell: string,
  e: React.MouseEvent<HTMLTableCellElement>,
  setSortDirection: (direction: string) => void,
  setSortedColumn: (column: string) => void
) => {
  const targetClass = (e.target as HTMLButtonElement).className;
  switch (targetClass) {
    case "pmf-tableHead-cell-sorting-asc":
      setSortDirection("pmf-tableHead-cell-sorting-desc");
      setSortedColumn(cell);
      break;
    case "pmf-tableHead-cell-sorting-desc":
      setSortDirection("pmf-tableHead-cell-sorting-asc");
      setSortedColumn(cell);
      break;
    default:
      setSortDirection("pmf-tableHead-cell-sorting-asc");
      setSortedColumn(cell);
      break;
  }
};

export const creatPageLinks = (
  numberOfPage: number,
  setPageNumber: (num: number | ((currentPage: number) => number)) => void,
  pageNumber: number
) => {
  const links = [];
  for (let i = 0; i < numberOfPage; i++) {
    const newPage = i + 1;
    links.push(
      <button
        id={String(newPage)}
        className={
          pageNumber === newPage
            ? "pmf-tablePaginate-button-active pmf-tablePaginate-button-" +
              newPage
            : "pmf-tablePaginate-button pmf-tablePaginate-button-" + newPage
        }
        key={i}
        onClick={(e) => changePage(e, setPageNumber, numberOfPage)}
      >
        {i + 1}
      </button>
    );
  }
  return links;
};

export const changePage = (
  e: React.MouseEvent<HTMLButtonElement>,
  setPageNumber: (num: number | ((currentPage: number) => number)) => void,
  numberOfPage: number
) => {
  const buttonCliked = (e.target as HTMLButtonElement).textContent;
  switch (buttonCliked) {
    case "Previous":
      setPageNumber((currentPage: number) => Math.max(currentPage - 1, 1));
      break;
    case "Next":
      setPageNumber((currentPage: number) =>
        Math.min(currentPage + 1, numberOfPage)
      );
      break;
    default:
      if (buttonCliked !== null) setPageNumber(parseInt(buttonCliked));
  }
};
