import styles from "./Schedule.module.css"
import {Londrina_Solid} from "next/font/google";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

const font = Londrina_Solid({
    subsets: ['latin'],
    weight: "400"
})

const Schedule = () => {
    const leftCard = useRef();
    const rightCard = useRef();
    const parent = useRef();

    if (typeof window !== "undefined" && window.innerWidth <= 828) {
        console.log("hello")
    }
    const rightDelay = (typeof window !== "undefined" && window.innerWidth <= 828) ? 0 : 0.5

    useGSAP(() => {
        gsap.from(leftCard.current, {
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: leftCard.current,
                start: "top 60%"
            }
        })

        gsap.from(rightCard.current, {
            y: 100,
            opacity: 0,
            delay: rightDelay,
            scrollTrigger: {
                trigger: rightCard.current,
                start: "top 60%"
            }
        })
    }, {scope: parent})

    return <div className={styles.schedule}>
        <div className={styles.schedule_content} ref={parent}>
            <div className={styles.schedule_column} ref={leftCard}>
                <h1 className={font.className}>Catering</h1>
                <p>All catering orders must be
                    placed at least 5 days in
                    advance. <br/>For catering inquiries
                    and to place your
                    catering order, email
                    us at <br/><br/><a href = "INFO@ADOBOAGOGO.COM" style={{color: "white"}}>INFO@ADOBOAGOGO.COM</a></p>
            </div>
            <div className={styles.schedule_column} ref={rightCard}>
                <h1 className={font.className}>Lunch</h1>
                <p>SUN — THURS … 10:00 am — 2:00 pm
                    <br/>FRI & SAT  … 10:00 am — 3:00 pm</p>
                <h1 className={font.className}>Dinner</h1>
                <p>SUN — THURS … 5:00 pm — 10:00 pm
                    <br/>FRI & SAT  … 6:00 pm — 11:00 pm</p>
            </div>
        </div>
    </div>
}

export default Schedule