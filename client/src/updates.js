import { useState, useRef } from "react";
// import { FaBars } from "react-icons/fa";
import { links } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="nav-center">
        <div className="nav-header">
          <a className="navbar-brand" href="#">
            <img src="../public/logo.png" width="30" height="30" alt="logo" />
          </a>
          <h2 className="ml-2">stuDB</h2>
          <button className="navbar-toggler" onClick={toggleLinks}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="links-container text-white"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="navbar-nav">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="nav-item" key={id}>
                  <a className="nav-link" href={url}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
