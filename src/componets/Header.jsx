import useScrollDirection from "./Hooks";
import { NavLink } from "react-router-dom";
function Header() {
  const scroll = useScrollDirection();
  return (
    <header
      className={`sticky transition-all duration-500 z-[9999]  ${
        scroll === "down" ? "-top-24" : "top-0"
      }`}
    >
      <nav className="flex justify-between items-center bg-transparent absolute py-5 px-28 max-sm:px-8 max-lg:px-16 bg-gradient-to-r from-slate-950 via-transparent to-slate-950  w-full ">
        <img src="/logoWIthText.png" alt="" className="h-12 max-sm:h-10" />
        <div className="flex gap-4 text-slate-400 font-semibold max-sm:hidden">
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
            to="/movies"
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
      </nav>
    </header>
  );
}

export default Header;
