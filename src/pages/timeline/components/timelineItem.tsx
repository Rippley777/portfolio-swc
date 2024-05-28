import { useEffect, useState } from "react";
import { useAppContext } from "../../../AppContext";
import items from "../work.json";
import pstudiosIcon from "../../../assets/app-icons/pstudiosicon.webp";
import intuitIcon from "../../../assets/app-icons/intuiticon.webp";
import stackpathIcon from "../../../assets/app-icons/stackpathicon.webp";
import copartIcon from "../../../assets/app-icons/coparticon.webp";
import swaIcon from "../../../assets/app-icons/swaicon.webp";
import ascendIcon from "../../../assets/app-icons/ascendicon.webp";
import auditionUIcon from "../../../assets/app-icons/auditionuicon.webp";
import dashaIcon from "../../../assets/app-icons/dashaicon.webp";
import lpsIcon from "../../../assets/app-icons/lpsicon.webp";
import myspaceIcon from "../../../assets/app-icons/myspaceicon.webp";
import neopetsIcon from "../../../assets/app-icons/neopetsicon.webp";
import eggIcon from "../../../assets/app-icons/eggicon.webp";

import fahwBlog from "../../../assets/fahw-blog-opac.webp";
import stackpathDashboard from "../../../assets/stackpath-dashboard.webp";
import intuitLink from "../../../assets/intuit-link.svg";
import copartCTApp from "../../../assets/app-crashedtoys.png";
import swaHomepage from "../../../assets/swa-homepage.webp";
import LandingItem from "./landingItem";

interface PortfolioItem {
  id: number;
  title: string;
  description?: string;
  image?: string;
  year: number;
  yearEnd: number;
  position: string;
  highlights: string[];
}

type TimelineItemProps = {
  item: PortfolioItem;
};
export const getImage = (id: number) => {
  switch (id) {
    case 0:
      return fahwBlog;
    case 1:
      return stackpathDashboard;
    case 2:
      return intuitLink;
    case 3:
      return copartCTApp;
    case 4:
      return swaHomepage;
    default:
      return null;
  }
};
export const getIcon = (id: number) => {
  switch (id) {
    case 0:
      return pstudiosIcon;
    case 1:
      return stackpathIcon;
    case 2:
      return intuitIcon;
    case 3:
      return copartIcon;
    case 4:
      return swaIcon;
    case 5:
      return ascendIcon;
    case 6:
      return auditionUIcon;
    case 7:
      return dashaIcon;
    case 8:
      return lpsIcon;
    case 9:
      return myspaceIcon;
    case 10:
      return neopetsIcon;
    case 11:
      return eggIcon;
    default:
      return null;
  }
};

const TimelineItem = ({ item }: TimelineItemProps) => {
  const { id, title, description, position, highlights } = item;
  const image = getImage(id);
  const icon = getIcon(id);
  return (
    <section
      key={id}
      className="h-full flex flex-col justify-center xl:ml-20 py-20 space-y-2 sm:px-4 md:space-y-10 timeline-item"
    >
      {image && (
        <div className="hidden sm:block self-start xl:self-center opacity-80">
          <img src={image} className="w-2/3 pr-2" />
        </div>
      )}
      <div className="xl:mt-80">
        <div className="flex flex-col space-y-3 justify-between overflow-hidden">
          <div className="flex md:mb-10 space-x-5">
            {icon && (
              <div className="self-center">
                <img src={icon} width={64} height={64} />
              </div>
            )}
            <div className="flex flex-col justify-between">
              <div className="h-8 xl:h-16">
                <h1 className="text-2xl xl:text-5xl fixed animate-glitch1 font-bold">
                  {title}
                </h1>
                <span className="text-2xl xl:text-5xl fixed font-bold animate-glitch2 text-cyan-400">
                  {title}
                </span>
                <span className="text-2xl xl:text-5xl fixed font-bold animate-glitch3 text-red-400">
                  {title}
                </span>
              </div>

              <div className="text-xl xl:text-3xl animate-fadeInSlow text-gray-500 my-auto">
                {position}
              </div>
            </div>
          </div>
          <div className="text-lg xl:text-2xl animate-slideUp">
            {description}
          </div>
          {highlights.length > 0 && (
            <ul className="ml-10 xl:ml-28 md:mt-10 text-gray-400 text-lg xl:text-2xl">
              {highlights.map((highlight) => (
                <li>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

const TimelineItems = () => {
  const [viewItem, setViewItem] = useState<number | "landing">(0);
  const { scrollPositionX } = useAppContext();

  useEffect(() => {
    if (scrollPositionX < 350) {
      setViewItem("landing");
    } else if (scrollPositionX < 2000) {
      setViewItem(0);
    } else if (scrollPositionX < 3000) {
      setViewItem(1);
    } else if (scrollPositionX < 4000) {
      setViewItem(2);
    } else if (scrollPositionX < 5000) {
      setViewItem(3);
    } else if (scrollPositionX < 6000) {
      setViewItem(4);
    } else if (scrollPositionX < 7000) {
      setViewItem(5);
    } else if (scrollPositionX < 8000) {
      setViewItem(6);
    } else if (scrollPositionX < 9000) {
      setViewItem(7);
    } else if (scrollPositionX < 10000) {
      setViewItem(8);
    } else if (scrollPositionX < 11000) {
      setViewItem(9);
    } else if (scrollPositionX < 12000) {
      setViewItem(10);
    } else if (scrollPositionX < 13000) {
      setViewItem(11);
    }
  }, [scrollPositionX, viewItem]);
  return (
    <>
      {viewItem === "landing" && <LandingItem />}
      {typeof viewItem === "number" && <TimelineItem item={items[viewItem]} />}
    </>
  );
};

export default TimelineItems;
