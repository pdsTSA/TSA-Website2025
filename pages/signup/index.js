import style from "./Signup.module.css"
import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
import {Londrina_Solid} from "next/font/google";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import {useCookies} from "react-cookie";
import {jwtDecode} from "jwt-decode";
import {useState} from "react";


const font = Londrina_Solid({
    subsets: ['latin'],
    weight: "400"
})


const index = () => {
    const [nameCookie, setNameCookie, removeName] = useCookies(["user.name"]);
    const [emailCookie, setEmailCookie, removeEmail] = useCookies(["user.email"]);
    const [pictureCookie, setPictureCookie, removePicture] = useCookies(["user.picture"]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const parseGoogleResponse = (credentialResponse) => {
        const cred = credentialResponse.credential;
        const decoded = jwtDecode(cred);

        setCookies(decoded.given_name, decoded.email, decoded.picture)
    }

    const setCookies = (name, email, picture) => {
        setNameCookie("user.name", name);
        setEmailCookie("user.email", email);
        setPictureCookie("user.picture", picture);
    }

    const handleSubmission = () => {
        if (name === "" || email === "") return;
        setCookies(name, email, "default");
    }

    return (
        <div className={style.overflow_background}>
            <div className={style.signup}>
                <div className={style.signup_content}>
                    <div className={style.signup_item}>
                        <Logo/>
                    </div>
                    <h1 className={font.className}>Sign Up For Adobo Agogo</h1>
                    <div className={style.signup_item}>
                        <input className={font.className}
                               placeholder={"Name"}
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className={style.signup_item}>
                        <input className={font.className}
                               placeholder={"Email"}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={style.signup_item}>
                        <button className={font.className} onClick={handleSubmission}>Sign Up!</button>
                    </div>
                    <h2 className={font.className}>Or log in with Google</h2>
                    <div className={style.signup_item}>
                        <GoogleLogin onSuccess={parseGoogleResponse}/>
                    </div>
                    <div className={style.signup_legal}>
                        <Link href={"/terms"}>Terms of Service</Link> | <Link href={"/privacy"}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default index;
