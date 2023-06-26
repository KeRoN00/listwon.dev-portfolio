import React from "react";
import Logo from "./logo";
import NavbarLink from "./navbarLink";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar: React.FC = () => {
  return (
    <div className=" fixed top-0 w-full h-12 bg-white text-white bg-opacity-10 backdrop-blur-sm border-b-2 border-b-white/20">
      <div className=" max-w-5xl mx-auto flex flex-1 z-10 items-center h-full px-4 justify-between">
        <div className="flex justify-center items-center gap-4">
          <Logo />
          <nav className="lg:flex hidden gap-4 items-center">
            {/** Change to link components */}
            <NavbarLink text="Works"/>
            <NavbarLink text="Contact"/>
          </nav>
        </div>
        {/** Create ThemeToggleButton */}
        <p className="lg:flex hidden">ThemeToggle</p>

        <div className="lg:hidden flex w-8 h-8">
          {/** Create sidebar for mobile with links and themeToggle */}
          <MenuIcon className="w-full h-full  hover: cursor-pointer shadow-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
