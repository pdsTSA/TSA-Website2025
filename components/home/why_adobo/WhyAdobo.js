import {Londrina_Solid} from "next/font/google";
import styles from "./WhyAdobo.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';


const font = Londrina_Solid({
    subsets: ["latin"],
    weight: "400",
})

const WhyCard = ({color, children}) => {
    const container = useRef();

    useGSAP(() => {
        gsap.from(container.current, {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: container.current,
                start: "top center"
            }
        })
    }, {scope: container})

    return <div style={{backgroundColor: color}} className={styles.why_card} ref={container}>
        {children}
    </div>
}

const WhyAdobo = () => {
    return <div className={styles.why}>
        <div className={styles.why_content}>
            <h1 className={font.className}>Why Adobo Agogo</h1>
            <h2>At Adobo Agogo, we strive for</h2>
            <div className={styles.cards}>
                <WhyCard color={"#74a9bc"}>
                    <div className={styles.why_card_letter}>
                        <h1>E</h1>
                    </div>
                    <div className={styles.why_card_content}>
                        <h1 className={font.className}>Ethical Eating</h1>
                        <p>We source seasonal ingredients directly from local
                            farmers, ensuring every dish is fresh, nutritious,
                            and supports locally-owned businesses and
                            agriculture.</p>
                    </div>
                </WhyCard>
                <WhyCard color={"#729d82"}>
                    <div className={styles.why_card_letter}>
                        <h1>C</h1>
                    </div>
                    <div className={styles.why_card_content}>
                        <h1 className={font.className}>Conscious Dining</h1>
                        <p>Our eco-friendly preparation process as well as
                            operation minimize  waste with compostable
                            packaging, reduced food waste, and responsible
                            sourcing.</p>
                    </div>
                </WhyCard>
                <WhyCard color={"#74a9bc"}>
                    <div className={styles.why_card_letter}>
                        <h1>O</h1>
                    </div>
                    <div className={styles.why_card_content}>
                        <h1 className={font.className}>Organic Focus</h1>
                        <p>We source organic, locally grown produce and
                            non-GMO plant-based proteins to ensure the
                            freshest flavors. Our ingredients are free from
                            artificial additives, letting the bold, natural taste of
                            Filipino cuisine shine.</p>
                    </div>
                </WhyCard>
            </div>
        </div>
    </div>
}

export default WhyAdobo