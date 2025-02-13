import styles from "./FeaturedItem.module.css";
import Image from "next/image";
import ColorBlock from "@/components/home/color_block/ColorBlock";
import {Londrina_Solid} from "next/font/google";

const font = Londrina_Solid({
    subsets: ["latin"],
    weight: "400",
})

const FeaturedItem = () => {
    return <div className={styles.featured}>
        <div className={styles.featured_content}>
            <div className={styles.featured_column}>
                <Image src={"/featured-item.jpg"}
                       alt={"The featured item of the day"}
                       width={600} height={400}
                       className={styles.featured_image}
                />
            </div>
            <div className={styles.featured_column}>
                <h1 className={font.className}>Featured Item</h1>
                <p>This week, we’re spotlighting our <b>Mushroom
                    Sisig Bowl</b>, a bold and savory take on a Filipino
                    classic. Made with crispy oyster mushrooms,
                    sautéed onions, and fresh chilies, this sizzling
                    dish is finished with a squeeze of calamansi for
                    the perfect balance of heat and citrus. Pictured
                    here, it is served over your choice of garlic rice
                    or pancit bihon, its the ultimate comfort meall
                    —hearty, flavorful, and 100% plant-based.</p>
            </div>
        </div>
    </div>
}

export default FeaturedItem