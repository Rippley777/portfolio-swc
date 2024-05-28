const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomClassName = () => {
  const heights = ["h-[2px]", "h-[3px]", "h-2"];
  const widths = ["w-20", "w-24", "w-32"];
  const margins = ["mt-2", "mt-4", "mt-8", "mt-14"];
  const marginLefts = ["ml-6", "ml-12", "ml-18", "ml-24"];
  const animations = ["", "", "animate-flicker", "", "", "animate-flicker2"];
  const colors = [
    "bg-lime-500",
    "bg-black",
    "bg-white",
    "bg-lime-500",
    "bg-lime-500",
  ];
  const opacities = ["opacity-0", "opacity-50", "opacity-75", "opacity-100"];

  const height = heights[getRandomInt(0, heights.length - 1)];
  const width = widths[getRandomInt(0, widths.length - 1)];
  const margin = margins[getRandomInt(0, margins.length - 1)];
  const marginLeft = marginLefts[getRandomInt(0, marginLefts.length - 1)];
  const animation = animations[getRandomInt(0, animations.length - 1)];
  const color = colors[getRandomInt(0, colors.length - 1)];
  const opacity = opacities[getRandomInt(0, opacities.length - 1)];

  return `${color} ${height} ${width} ${margin} ${marginLeft} ${animation} ${opacity}`;
};

export const generateRandomDivConfigs = (
  numDivs: number
): { className: string }[] => {
  const configs = [];
  for (let i = 0; i < numDivs; i++) {
    configs.push({ className: getRandomClassName() });
  }
  return configs;
};
