import { useState } from "react";

const Menu = () => {
  const [isBurgerMenuActivated, setIsBurgerMenuActivated] = useState(false);

  const handlerBurgerMenuActivation = () => {
    if (isBurgerMenuActivated) {
      setIsBurgerMenuActivated(false);
    } else {
      setIsBurgerMenuActivated(true);
    }
  };

  return (
    <div className="menu-container">
      <div className="icon-container">
        <i
          className={
            isBurgerMenuActivated
              ? "menu-burger-handler fa-solid fa-xmark"
              : "menu-burger-handler fa-solid fa-bars"
          }
          onClick={() => handlerBurgerMenuActivation()}
        ></i>
      </div>
      <ul className={isBurgerMenuActivated ? "showMenu" : null}>
        <li>
          <a href="#hero" onClick={() => handlerBurgerMenuActivation()}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handlerBurgerMenuActivation()}>
            À propos
          </a>
        </li>
        <li>
          <a href="#experiences" onClick={() => handlerBurgerMenuActivation()}>
            Expériences
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => handlerBurgerMenuActivation()}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handlerBurgerMenuActivation()}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
