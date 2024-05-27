import React from "react";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Main Navigation" }) => {
  return (
    <header
      className="fixed top-0 right-0 flex h-14 px-6 w-full items-center justify-between"
      aria-label={title}
    >
      <div>test</div>
      <nav aria-label={title} className="">
        <ul className="flex gap-6 font-medium text-white">
          <li>
            <a
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/case-studies"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              Case Studies
            </a>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
