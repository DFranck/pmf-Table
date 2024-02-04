import "./tableFilter.css";
export const TableFilter = ({
  setInputValue,
  setPageNumber,
}: {
  setInputValue: (value: string) => void;
  setPageNumber: (num: number) => void;
}) => {
  return (
    <label htmlFor="pmf-tableFilter-input" className="pmf-tableFilter-label">
      Search:
      <input
        id="pmf-tableFilter-input"
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
          setPageNumber(1);
        }}
      />
    </label>
  );
};
