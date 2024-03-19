import React, {useState} from "react";
import {Link as ScrollLink} from "react-scroll";

// Data
import navData from "../data/navbar.json";

interface NavbarProps {
  name: string;
  number: string;
  email: string;
  address: string;
}

const Navbar: React.FC<NavbarProps> = ({name, number, email, address}) => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [sectionNum, setSectionNum] = useState<number>(1);

  /**
   * Hiding navigation on clicking a nav link (important in mobile view)
   */
  const handleLinkClick = () => {
    setNavActive(false);
  };

  /**
   * Change the number in the navigation depending on the number of sections
   *
   * @param numToActivate number of the activated section
   */
  const handleActive = (numToActivate: number) => {
    setSectionNum(numToActivate);
  };

  /**
   * Toggle menu on clicking on menu btn
   */
  const handleMenuBtnClick = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="content-left">
      <div className="content-left-wrapper">
        <header>
          <div className="toggle-holder">
            <div
              id="toggle"
              onClick={handleMenuBtnClick}
              className={navActive ? "on" : ""}
            >
              <div className="menu-line"></div>
            </div>
          </div>

          <div className="top-pagination">
            <div className="current-num">
              <span>0{sectionNum}</span>
            </div>
            <div className="pagination-div"></div>
            <div className="total-pages-num">0{navData.navLinks.length}</div>
          </div>

          <div className={navActive ? "menu-holder open" : "menu-holder"}>
            <div className="menu-wrapper relative">
              <nav id="header-main-menu">
                <ul className="main-menu sm sm-clean">
                  {navData.navLinks.map((link, i) => (
                    <li key={"nav-" + i} style={{cursor: "pointer"}}>
                      <ScrollLink
                        activeClass="current"
                        smooth
                        spy
                        to={link.to}
                        onClick={handleLinkClick}
                        onSetActive={() => handleActive(i + 1)}
                      >
                        {link.text}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="my-info-wrapper">
            <div className="my-info">
              <p className="my-info-title">Name </p>
              <p className="my-info-content">{name}</p>
              <p className="my-info-title">Number </p>
              <p className="my-info-content">{number}</p>
              <p className="my-info-title">Email </p>
              <p className="my-info-content">{email}</p>
              <p className="my-info-title">Address </p>
              <p className="my-info-content">{address}</p>
            </div>
          </div>

          <div className="big-num">
            <div className="current-big-num">0{sectionNum}</div>
            <div className="icon-scroll"></div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
