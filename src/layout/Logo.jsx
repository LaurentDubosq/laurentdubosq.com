const Logo = ({ isScrollModeActived, shouldDisplayLink = true }) => {

  const logo = <h2 className="logo">
    Portfo<span
      className="color-emphased"
      style={{ color: isScrollModeActived ? "white" : "crimson" }}
    >lio.</span>
  </h2>

  return (
    <div className="logo-container">
      { shouldDisplayLink === true ? <a href="/">{ logo }</a> :  logo  }
    </div>
  );
};

export default Logo;
