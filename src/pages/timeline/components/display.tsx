import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../AppContext";
import retro9000 from "../../../assets/retro9000.webp";
import { generateRandomDivConfigs } from "../utils";

const generateDivs = (configs: { className: string }[]) => {
  return configs.map((config, index) => (
    <div key={index} className={config.className} />
  ));
};

const DivContainer: React.FC = () => {
  const numDivs = 1;
  const divConfigurations = generateRandomDivConfigs(numDivs);

  return <div className="flex flex-col">{generateDivs(divConfigurations)}</div>;
};
const Display: React.FC = () => {
  const [displayText, setDisplayText] = useState<string | null>();
  const { activeYear, scrollPositionX } = useAppContext();
  useEffect(() => {
    switch (activeYear) {
      case 0:
        setDisplayText("2008-2024");
        break;
      case 2024:
      case 2023:
      case 2022:
        setDisplayText("2022-2024");
        break;
      case 2021:
      case 2020:
      case 2019:
        setDisplayText("2019-2022");
        break;
      case 2018:
      case 2017:
        setDisplayText("2017-2019");
        break;
      case 2016:
      case 2015:
        setDisplayText("2016-2017");
        break;
      case 2014:
        setDisplayText("2014-2014");
        break;
      case 2013:
      case 2012:
        setDisplayText("2012-2013");
        break;
      case 2008:
        setDisplayText("2008-2008");
        break;
      case 2003:
        setDisplayText("2003-2008");
        break;
      case 1998:
        setDisplayText("1998-2003");
        break;
    }
  }, [activeYear]);
  return (
    <div className="hidden md:block w-40 xl:w-1/2 xl:mr-20">
      <img src={retro9000} alt="Retro computer display" />
      {displayText === null ? (
        <div className="h-40 overflow-hidden fixed top-[30vh] right-[16vw]">
          <div
            style={{
              opacity: scrollPositionX % 30 > 18 ? 0.5 : 0,
            }}
            className=" text-lime-600 font-bold font-mono text-center opacity-70"
          >
            <DivContainer />
          </div>
        </div>
      ) : (
        <>
          <div className="hidden xl:block h-32 overflow-hidden fixed top-[150px] right-[275px] w-48">
            <pre
              style={{ marginTop: -(scrollPositionX / 10) }}
              className="text-[10px] text-lime-600"
            >
              {` import React, { useEffect } from "react";
import { useAppContext } from "../../../AppContext";

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
      style={{ position: "absolute", marginLeft: '{offset}px', ...location }}
    >
      <div className={className}>
        <Icon size={72} />
      </div>
    </div>
  );
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
  }, [activeYear]);

  useEffect(() => {
    if (activeTech.length === 0) return;

    const intervalId = setInterval(() => {
      setIcons((prev) => {
        const newIcon = spawnTechIcons(
          activeTech[genRandomNumber(0, activeTech.length - 1)],
          'default-{genUniqueKey(8)}',
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
      <div className="grid-col-1">{icons && icons.map((icon) => icon)}</div>
    </div>
  );
};

export default IconBackdrop;
`}
            </pre>
          </div>
          <div className="flex text-sm fixed top-44 md:top-[140px] right-16 xl:top-[285px] xl:right-[340px] text-lime-600 font-bold font-mono text-center ">
            <div>{`$> `}</div>
            <div className="px-3">
              {displayText}
              <span className="terminal-cursor"> </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Display;
