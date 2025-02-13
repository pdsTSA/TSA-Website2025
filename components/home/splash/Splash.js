import styles from "./Splash.module.css";
import LogoNoBg from "@/assets/logo-nobg.svg";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {Londrina_Solid} from "next/font/google";
import Link from "next/link";

const font = Londrina_Solid({
    subsets: ["latin"],
    weight: "400",
})

const SplashLogo = () => {
    const bar = useRef();
    const logo = useRef();
    const button = useRef();

    useGSAP(() => {
        gsap.from(bar.current, {
            height: 0,
            opacity: 0,
            delay: 0.5,
            duration: 1
        });

        gsap.from(logo.current, {
            opacity: 0,
            delay: 0.5,
            duration: 1
        });

        gsap.from(button.current, {
            opacity: 0,
            delay: 1.5,
            duration: 1
        });
    }, {scope: bar})

    return <div className={styles.splash_logo_bar} ref={bar}>
        <LogoNoBg className={styles.splash_logo} ref={logo}></LogoNoBg>
        <div>
            <Link href={"/menu"}>
                <button ref={button} className={font.className}>Order now!</button>
            </Link>
        </div>
    </div>
}

const SplashImage = () => {
    return <div className={`${styles.splash} ${styles.splash_tint}`}>
        <SplashLogo></SplashLogo>
    </div>
}

export default SplashImage