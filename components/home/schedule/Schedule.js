import styles from "./Schedule.module.css"
import {Londrina_Solid} from "next/font/google";

const font = Londrina_Solid({
    subsets: ['latin'],
    weight: "400"
})

const Schedule = () => {
    return <div className={styles.schedule}>
        <div className={styles.schedule_content}>
            <div className={styles.schedule_column}>
                <h1 className={font.className}>Catering</h1>
                <p>All catering orders must be
                    placed at least 5 days in
                    advance. <br/>For catering inquiries
                    and to place your
                    catering order, email
                    us at <br/><br/>INFO@ADOBOAGOGO.COM</p>
            </div>
            <div className={styles.schedule_column}>
                <h1 className={font.className}>Lunch</h1>
                <p>SUN — THURS …12:00 am — 7:00 pm
                    <br/>FRI & SAT  … 12:00 am — 8:00 pm</p>
                <h1 className={font.className}>Dinner</h1>
                <p>SUN — THURS …12:00 am — 7:00 pm
                    <br/>FRI & SAT  … 12:00 am — 8:00 pm</p>
            </div>
        </div>
    </div>
}

export default Schedule