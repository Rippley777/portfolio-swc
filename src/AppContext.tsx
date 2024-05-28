import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { years } from "./mock-data/app";

type AppContextType = {
  activeYear: number;
  updateActiveYear: React.Dispatch<number>;
  scrollPositionX: number;
  setScrollPositionX: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeYear, setActiveYear] = useState(0);
  const [scrollPositionX, setScrollPositionX] = useState(0);

  const updateActiveYear = (year: number) => {
    const selectedYear = years.find((y) => y.year === year);
    // const startPosition = years.find((y) => y.year === year)?.startPosition;
    if (selectedYear) {
      setScrollPositionX(selectedYear.startPosition + 50);
    }
  };

  useEffect(() => {
    const current = years.find(
      (year) =>
        scrollPositionX > year.startPosition &&
        scrollPositionX < year.endPosition
    )?.year;
    if (current !== activeYear) {
      setActiveYear(current ?? 0);
    }
  }, [scrollPositionX, activeYear]);

  return (
    <AppContext.Provider
      value={{
        activeYear,
        updateActiveYear,
        scrollPositionX,
        setScrollPositionX,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
