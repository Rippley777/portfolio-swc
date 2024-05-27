import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  scrollPositionX: number;
  setScrollPositionX: React.Dispatch<React.SetStateAction<number>>;

  // Add other states and functions as needed
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // const [face, setFace] = useState(0);
  const [scrollPositionX, setScrollPositionX] = useState(0);
  // console.log("Face:", face);
  console.log("Scroll position X:", scrollPositionX);

  // Add other states and functions as needed

  return (
    <AppContext.Provider value={{ scrollPositionX, setScrollPositionX }}>
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
