import React from "react";
import { NavLink } from "react-router-dom";
import { routers } from "../../router";

const Navigation = () => {
  return (
    <nav className="flex gap-4 items-center">
      {routers.map((elem) => (
        <NavLink
          key={elem.name}
          to={elem.path}
          className={({ isActive }) =>
            isActive ? "text-indigo-700" : undefined
          }
        >
          {elem.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
