import NavbarLink from "./navbarLink";

const Navbarlist = () => {
  return (
    <nav className="lg:flex hidden gap-4 items-center">
      {/** Change to link components */}
      <NavbarLink text="Works" />
      <NavbarLink text="Contact" />
    </nav>
  );
};

export default Navbarlist;
