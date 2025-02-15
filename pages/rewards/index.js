import styles from  './index.module.css';
import Logo from "@/assets/Rewards Page Blue Sun.svg";
import Medal from "@/assets/Rewards Page Metal Image.svg";
import {Londrina_Solid} from "next/font/google";

const font = Londrina_Solid({ subsets: ['latin'], weight: "400" });

export const index = () => {
  return (
      <div className = {styles.container}>
        <div className = {styles.hero}>
          <h1 className = {`${styles.title} ${font.className}`}>SustainaBites <br /> Rewards Club</h1>
          <p className = {styles.subtitleOne}>One Bite Closer to a Greener Tomorrow</p>
          <p className = {`${styles.subtitle}`}>
            Earn points while dining at Adobo Agogo, either
            on-site or to-go!
            By joining the SustainaBites Rewards Club, you'll 
            earn points every time you dine sustainably which
            you can use to earn rewards. Sign 
            up with your first purchase today to start 
            eating towards a sunny future!
          </p>
        </div>
        <Logo className = {styles.logo} />

        

       <div className = {styles.rewards}>
        <div className = {styles.reward}>
          <div className = {styles.num}>1</div>
            <p className = {styles.subnumOne}>
            <strong>Eat & Earn</strong>
            </p>
            <p className = {styles.subnum}>
            Earn <strong>10</strong> points for every $10 spent at Adobo
            Agogo
            </p>
        </div>


        <div className = {styles.reward}>
          <div className = {styles.num}>2</div>
            <p className = {styles.subnumOne}>
            <strong>Redeem & Reuse</strong>
            </p>
            <p className = {styles.subnum}>
            Use points to earn free food, discounts,
            and other eco-friendly rewards like reusable
            Adobo Agogo cups and bowls
            </p>
        </div>


        <div className = {styles.reward}>
          <div className = {styles.num}>3</div>
            <p className = {styles.subnumOne}>
            <strong>Save & Sustain</strong>
            </p>
            <p className = {styles.subnum}>
            For every <strong>500</strong> points earned, we plant a 
            tree in the Philippines to help restore forests
            </p>
        </div>
      </div>  

      <div className = {styles.rSection}>
        <h1>Redeeming Rewards</h1>
        <div className = {styles.rContainer}>
          <div className = {styles.r}>
          <Medal className = {styles.medal} />
          <h3>50 points</h3>
          <p>Free vegetarian lumpia!</p> 
          </div>

          <div className = {styles.r}>
          <Medal className = {styles.medal} />
          <h3>100 points</h3>
          <p>Free reusable bamboo utensil set!</p> 
          </div>

          <div className = {styles.r}>
          <Medal className = {styles.medal} />
          <h3>150 points</h3>
          <p>Reusable takeout container <i>eligible for discounts</i>!</p> 
          </div>

          <div className = {styles.r}>
          <Medal className = {styles.medal} />
          <h3>200 points</h3>
          <p>20% off your next meal and a dessert on us!</p> 
          </div>

          <div className = {styles.r}>
          <Medal className = {styles.medal} />
          <h3>250 points</h3>
          <p>VIP discounts with reusable merchandise!</p> 
          </div>

          <div className = {styles.r}>
          <Medal className = {styles.medal} />
          <h3>500 points</h3>
          <p>A tree is planted through 
          our Tree of Life partnership!</p> 
          </div>
        </div>
      </div>

      </div>

  



  )
}


export default index;
