import styles from "./Home.module.css"
import SplashImage from "@/components/home/splash/Splash";
import SectionHeader from "@/components/home/section_header/SectionHeader";
import Image from "next/image";
import ChefVision from "@/components/home/chef_vision/ChefVision";
import ColorBlock from "@/components/home/color_block/ColorBlock";
import { Poetsen_One } from 'next/font/google'
import FeaturedItem from "@/components/home/featured_item/FeaturedItem";

const font = Poetsen_One({
  subsets: ['latin'],
  weight: "400"
})

const Home = () => {
  return <div className={styles.home}>
    <SplashImage></SplashImage>
    <br/>
    <br/>
    <SectionHeader content={"Chef's Vision"}></SectionHeader>
    <br/>
    <ChefVision />
    <br/>
    <ColorBlock color={"#10607a"}>
      <br/>
      <FeaturedItem />
    </ColorBlock>
  </div>
}

export default Home;
