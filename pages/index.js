import styles from "./Home.module.css"
import SplashImage from "@/components/home/splash/Splash";
import Image from "next/image";
import ColorBlock from "@/components/home/color_block/ColorBlock";
import FeaturedItem from "@/components/home/featured_item/FeaturedItem";
import WhyAdobo from "@/components/home/why_adobo/WhyAdobo";
import Schedule from "@/components/home/schedule/Schedule";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  return <div className={styles.home}>
    <SplashImage></SplashImage>
    <WhyAdobo />
    <br/>
    <ColorBlock color={"#74a9bc"}>
      <Schedule />
    </ColorBlock>
    <ColorBlock color={"#10607a"}>
      <br/>
      <br/>
      <FeaturedItem />
    </ColorBlock>
  </div>
}

export default Home;
