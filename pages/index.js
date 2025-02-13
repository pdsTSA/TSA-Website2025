import styles from "./Home.module.css"
import SplashImage from "@/components/home/splash/Splash";
import Image from "next/image";
import ColorBlock from "@/components/home/color_block/ColorBlock";
import { Poetsen_One } from 'next/font/google'
import FeaturedItem from "@/components/home/featured_item/FeaturedItem";
import WhyAdobo from "@/components/home/why_adobo/WhyAdobo";

const font = Poetsen_One({
  subsets: ['latin'],
  weight: "400"
})

const Home = () => {
  return <div className={styles.home}>
    <SplashImage></SplashImage>
    <WhyAdobo />
    <br/>
    <ColorBlock color={"#74a9bc"}>
      <h1>Schedule</h1>
    </ColorBlock>
    <ColorBlock color={"#10607a"}>
      <br/>
      <FeaturedItem />
    </ColorBlock>
  </div>
}

export default Home;
