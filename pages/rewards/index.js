import styles from  './index.module.css';
import Logo from "@/assets/Rewards Page Blue Sun.svg";
import Medal from "@/assets/Rewards Page Metal Image.svg";

export const index = () => {
  return (
      <div className = {styles.container}>
        <div className = {styles.hero}>
          <h1 className = {styles.title}>SustainaBites <br /> Rewards Club</h1>
          <p className = {styles.subtitleOne}>One Bite Closer to a Greener Tomorrow</p>
          <p className = {styles.subtitle}>
            Earn rewards while supporting sustainability.
            Join the SustainaBites Rewards Club and get 
            points every time you dine sustainably. Sign 
            up with your first purchase today and start 
            earning towards a greener future!
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
            Earn 10 points for every $10 spent at Adobo
            Agogo
            </p>
        </div>


        <div className = {styles.reward}>
          <div className = {styles.num}>2</div>
            <p className = {styles.subnumOne}>
            <strong>Redeem & Reuse</strong>
            </p>
            <p className = {styles.subnum}>
            Use points for free food, discounts,
            and eco-friendly rewards like reusable
            Adobo Agogo cups and containers.
            </p>
        </div>


        <div className = {styles.reward}>
          <div className = {styles.num}>3</div>
            <p className = {styles.subnumOne}>
            <strong>Save & Sustain</strong>
            </p>
            <p className = {styles.subnum}>
            For every 500 points earned, we plant a 
            tree in the Philippines to help restore forests!
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
          <p>VIP discount (5% off when using the reusable container or cup)</p> 
          </div>

          <div className = {styles.r}>
          <Medal className = {styles.medal} />
          <h3>500 points</h3>
          <p>A tree is planted in the Philippines through 
          our Tree of Life partnership!</p> 
          </div>
        </div>
      </div>

      </div>

  



  )
}


export default index;
