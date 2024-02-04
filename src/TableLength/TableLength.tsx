import "./tableLength.css";
export const TableLength = ({
  setDisplayLength,
}: {
  setDisplayLength: (num: number) => void;
}) => {
  return (
    <label htmlFor="pmf-tableLength-select" className="pmf-tableLength-label">
      Show
      <select
        name="pmf-tableLength-select"
        id="pmf-tableLength-select"
        onChange={(e) => setDisplayLength(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      entries
    </label>
  );
};
