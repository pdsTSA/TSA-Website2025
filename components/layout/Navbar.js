"use client";

import styles from "./Navbar.module.css";
import {useEffect, useState} from "react";
import Link from "next/link";
import Logo from "@/assets/logo-nobg.svg";
import {Squash as Hamburger} from "hamburger-react";
import {useCookies} from "react-cookie";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    }

    const [signUpText, setText] = useState("");
    const [signUpLink, setLink] = useState("");

    const [cookies, setCookie, removeName] = useCookies(["user.name", "user.email", "user.picture"]);

    useEffect(() => {
        setText((cookies["user.name"] !== undefined) ? "0 Points" : "Sign Up")
        setLink((cookies["user.name"] !== undefined) ? "/points" : "/signup");
    }, [cookies]);

    return (
        <nav className={styles.navbar}>
            <div className="logo">
                <Link href="/">
                    <Logo width={150} height={50}/>
                </Link>
            </div>
            <div className={styles.menuToggle} onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <Hamburger toggled={menuOpen} size={20} toggle={setMenuOpen}/>
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/catering">Catering</a></li>
                <li><a href="/rewards">Rewards</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/reference">Reference Page</a></li>
                <li><a href={signUpLink} className={styles.button}>{signUpText}</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;