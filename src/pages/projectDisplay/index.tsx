import React from "react";
import ProjectDisplayCube from "./cube";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
};
type ProjectDisplayProps = {
  projects: Project[];
};

const ProjectDisplay: React.FC<ProjectDisplayProps> = () => {
  return <ProjectDisplayCube />;
};

export default ProjectDisplay;
