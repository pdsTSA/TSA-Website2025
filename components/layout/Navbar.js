import styles from "./Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/assets/logo-nobg.svg";
import { Squash as Hamburger } from "hamburger-react";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  }
return (
      <nav className = {styles.navbar}>
      <div className = "logo">
      <Link href = "/index">
        <Logo width = {150} height = {50} />
      </Link>
      </div>
        <div className = {styles.menuToggle} onClick={() => {
          setMenuOpen(!menuOpen);
          }}>
          <Hamburger toggled={menuOpen} size={20} toggle={setMenuOpen} />
        </div>
        <ul className = {`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li><a href = "/menu">Menu</a></li>
          <li><a href = "/rewards">Rewards</a></li>
          <li><a href = "/catering">Catering</a></li>
          <li><a href = "/about">About Us</a></li>
          <li><a href = "/signup" className = {styles.button}> Sign Up</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;