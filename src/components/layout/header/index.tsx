import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useAppContext } from "../../../AppContext";

const Header: React.FC = () => {
  const { scrollPositionX } = useAppContext();
  return (
    <header className="fixed top-0 right-0 z-10 flex h-14 px-6 w-full items-center justify-between">
      <div>
        {scrollPositionX > 350 && (
          <div className="text-5xl font-bold sm:px-4 animate-fadeInSlow">
            AR
          </div>
        )}
      </div>
      <nav aria-label={"External Profile Links"} className="">
        <ul className="flex gap-6 font-medium text-white">
          <li>
            <a
              href="https://github.com/Rippley777"
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <SiGithub className="inline mx-2" />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/allyrippley/"
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <SiLinkedin className="inline mx-2" />
              LinkedIn
            </a>
          </li>
          {/* <li>
            <a
              href="/history"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              History
            </a>
          </li>
          <li>
            <a
              href="/future"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              Future
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
