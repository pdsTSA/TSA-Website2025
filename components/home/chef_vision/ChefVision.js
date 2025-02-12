import styles from "./ChefVision.module.css";
import Image from "next/image";

const ChefVision = () => {
    return <div className={styles.bio}>
        <div className={styles.bio_content}>
            <div className={styles.bio_column}>
                <p>For <b>Chef Miguel Santos</b>, creating <b>Adobo
                    Agogo</b> wasn’t just about sharing Filipino
                    flavors—it was about <b>redefining them for a
                        new generation</b>. Growing up in Manila, he
                    loved the bold, comforting dishes of his
                    childhood but noticed how heavily they relied
                    on meat. After transitioning to a plant-based
                    lifestyle for health and environmental reasons,
                    he was determined to prove that Filipino food
                    could be <b>just as delicious, hearty, and
                        satisfying—without animal products.</b></p>
                <p>Adobo Agogo boasts a global client base and
                    various industry awards. It has set the standard
                    for design studios as its clients collaborate with
                    the highest caliber of creatives, engineers, and
                    ambassadors. Whether you're a lifelong vegan
                    or just exploring plant-based options, <b>we
                        welcome you to experience the best of
                        Filipino cuisine—reimagined.</b></p>
            </div>
            <div className={styles.bio_column}>
                <Image src={"/owner.jpg"}
                       alt={"The owner of the restaurant"}
                       width={400} height={600}
                       className={styles.bio_image}
                />
            </div>
        </div>
    </div>
}

export default ChefVision