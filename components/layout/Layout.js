import Footer from "./Footer"
import Navbar from "./Navbar"
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['800', '500'] });

export const Layout = ({children}) => {
  return (
    <div className = {playfair.className}>
        <Navbar />
        <main> {children} </main>
        <Footer />
    </div>
  )
}

export default Layout;
