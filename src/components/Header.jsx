import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import UnitToggle from "./UnitToggle";

const Header = () => {
  return (
    <header className="bg-gray-500">
      <div className="max-w-7xl md:mx-auto text-white p-4 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between space-x-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Weather Dashboard
            </h1>
          </Link>
          <nav>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-white-800 bg-gray-700 font-semibold p-1 rounded "
                  : "text-lg"
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>

        <div className="mt-4 md:mt-0 space-x-4 flex md:flex-row">
          <SearchBar />
          <UnitToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
