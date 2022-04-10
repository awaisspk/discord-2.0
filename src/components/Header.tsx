import cx from "classnames";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { MenuIcon } from "../assets/icons";
import { Button, IconButton } from "./Button";
import { auth, provider } from "../firestore";
import { LoadingIcon } from "../assets/icons/loading";
import { signInWithPopup } from "firebase/auth";

const links = [
  { label: "Download", link: "#" },
  { label: "Why Discord", link: "#" },
  { label: "Nitro", link: "#" },
  { label: "Safety", link: "#" },
  { label: "Support", link: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/channels");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <header className="px-5 md:px-10 h-[80px] bg-blue-600 w-full flex items-center justify-between">
        <Link to="/">
          <img
            alt=""
            src="/images/discord-Logo.svg"
            className="w-32 h-12 object-contain"
          />
        </Link>

        <nav
          className={cx(
            "flex",
            "flex-col justify-center items-center space-y-3 absolute top-[80px] inset-x-0 h-[calc(100vh-80px)]  transition-all bg-white",
            "md:relative md:flex-row md:space-y-0 md:top-0 md:h-max md:bg-transparent md:space-x-4 md:opacity-100",
            {
              "duration-200 opacity-0": !isOpen,
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
          <Button
            varient="primary"
            className="flex space-x-2"
            onClick={!user ? signIn : () => navigate("/channels")}
          >
            <span>{!user ? "Login" : "Open Discord"}</span>
            {loading && <LoadingIcon />}
          </Button>
          <IconButton className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon stroke="#fff" />
          </IconButton>
        </div>
      </header>
    </>
  );
};

export { Header };
