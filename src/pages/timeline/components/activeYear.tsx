import React from "react";
import { useAppContext } from "../../../AppContext";
import { twMerge } from "tailwind-merge";
import { years } from "../../../mock-data/app";

type ActiveYearProps = {
  year: number;
  index: number;
  activeYear: number;
  activeIndex: number;
};
const activeStyles = "text-white text-2xl font-semibold";

const ActiveYear: React.FC<ActiveYearProps> = ({
  year,
  activeYear,
  index,
  activeIndex,
}) => {
  const { updateActiveYear } = useAppContext();

  return (
    <div
      onClick={() => updateActiveYear(year)}
      style={{ opacity: 1 - Math.abs(activeIndex - index) * 0.1 }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          updateActiveYear(year);
        }
      }}
      className={twMerge(
        "text-xl cursor-pointer",
        activeYear === year && activeStyles
      )}
      aria-pressed={activeYear === year}
      role="button"
      tabIndex={0}
    >
      {year}
    </div>
  );
};
const getOffset = (year: number) => {
  if (year === 0) return 0;
  if (year === 2008) return 13 * -48;
  if (year === 2003) return 14 * -48;
  if (year === 1998) return 15 * -48;
  if (year === 1995) return 16 * -48;
  return (new Date().getFullYear() - year) * -48;
};
const ActiveYears: React.FC = () => {
  const { activeYear } = useAppContext();

  const activeIndex = years.findIndex((year) => year.year === activeYear);
  return (
    <div
      aria-label="Direct to Year Navigation"
      style={{
        transform: `translateY(${getOffset(activeYear)}px)`,
      }}
      className="top-[49.5vh] sm:top-[50vh] fixed ml-5 sm:ml-12 text-gray-400 space-y-5 text-center"
    >
      {years.map((year, i) => (
        <ActiveYear
          key={i}
          year={year.year}
          index={i}
          activeYear={activeYear}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
};

export default ActiveYears;
