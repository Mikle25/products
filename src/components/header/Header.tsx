import React from "react";
import Navigation from "../navigation";
// import { Login } from "../auth/Auth";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-20 px-2 py-5 bg-gray-800">
      <Navigation />
      {/*<Login />*/}
    </div>
  );
};

export default Header;
