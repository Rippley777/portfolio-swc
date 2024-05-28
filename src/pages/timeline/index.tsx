import React from "react";
import { useAppContext } from "../../AppContext";
import TimelineItems from "./components/timelineItem";
import Display from "./components/display";
import ActiveYear from "./components/activeYear";
import IconBackdrop from "./components/iconBackdrop";
import TimelineDot from "./components/timelineDot";

const Timeline: React.FC = () => {
  const { setScrollPositionX } = useAppContext();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPositionX(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollPositionX]);

  return (
    <div aria-label="Timeline-style portfolio site for Ally Rippley">
      <IconBackdrop />
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className="col-span-3 md:col-span-2 xl:col-span-1 flex flex-col h-[14000px]">
          <ActiveYear />
          <TimelineDot />

          <div className="w-[2px] bg-gradient-to-b from-lime-500 via-cyan-500  to-purple-500 via-purple h-full mx-3 sm:mx-36"></div>
        </div>
        <div className="col-span-8 xl:col-span-8">
          <div className="fixed xl:w-3/4 h-full">
            <TimelineItems />
          </div>
        </div>
        <div className="col-span-1 xl:col-span-3 fixed right-8 xl:right-[-100px] top-[10vh]">
          <Display />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
