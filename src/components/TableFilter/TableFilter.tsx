import "./tableFilter.css";
export const TableFilter = ({
  setInputValue,
  setPageNumber,
}: {
  setInputValue: (value: string) => void;
  setPageNumber: (num: number) => void;
}) => {
  return (
    <>
      <label
        htmlFor="pmf-tableFilter-input"
        className="pmf-tableFilter-label desktop"
      >
        Search:
        <input
          className="pmf-tableFilter-input desktop"
          id="pmf-tableFilter-input"
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
            setPageNumber(1);
          }}
        />
      </label>
      <label
        htmlFor="pmf-tableFilter-input"
        className="pmf-tableFilter-label mobile"
      >
        <input
          className="pmf-tableFilter-input mobile"
          id="pmf-tableFilter-input"
          type="text"
          placeholder="Search:"
          onChange={(e) => {
            setInputValue(e.target.value);
            setPageNumber(1);
          }}
        />
      </label>
    </>
  );
};
