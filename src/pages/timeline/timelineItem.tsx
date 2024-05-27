import { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";
import useInView from "../../hooks/useInView";
import items from "./work.json";
import pstudiosIcon from "../../assets/pstudiosicon.webp";
import intuitIcon from "../../assets/intuiticon.webp";
import stackpathIcon from "../../assets/stackpathicon.webp";
import copartIcon from "../../assets/coparticon.webp";

interface PortfolioItem {
  id: number;
  title: string;
  description?: string;
  image?: string;
  year: number;
  yearEnd: number;
  position: string;
}

type TimelineItemProps = {
  item: PortfolioItem;
};
export const getImage = (id: number) => {
  switch (id) {
    case 0:
      return pstudiosIcon;
    case 1:
      return stackpathIcon;
    case 2:
      return intuitIcon;
    case 3:
      return copartIcon;
    default:
      return null;
  }
};

const TimelineItem = ({ item }: TimelineItemProps) => {
  const { id, title, year, yearEnd, description, position } = item;
  const { ref, inView } = useInView({
    // threshold: 0.4, // 50% of the element must be visible
    // triggerOnce: true,
  });

  return (
    <section ref={ref} key={id} className="">
      <div className="flex flex-col justify-between overflow-hidden p-10 my-20">
        <div className="flex mb-10 space-x-5">
          <div className="self-center">
            <img src={getImage(id)} width={64} height={64} />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-5xl animate-fadeIn font-bold">{title}</h1>
            <div className="text-3xl animate-fadeInSlow text-gray-500 my-auto">
              {position}
            </div>
          </div>
        </div>
        <div className="text-2xl animate-slideUp">{description}</div>
      </div>
    </section>
  );
};

const TimelineItems = () => {
  const [viewItem, setViewItem] = useState<number | "landing">(0);
  const { scrollPositionX } = useAppContext();

  useEffect(() => {
    console.log({ scrollPositionX, viewItem });

    if (scrollPositionX < 1000) {
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
    <div>
      {typeof viewItem === "number" && <TimelineItem item={items[viewItem]} />}
    </div>
  );
};

export default TimelineItems;
