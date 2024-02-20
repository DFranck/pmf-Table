import { useEffect, useState } from "react";
import "./tableFilter.css";

export const TableFilter = ({
  setInputValue,
  setPageNumber,
}: {
  setInputValue: (value: string) => void;
  setPageNumber: (num: number) => void;
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <label
        htmlFor="pmf-tableFilter-input"
        className="pmf-tableFilter-label desktop"
      >
        {isMobile ? (
          <input
            className="pmf-tableFilter-input desktop"
            id="pmf-tableFilter-input"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setInputValue(e.target.value);
              setPageNumber(1);
            }}
          />
        ) : (
          <>
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
          </>
        )}
      </label>
    </>
  );
};
