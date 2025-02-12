import styles from "./SectionHeader.module.css";
import { Poetsen_One } from 'next/font/google'

const font = Poetsen_One({
    subsets: ['latin'],
    weight: "400"
})

const SectionHeader = ({content}) => {
    return <div className={styles.section_header}>
        <div className={styles.section_border}>
            <div className={styles.section_title}>
                <div>
                </div>
                <h1 className={font.className}>{content}</h1>
            </div>
        </div>
    </div>
}

export default SectionHeader