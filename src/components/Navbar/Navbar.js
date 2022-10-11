import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Topic",
      url: "/topic",
    },
    {
      id: 3,
      name: "Statistics",
      url: "/statistics",
    },
    {
      id: 4,
      name: "Blog",
      url: "/blog",
    },
  ];
  const [menu, setMenu] = useState(false);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-20 px-7">
        <div
          className="font-semibold text-2xl flex items-center 
      text-sky-500"
        >
          <Link to="/">Analyzent</Link>
        </div>

        <div
          onClick={() => setMenu(!menu)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={menu ? faXmark : faBars}></FontAwesomeIcon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            menu ? "top-20 " : "top-[-490px]"
          }`}
        >
          {routes.map((route) => (
            <li key={route.id} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={route.url}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
