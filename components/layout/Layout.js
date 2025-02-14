import Footer from "./Footer"
import Navbar from "./Navbar"
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ['latin'], weight: ['800', '500'] });

export const Layout = ({children}) => {
  return (
    <div className = {font.className}>
        <Navbar />
        <main> {children} </main>
        <Footer />
    </div>
  )
}

export default Layout;
