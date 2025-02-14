import styles from './index.module.css';
import Halo from "@/assets/halohalo.svg";
import Lumpia from "@/assets/lumpia.svg";
import Jackfruit from "@/assets/jackfruit.svg";
import One from "@/assets/green-blue-thing.svg";
import Two from "@/assets/blue-blue thing.svg";
import Three from "@/assets/blue-behind bottom thing.svg";
import Four from "@/assets/green  bottom thing.svg";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const index = () => {
  return (
      <div className={styles.menu}>
        <div className={styles.nav}>

        </div>
          <div className = {styles.menuContainer}>
            <div className = {styles.londrina}>
            <div className = {styles.title}>CATERING</div>
            </div>
            <div className = {playfair.className}>
            <div className = {styles.titletwo}>MENU</div>
            </div>
            <div className = {styles.section}>
            <div className = {styles.tcontainer}>
              <h2>APPETIZERS</h2>
              <ul>
                <li>Steamed Lumpia Tray <span>$35.00</span></li>
                <li>Ensaladang Talong <span>$24.00</span></li>
                <li>Pako Salad <span>$35.00</span></li>
                <li>Lumpiang Sariwa <span>$35.00</span></li>
                <li>Monggo Soup <span>$35.00</span></li>
              </ul>
              <One className = {styles.One} />
              <Lumpia className = {styles.Lumpia} />
            </div>
            </div>

            <div className = {styles.sectionF}>
            <div className = {styles.tcontainerTwo}>
              <h2>FIESTA TRAYS</h2>
              <ul>
                <li>Jackfruit Adobo <span>$35.00</span></li>
                <li>Mushroom Sisig <span>$24.00</span></li>
                <li>Pancit Canton (Wheat Noodles) <span>$35.00</span></li>
                <li>Pancit Bihon (Rice Noodles) <span>$35.00</span></li>
              </ul>
              <Two className = {styles.Two} />
              <Jackfruit className = {styles.Jackfruit} />
            </div>
            </div>

            <div className = {styles.section}>
            <div className = {styles.tcontainer}>
              <h2>SIDES & SWEETS</h2>
              <ul>
                <li>Calamansi Juice Jug (1 gallon) <span>$35.00</span></li>
                <li>Family-Sized Halo-Halo <span>$24.00</span></li>
                <li>Ginisang Kangkong <span>$35.00</span></li>
              </ul>
              <Three className = {styles.Three} />
              <Four className = {styles.Four} />
              <Halo className = {styles.Halo} />
            </div>
            </div>

            <div className = {styles.disclaimer}>
              <p>Menu items and prices subject to change.
              All items listed above are full trays.</p>
            </div>

          </div>
      </div>
  )
}


export default index;
