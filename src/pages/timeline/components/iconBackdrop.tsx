import React, { useEffect } from "react";
import {
  SiEslint,
  SiNginx,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useAppContext } from "../../../AppContext";
import { TbBrandReactNative } from "react-icons/tb";

// const icons = [
//     { icon: SiReact, name: 'react' },
//     { icon: TbBrandReactNative, name: 'react-native' },
//     { icon: SiTypescript, name: 'typescript' },
//     { icon: SiTailwindcss, name: 'tailwindcss' },
//     { icon: SiRedux, name: 'redux' },
//     { icon: SiReactrouter, name: 'react-router' },
//     { icon: SiReactquery, name: 'react-query' },
//     { icon: SiReacthookform, name: 'react-hook-form' },
//     { icon: SiEslint, name: 'eslint' },
//     { icon: SiNginx, name: 'nginx' },
//     { icon: SiPrettier, name: 'prettier' },
//     { icon: TbBrandDocker, name: 'docker' },
//     { icon: SiCreatereactapp, name: 'cra' },
//   ];

const genUniqueKey = (length: number): string => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let key = "";
  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }
  return key;
};

const genRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

type Tech = {
  name: string;
  icon: React.ElementType;
  yearStart: number;
  yearEnd: number;
  yearStart1?: number;
  yearEnd1?: number;
};
const tech = [
  {
    name: "React",
    icon: SiReact,
    yearStart: 2015,
    yearEnd: new Date().getFullYear(),
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
    yearStart: 2016,
    yearEnd: 2017,
    yearStart1: 2023,
    yearEnd1: new Date().getFullYear(),
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    yearStart: 2019,
    yearEnd: new Date().getFullYear(),
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    yearStart: 2020,
    yearEnd: new Date().getFullYear(),
  },
  { name: "Redux", icon: SiRedux, yearStart: 2016, yearEnd: 2019 },
  { name: "React Router", icon: SiReactrouter, yearStart: 2016, yearEnd: 2019 },
  {
    name: "React Query",
    icon: SiReactquery,
    yearStart: 2021,
    yearEnd: new Date().getFullYear(),
  },
  {
    name: "React Hook Form",
    icon: SiReacthookform,
    yearStart: 2022,
    yearEnd: new Date().getFullYear(),
  },
  {
    name: "ESLint",
    icon: SiEslint,
    yearStart: 2016,
    yearEnd: new Date().getFullYear(),
  },
  { name: "Nginx", icon: SiNginx, yearStart: 2017, yearEnd: 2019 },
  {
    name: "Docker",
    icon: SiNginx,
    yearStart: 2017,
    yearEnd: new Date().getFullYear(),
  },
  {
    name: "Prettier",
    icon: SiNginx,
    yearStart: 2019,
    yearEnd: new Date().getFullYear(),
  },
];

const iconStyleGen = [
  {
    className: "animate-cascadeBottom",
    top: -60,
    left: 300,
  },
  {
    className: "animate-cascadeTop",
    bottom: -60,
    left: 300,
  },
  {
    className: "animate-cascadeBottomRight",
    top: -60,
    left: 0,
  },
  {
    className: "animate-cascadeBottomLeft",
    top: -60,
    left: 600,
  },
  {
    className: "animate-cascadeTopRight",
    bottom: -60,
    left: 0,
  },
  {
    className: "animate-cascadeTopLeft",
    bottom: -60,
    left: 600,
  },
];
function spawnTechIcons(
  tech: Tech,
  index: string | number,
  iconPosition: number,
  offset: string | number
): React.ReactNode {
  const Icon = tech.icon;
  const iconStyle = iconStyleGen[iconPosition];
  const { className, ...location } = iconStyle;
  return (
    <div
      key={index}
      style={{ position: "absolute", marginLeft: `${offset}px`, ...location }}
    >
      <div className={className}>
        <Icon size={72} />
      </div>
    </div>
  );
  //   });
}

const IconBackdrop: React.FC = () => {
  const { activeYear } = useAppContext();
  const [activeTech, setActiveTech] = React.useState<Tech[]>([]);
  const [icons, setIcons] = React.useState<React.ReactNode[]>([]);
  useEffect(() => {
    console.log({ activeYear });
    const currentTech = tech.filter(
      (tech) =>
        (activeYear >= tech.yearStart && activeYear <= tech.yearEnd) ||
        (tech.yearStart1
          ? activeYear >= tech.yearStart1
          : true && tech.yearEnd1
          ? activeYear <= tech.yearEnd1
          : false)
    );
    setActiveTech(currentTech);
    console.log({ currentTech });
  }, [activeYear]);

  useEffect(() => {
    console.log({ activeTech });
    if (activeTech.length === 0) return;

    const intervalId = setInterval(() => {
      setIcons((prev) => {
        const newIcon = spawnTechIcons(
          activeTech[genRandomNumber(0, activeTech.length - 1)],
          `default-${genUniqueKey(8)}`,
          genRandomNumber(0, iconStyleGen.length - 1),
          genRandomNumber(0, 500)
        );
        if (prev.length >= 20) {
          return [...prev.slice(1), newIcon];
        } else {
          return [...prev, newIcon];
        }
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeTech]);

  return (
    <div
      className="grid grid-cols-8 fixed top-0 right-0 bottom-0 left-0 opacity-5"
      style={{ border: "2px solid red" }}
    >
      {/* {activeTech &&
        activeTech.map((tech, index) =>
          spawnTechIcons(tech, `default-${index}`)
        )} */}
      <div className="grid-col-1">{icons && icons.map((icon) => icon)}</div>
      {/* <div className="col-span-1">{spawnTechIcons(activeTech)}</div> */}
    </div>
  );
};

export default IconBackdrop;
