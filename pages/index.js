import styles from "./Home.module.css"

const SplashLogo = () => {
  return <div className={styles.home_splash_logo}>
    <h1>Hello</h1>
  </div>
}

const SplashImage = () => {
  return <div className={styles.home_splash}>
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
