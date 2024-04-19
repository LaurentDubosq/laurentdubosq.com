import Logo from "./Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrollModeActived, setIsScrollModeActived] = useState(false);

  const scrollModeActivation = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrollModeActived(true);
      } else {
        setIsScrollModeActived(false);
      }
    });
  };

  useEffect(() => {
    scrollModeActivation();
  }, []);

  return (
    <div
      className={
        isScrollModeActived ? "header-container header-on-scroll" : "header-container"
      }
    >
      <header className="wrapper">
        <nav>
          <Logo isScrollModeActived={isScrollModeActived} />
          <Menu />
        </nav>
      </header>
    </div>
  );
};

export default Header;
