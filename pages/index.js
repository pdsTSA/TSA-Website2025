import styles from "./Home.module.css"
import SplashImage from "@/components/home/splash/Splash";

const Home = () => {
  return <div className={styles.home}>
    <SplashImage></SplashImage>
    <div className={styles.section_header}>
      <div><h1>Hello</h1></div>
    </div>
  </div>
}

export default Home;
