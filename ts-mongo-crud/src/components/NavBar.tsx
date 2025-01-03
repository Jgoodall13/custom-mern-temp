import { NavLink } from "react-router-dom";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

function NavBar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { winter, dracula } = themes;
    setTheme((prev) => (prev === winter ? dracula : winter));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">My App</div>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/counter"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Counter
          </NavLink>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Todos
          </NavLink>
        </div>
        <div className="theme-container">
          {" "}
          {/* THEME ICONS */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
