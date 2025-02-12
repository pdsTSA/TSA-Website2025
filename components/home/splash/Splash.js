import styles from "./Splash.module.css";
import LogoNoBg from "@/assets/logo-nobg.svg";

const SplashLogo = () => {
    return <div className={styles.splash_logo_bar}>
        <LogoNoBg className={styles.splash_logo}></LogoNoBg>
        <div>
            <button>Order now!</button>
        </div>
    </div>
}

const SplashImage = () => {
    return <div className={styles.splash}>
        <SplashLogo></SplashLogo>
    </div>
}

export default SplashImage