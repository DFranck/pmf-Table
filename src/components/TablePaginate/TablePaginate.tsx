import { changePage, creatPageLinks } from "../tableFunction";
import "./tablePaginate.css";
export const TablePaginate = ({
  displayLength,
  totalLength,
  setPageNumber,
  pageNumber,
}: {
  displayLength: number;
  totalLength: number;
  setPageNumber: (num: number | ((currentPage: number) => number)) => void;
  pageNumber: number;
}) => {
  const numberOfPage = Math.ceil(totalLength / displayLength);
  const links = creatPageLinks(numberOfPage, setPageNumber, pageNumber);
  return (
    <nav className=" pmf-tablePaginate">
      <button
        className={
          pageNumber === 1
            ? "pmf-tablePaginate-button-disabled pmf-tablePaginate-button-previous"
            : "pmf-tablePaginate-button pmf-tablePaginate-button-previous"
        }
        onClick={(e) => changePage(e, setPageNumber, numberOfPage)}
      >
        Previous
      </button>
      <span>{links}</span>
      <button
        className={
          pageNumber === numberOfPage
            ? "pmf-tablePaginate-button-disabled pmf-tablePaginate-button-next"
            : "pmf-tablePaginate-button pmf-tablePaginate-button-next"
        }
        onClick={(e) => changePage(e, setPageNumber, numberOfPage)}
      >
        Next
      </button>
    </nav>
  );
};
