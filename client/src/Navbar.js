import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
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
    // eslint-disable-next-line react/no-unknown-property
    <nav class="border border-danger  navbar-light bg-dark text-white">
      <div className="nav-center">
        <div className="nav-header">
          <img src="../logo.png" className="logo" alt="logo" />
          <h2>stuDB</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container text-white"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className=" btn btn-success " key={id}>
                  <a
                    className=" link-light link-offset-2 link-underline link-underline-opacity-0"
                    href={url}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social icons */}
        {/* <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
