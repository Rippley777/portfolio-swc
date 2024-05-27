import React from "react";
import { useAppContext } from "../../../AppContext";
import { twMerge } from "tailwind-merge";

const getIsActive = (
  scrollPositionX: number,
  valueStart: number,
  valueEnd: number
) => {
  return scrollPositionX >= valueStart && scrollPositionX < valueEnd;
};

type ActiveYearProps = {
  year: number;
  scrollPositionX: number;
  startPosition: number;
  endPosition: number;
};
const activeStyles = "text-blue-400";
const years = [
  {
    year: 2024,
    startPosition: 0,
    endPosition: 1300,
  },
  {
    year: 2023,
    startPosition: 1300,
    endPosition: 1800,
  },
  { year: 2022, startPosition: 1800, endPosition: 2200 },
  { year: 2021, startPosition: 2200, endPosition: 2600 },
  { year: 2020, startPosition: 2600, endPosition: 3000 },
  { year: 2019, startPosition: 3000, endPosition: 3400 },
  { year: 2018, startPosition: 3400, endPosition: 4000 },
  { year: 2017, startPosition: 4000, endPosition: 5300 },
  { year: 2016, startPosition: 5300, endPosition: 6400 },
  // 5 6000 7000
  { year: 2015, startPosition: 6400, endPosition: 7000 },
  // 6 7000 8000
  { year: 2014, startPosition: 7000, endPosition: 8200 },
  // 7 8000 9000
  { year: 2013, startPosition: 8200, endPosition: 8600 },
  { year: 2012, startPosition: 8600, endPosition: 9000 },
  // 8 9000 10000
  { year: 2008, startPosition: 9000, endPosition: 10000 },

  // 9 10000 11000
  { year: 2003, startPosition: 10000, endPosition: 11000 },

  // 10 12000 13000
  { year: 1998, startPosition: 11000, endPosition: 12000 },

  //11 13000 14000
  { year: 1995, startPosition: 12000, endPosition: 13000 },
];
const ActiveYear: React.FC<ActiveYearProps> = ({
  year,
  scrollPositionX,
  startPosition,
  endPosition,
}) => {
  return (
    <div
      className={twMerge(
        "text-xl",
        getIsActive(scrollPositionX, startPosition, endPosition) && activeStyles
      )}
    >
      {year}
    </div>
  );
};
const ActiveYears: React.FC = () => {
  const { scrollPositionX } = useAppContext();

  return (
    <div
      style={{}}
      className="top-[5vh] fixed m-8 mt-16 text-gray-400 space-y-5"
    >
      {years.map((year, i) => (
        <ActiveYear
          key={i}
          year={year.year}
          scrollPositionX={scrollPositionX}
          startPosition={year.startPosition}
          endPosition={year.endPosition}
        />
      ))}
    </div>
  );
};

export default ActiveYears;
