import style from "./Signup.module.css"
import {GoogleLogin} from "@react-oauth/google";
import {Londrina_Solid} from "next/font/google";
import Logo from "@/assets/logo.svg";
import Link from "next/link";


const font = Londrina_Solid({
    subsets: ['latin'],
    weight: "400"
})

const index = () => {
  return (
      <div className={style.overflow_background}>
          <div className={style.signup}>
              <div className={style.signup_content}>
                  <div className={style.signup_item}>
                      <Logo/>
                  </div>
                  <h1 className={font.className}>Sign Up For Adobo Agogo</h1>
                  <div className={style.signup_item}>
                      <input className={font.className} placeholder={"Name"}/>
                  </div>
                  <div className={style.signup_item}>
                      <input className={font.className} placeholder={"Email"}/>
                  </div>
                  <div className={style.signup_item}>
                      <button className={font.className}>Sign Up!</button>
                  </div>
                  <h2 className={font.className}>Or log in with Google</h2>
                  <div className={style.signup_item}>
                      <GoogleLogin onSuccess={() => {}} />
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
