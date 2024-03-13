import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          {/* <a href="#home" className={`${styles.logo}`}>
            FWDUSA
          </a> */}

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            {/* <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li> */}
            {/* <li onClick={removeActive}>
              <Link to="/Experience" className={`${styles.navLink}`}>
                Experience
              </Link>
            </li> */}
            {/* <li onClick={removeActive}>
              <Link to="/Skills" className={`${styles.navLink}`}>
                Skills
              </Link>
            </li> */}
            {/* <li onClick={removeActive}>
              <Link to="/About" className={`${styles.navLink}`}>
                About
              </Link>
            </li> */}
            {/* <li onClick={removeActive}>
              <Link to="/Contact" className={`${styles.navLink}`}>
                Contact
              </Link>
            </li> */}
          </ul>

          {/* <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div> */}
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
