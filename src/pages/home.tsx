import React from "react";
import ProjectDisplay from "./projectDisplay";

const Home: React.FC = () => {
  return (
    <div className="h-full w-full">
      <ProjectDisplay projects={[]} />
    </div>
  );
};

export default Home;
