import styles from "./Home.module.css"
import SplashImage from "@/components/home/splash/Splash";
import SectionHeader from "@/components/home/section_header/SectionHeader";
import Image from 'next/image'


const Home = () => {
  return <div className={styles.home}>
    <SplashImage></SplashImage>
    <br></br>
    <br></br>
    <SectionHeader content={"Chef's Vision"}></SectionHeader>
    <br></br>

  </div>
}

export default Home;
