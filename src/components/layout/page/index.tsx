import React from "react";
import Header from "../header";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#2a2a36]">
      <Header />
      {children}
    </div>
  );
};

export default Page;
