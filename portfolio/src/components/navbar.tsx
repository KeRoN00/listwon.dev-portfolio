import React from "react";
import Logo from "./logo";
import MenuIcon from "@mui/icons-material/Menu";
import Navbarlist from "./navbarlist";
import { Stack, Switch } from "@mui/material";
import { useTheme } from "../hooks/use-theme";
const Navbar: React.FC = () => {
  const { toggleColorMode } = useTheme();
  return (
    <div className="fixed top-0 w-full z-10 h-12 bg-white text-slate-900 dark:text-white transition-all duration-300 bg-opacity-10 backdrop-blur-sm border-b-2 border-b-white/20">
      <div className="max-w-5xl mx-auto flex flex-1 z-10 items-center h-full px-4 justify-between">
        <Stack spacing={4} direction={"row"}>
          <Logo />
          <Navbarlist />
        </Stack>
        {/** Create ThemeToggleButton */}
        <Stack
          spacing={2}
          direction={"row"}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <Switch className="hidden" onClick={toggleColorMode} />

          {/** Create sidebar for mobile with links and themeToggle */}
          <MenuIcon className="w-12 h-12 lg:hidden flex  hover: cursor-pointer shadow-white" />
        </Stack>
      </div>
    </div>
  );
};

export default Navbar;
