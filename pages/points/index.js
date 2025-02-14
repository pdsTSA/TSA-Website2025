"use client"

import {useCookies} from "react-cookie";
import styles from "./Points.module.css"
import {Londrina_Solid} from "next/font/google";
import Image from "next/image";
import {useEffect, useState} from "react";

const font = Londrina_Solid({
    subsets: ['latin'],
    weight: "400"
})

const Points = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["user.name", "user.email", "user.picture"])
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        setImage((cookies["user.picture"] === "") ? null : cookies["user.picture"]);
        setName((cookies["user.name"] === "") ? null : cookies["user.name"]);
    }, [cookies]);

    return <div className={styles.overflow_background}>
        <div className={styles.points}>
            <div className={styles.points_content}>
                <div className={styles.points_header}>
                    <div style={{margin: "auto"}}>
                        <h1 className={font.className}>Welcome, {name}!</h1>
                        <h2 className={font.className}>Your points balance: 0</h2>
                    </div>
                    <Image src={image} alt={"hello"} className={styles.profile} width={128} height={128}/>
                </div>

                <div className={styles.points_transactions}>
                    <h1 className={font.className}>Recent Transactions</h1>
                    <ul>
                        <li>No transactions available</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Points;