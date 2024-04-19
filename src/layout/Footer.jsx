import { useEffect, useState } from "react";

const Footer = () => {
  const [displayButton, setDisplayButton] = useState(false);

  const handlerScrollTopButtonDisplay = () => {
    if (window.scrollY > 10) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
  };

  useEffect(() => {
    const listenerCB = () => {
      handlerScrollTopButtonDisplay();
    }

    window.addEventListener("scroll", listenerCB);

    return () => {
      window.removeEventListener("scroll", listenerCB);
    }
  }, [])

  return (
    <div className="footer-container theme-white" id="footer">
      <footer className="wrapper">
        <p>
          Design Created & Freely Distributed by{" "}
          <a
            href="https://www.codingnepalweb.com/"
            target="_blank"
            rel="noreferrer"
            className="txt-primary"
          >
            CodingNepal
          </a>{" "}
          | Integrated by{" "}
          <a href="#about" className="txt-primary">
            {" "}
            Laurent Dubosq
          </a>{" "}
          in march 2022
        </p>
        <a
          href="#hero"
          id="scrollTop"
          className={displayButton ? "scrollTopVisible" : "scrollTopHidden"}
        >
          <i className="fas fa-angle-up"></i>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
