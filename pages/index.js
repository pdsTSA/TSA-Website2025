import styles from "./Home.module.css"
import LogoNoBg from "@/assets/logo_nobg.svg";

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

const Home = () => {
  return <div className={styles.home}>
    <SplashImage>
    </SplashImage>
  </div>
}

export default Home;
