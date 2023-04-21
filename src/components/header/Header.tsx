import React from "react";
import Navigation from "../navigation";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-20 px-2 py-5 bg-gray-800">
      {/*<h4 className='text-cyan-600'>Vite project</h4>*/}
      <Navigation />
    </div>
  );
};

export default Header;
