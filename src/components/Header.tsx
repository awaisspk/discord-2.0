import cx from "classnames";
import { useState } from "react";

import { MenuIcon } from "../assets/icons";
import { Button, IconButton } from "./Button";

const links = [
  { label: "Download", link: "#" },
  { label: "Why Discord", link: "#" },
  { label: "Nitro", link: "#" },
  { label: "Safety", link: "#" },
  { label: "Support", link: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="px-5 md:px-10 h-[80px] bg-blue-600 w-full flex items-center justify-between">
        <a href="/">
          <img
            alt=""
            src="/images/discord-Logo.svg"
            className="w-32 h-12 object-contain"
          />
        </a>

        <nav
          className={cx(
            "flex",
            "flex-col justify-center items-center space-y-3 absolute top-[80px] inset-x-0 h-[calc(100vh-80px)]  transition-all bg-white",
            "md:relative md:flex-row md:space-y-0 md:top-0 md:h-max md:bg-transparent md:space-x-4",
            {
              "duration-200 opacity-0": isOpen,
            }
          )}
        >
          {links.map((link, i) => (
            <a
              className="text-gray-700 md:text-white font-semibold hover:underline underline-offset-2"
              key={i}
              href={link.link}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <Button varient="primary">Login</Button>
          <IconButton className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon stroke="#fff" />
          </IconButton>
        </div>
      </header>
    </>
  );
};

export { Header };
