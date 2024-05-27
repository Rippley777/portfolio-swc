import React from "react";
import { GoDotFill } from "react-icons/go";
import { useAppContext } from "../../AppContext";
// import Retro9000 from "../../components/retro9000";
import useInView from "../../hooks/useInView";
import TimelineItems from "./timelineItem";
import Display from "./display";
import ActiveYear from "./components/activeYear";
interface TimelineProps {
  // Define the props for your component here
}

const Timeline: React.FC<TimelineProps> = () => {
  // Implement your component logic here
  const { scrollPositionX, setScrollPositionX } = useAppContext();
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleScroll = (event: unknown) => {
      console.log({ event });
      setScrollPositionX(window.scrollY);
    };
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-10 gap-4 h-full">
      <div className="col-span-1 flex flex-col h-[14000px]">
        <ActiveYear />
        <span
          style={{
            top: `${scrollPositionX + windowSize.height / 2}px`,
          }}
          className="absolute left-[69px]"
        >
          <GoDotFill size={24} />
        </span>

        <div className="w-[2px] bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 via-purple h-full mx-20"></div>
      </div>
      <div className="col-span-7 md:col-span-5">
        <div className="fixed w-1/2">
          <TimelineItems />
        </div>
      </div>
      <div className="col-span-2 md:col-span-4 fixed right-0 top-[10vh] mr-20">
        <Display />
      </div>
    </div>
  );
};

export default Timeline;
