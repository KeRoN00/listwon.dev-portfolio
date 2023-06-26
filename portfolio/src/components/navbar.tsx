import React from "react";
import Logo from "./logo";
import MenuIcon from "@mui/icons-material/Menu";
import Navbarlist from "./navbarlist";
const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full h-12 bg-white text-white bg-opacity-10 backdrop-blur-sm border-b-2 border-b-white/20">
      <div className="max-w-5xl mx-auto flex flex-1 z-10 items-center h-full px-4 justify-between">
        <div className="flex justify-center items-center gap-4">
          <Logo />
          <Navbarlist />
        </div>
        {/** Create ThemeToggleButton */}
        <p className="lg:flex hidden">ThemeToggle</p>

        {/** Create sidebar for mobile with links and themeToggle */}
        <MenuIcon className="w-8 h-8 lg:hidden flex  hover: cursor-pointer shadow-white" />
      </div>
    </div>
  );
};

export default Navbar;
