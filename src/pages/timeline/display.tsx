import React, { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";
import retro9000 from "../../assets/retro9000.webp";
import { generateRandomDivConfigs } from "./utils";

const generateDivs = (configs) => {
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
  const { scrollPositionX } = useAppContext();
  useEffect(() => {
    console.log({ scrollPositionX });

    if (scrollPositionX < 900) {
      //   setViewItem(0);
      setDisplayText("Now");
      //   setDisplayText(null);
    } else if (scrollPositionX < 1100) {
      setDisplayText(null);
    } else if (scrollPositionX < 1900) {
      setDisplayText("2022-2024");
      //   setViewItem(1);
    } else if (scrollPositionX < 2100) {
      setDisplayText(null);
    } else if (scrollPositionX < 2900) {
      setDisplayText("2019-2022");
    } else if (scrollPositionX < 3100) {
      setDisplayText(null);
    } else if (scrollPositionX < 3900) {
      setDisplayText("2017-2019");
    } else if (scrollPositionX < 4200) {
      setDisplayText(null);
    } else if (scrollPositionX < 5000) {
      setDisplayText("2016-2017");
    } else if (scrollPositionX < 5200) {
      setDisplayText(null);
    } else if (scrollPositionX < 6000) {
      setDisplayText("2015-2016");
    } else if (scrollPositionX < 6200) {
      setDisplayText(null);
    } else if (scrollPositionX < 7000) {
      setDisplayText("2014-2015");
    } else if (scrollPositionX < 7200) {
      setDisplayText(null);
    } else if (scrollPositionX < 8000) {
      setDisplayText("2013-2014");
    } else if (scrollPositionX < 8200) {
      setDisplayText(null);
    } else if (scrollPositionX < 9000) {
      setDisplayText("2012-2013");
    } else if (scrollPositionX < 9200) {
      setDisplayText(null);
    } else if (scrollPositionX < 10000) {
      setDisplayText("2008-2008");
    }
  }, [scrollPositionX]);
  return (
    <div className="w-full">
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
        <div className="flex text-2xl fixed top-[55vh] right-[20vw] text-lime-600 font-bold font-mono text-center ">
          <div>{`$> `}</div>
          <div className="px-3">
            {displayText}
            <span className="terminal-cursor"> </span>
          </div>
        </div>
      )}
      {/* <div className="text-6xl fixed top-[35vh] right-[20vw] w-20 text-cyan-600 font-bold font-mono text-center animate-glitch2">
        {displayText}
      </div>
      <div className="text-6xl fixed top-[35vh] right-[20vw] w-20 text-pink-600 font-bold font-mono text-center animate-glitch3">
        {displayText}
      </div> */}
    </div>
  );
};

export default Display;
