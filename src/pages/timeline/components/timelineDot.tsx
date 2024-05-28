import React from "react";
import { GoDotFill } from "react-icons/go";
import { useAppContext } from "../../../AppContext";

const TimelineDot: React.FC = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { scrollPositionX } = useAppContext();

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <span
      style={{
        top: `${scrollPositionX + windowSize.height / 2}px`,
      }}
      className="absolute left-[1px] sm:left-[133px]"
    >
      <GoDotFill size={24} />
    </span>
  );
};

export default TimelineDot;
