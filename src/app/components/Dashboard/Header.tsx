import DesktopNav from "./menus/DesktopNav";
import MobileNav from "./menus/MobileNav";

const Header = () => {
  return (
    <header>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
