import styles from "./FeaturedItem.module.css";
import Image from "next/image";
import gsap from "gsap";
import {Londrina_Solid} from "next/font/google";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

const font = Londrina_Solid({
    subsets: ["latin"],
    weight: "400",
})

const FeaturedItem = () => {
    const content = useRef();

    if (typeof window !== "undefined") {
        console.log(window.innerWidth, window.innerHeight)
    }

    useGSAP(() =>{
        gsap.from(content.current, {
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: content.current,
                start: "top 60%"
            }
        })
    }, {scope: content})

    return <div className={styles.featured}>
        <div className={styles.featured_content} ref={content}>
            <div className={styles.featured_column}>
                <Image src={"/featured-item.jpg"}
                       alt={"The featured item of the day"}
                       width={1000} height={1000}
                       className={styles.featured_image}
                       style={{ width: '80%', height: 'auto' }}
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