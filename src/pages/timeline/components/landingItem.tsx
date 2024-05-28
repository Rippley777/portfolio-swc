import React, { useEffect, useState } from "react";
import profilePic from "../../../assets/profile.jpg";
const additionalTitles = [
  "Wannabe Game Dev",
  "Home Musician",
  "Artist",
  "Gamer",
  "Hobbyist",
  "Scroll to see more",
];

const LandingItem: React.FC = () => {
  const [displayText, setDisplayText] = useState<string | null>();
  const [start, setStart] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!completed) return;
    if (currentIndex < additionalTitles.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, completed]);

  const mainText = "Ally Rippley";

  useEffect(() => {
    setStart(true);
    setInterval(() => {
      setCompleted(true);
    }, 4000);
  }, []);

  useEffect(() => {
    const text = mainText.split("");
    let currentText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        currentText += text[i];
        setDisplayText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="h-full w-full absolute top-[5vh] sm:top-[10vh] sm:ml-28 lg:left-[10vw]">
      <img
        src={profilePic}
        className="rounded-full w-60 my-10 ring-4 ring-gray-500 animate-fadeInSlow"
      />
      <div className="relative h-16">
        <h2 className="fixed animate-glitch1 font-bold text-5xl">
          {displayText}
        </h2>
        <h2 className="fixed animate-glitch2 font-bold text-5xl text-cyan-400">
          {displayText}
        </h2>
        <h2 className="fixed animate-glitch3 font-bold text-5xl text-red-400">
          {displayText}
        </h2>
      </div>
      <div className="fixed sm:text-3xl text-gray-500">
        <div className="animate-fadeInSlowDelay5">{`{Software Engineer}`}</div>
        {additionalTitles.slice(0, currentIndex).map((title, i) => (
          <div key={i} className="animate-slideDownLeft">
            {`{${title}}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingItem;
