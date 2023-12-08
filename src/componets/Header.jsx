import { useEffect, useState } from "react";
import useScrollDirection from "./Hooks";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const scroll = useScrollDirection();
  const location = useLocation().pathname;
  const fixedWidth = 800;
  const [checkWidth, setCheckWidth] = useState(false);
  const [button, setButton] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (fixedWidth > width) {
      setCheckWidth(true);
    } else {
      setCheckWidth(false);
    }
  }, [width]);

  function handleClick() {
    setButton((prev) => !prev);
  }
  useEffect(() => {
    setButton(false);
  }, [location]);
  return (
    <header
      className={`sticky transition-all duration-500  z-[9999]  ${
        scroll === "down" ? (!checkWidth ? "-top-24" : "top-0") : "top-0"
      }`}
    >
      <nav className="flex justify-between items-center bg-transparent backdrop-blur-sm absolute py-5 px-28 max-sm:px-8 max-lg:px-16 bg-gradient-to-r from-slate-950 via-transparent to-slate-950  w-full ">
        <Link to="/">
          <img src="/logoWIthText.png" alt="" className="h-12 max-sm:h-10" />
        </Link>
        {!checkWidth ? (
          <div className="flex gap-4 text-slate-400 font-semibold">
            <NavLink
              to=""
              className={({ isActive }) =>
                `${
                  isActive ? "text-indigo-600 border-b-4 border-indigo-600" : ""
                } hover:text-indigo-600  border-indigo-600 transition-all duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                `${
                  isActive ? "text-indigo-600 border-b-4 border-indigo-600" : ""
                } hover:text-indigo-600  border-indigo-600 transition-all duration-300`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                `${
                  isActive ? "text-indigo-600 border-b-4 border-indigo-600" : ""
                } hover:text-indigo-600  border-indigo-600 transition-all duration-300`
              }
            >
              TV Shows
            </NavLink>
          </div>
        ) : (
          <>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              onClick={handleClick}
              className="inline-flex items-center z-[999px] p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </>
        )}
      </nav>
      <div
        className={`${
          button === false ? "hidden" : ""
        } w-full transition-all duration-300 h-96 bg-slate-900 absolute bg-gradient-to-b from-slate-950 via-transparent to-slate-950  z-[999px]`}
      >
        <div className="w-full flex items-center justify-end px-7 py-6">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-5xl text-slate-400"
            onClick={() => setButton(false)}
          />
        </div>
        <div className="flex w-full gap-4 flex-col h-full mt-7  items-center text-slate-500 text font-semibold">
          <NavLink
            to=""
            className={({ isActive }) =>
              `${
                isActive ? "text-indigo-600 border-b-4 border-indigo-600" : ""
              } hover:text-indigo-600  border-indigo-600 transition-all duration-300`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              `${
                isActive ? "text-indigo-600 border-b-4 border-indigo-600" : ""
              } hover:text-indigo-600  border-indigo-600 transition-all duration-300`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv"
            className={({ isActive }) =>
              `${
                isActive ? "text-indigo-600 border-b-4 border-indigo-600" : ""
              } hover:text-indigo-600  border-indigo-600 transition-all duration-300`
            }
          >
            TV Shows
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
