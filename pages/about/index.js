import styles from "@/styles/About.module.css";
import FarmIcon from "@/assets/Farm Icon.svg";
import SustainableIcon from "@/assets/Sustainable Practice Icon.svg";
import PlantIcon from "@/assets/Plant-Based Icon.svg";

export const index = () => {
  return (
      <div>
        <div className={styles.nav}>
        </div>
        <div className={styles.container}>
          <section className={styles.about}>
            <div className = {styles.londrina}>
            <h1>About Us</h1>
            </div>
          <p>Savor the taste of Filipino cooking while saving the planet at Adobo Agogo</p>
          </section>

          <section className={styles.contentBox + " " + styles.farmToTable}>
            <div className={styles.text}>
              <div className = {styles.londrina}>
              <h2>Farm-To-Table Freshness</h2>
              </div>
              <p>With agriculture being the largest sector in the Philippines, Adobo Agogo understands the importance of supporting those who support you. That's why all of our seasonal ingredients are sourced directly from local farmers.
</p>
            </div>
            <FarmIcon className={styles.icon} />
          </section>

          <section className={styles.contentBox + " " + styles.sustainablePractices}>
          <SustainableIcon className={styles.icon} />
            <div className={styles.text}>
              <div className = {styles.londrina}>
              <h2>Sustainable Practices</h2>
              </div>
              <p>With more customers embracing eco-friendly lifestyles, Adobo Agogo embraces them through our usage of recyclable packaging as well as our commitment to sustainability.
</p>
            </div>
          </section>

          <section className={styles.contentBox + " " + styles.plantBased}>
            <div className={styles.text}>
              <div className = {styles.londrina}>
              <h2>Plant-Based</h2>
              </div>
              <p>Filipino cuisine is often meat-centric, making it challenging for vegetarians and vegans to find options. At Adobo Agogo, our commitment to plant-based cooking allows everyone to celebrate the rich flavors of the Philippines.
</p>
            </div>
            <PlantIcon className={styles.icon} />
          </section>

          <section className={styles.contactSection}>
            <h1 className={styles.contactTitle}>Contact & Information</h1>
            <div className={styles.contactBox}>
              <div className={styles.contactDetailsTop}>
                <div className = {styles.londrina}>
                <h2 className={styles.contactSubtitle}>Location</h2>
                </div>
                <p>728 Mabini Street<br />San Francisco, CA 94110</p>
              </div>
              <div className={styles.contactDetails}>
                <div className = {styles.londrina}>
                <h2 className={styles.contactSubtitle}>Telephone</h2>
                </div>
                <p>+1 415-872-6655 </p>
              </div>
              <div className={styles.contactDetails}>
                <div className = {styles.londrina}>
                <h2 className={styles.contactSubtitle}>Email</h2>
                </div>
                <p><a href = "INFO@ADOBOAGOGO.COM" style = {{color: "white"}}>INFO@ADOBOAGOGO.COM</a></p>
              </div>
            </div>
            <div className={styles.contactFooter}>
              <div className={styles.footerColumn}>
                <p><strong>Work At Adobo</strong></p>
                <p>Press Inquiries</p>
                <p><a href = "PR@adoboveganrestaurants.com" style = {{color: "white"}}>PR@adoboveganrestaurants.com</a></p>
              </div>
              <div className={styles.footerColumnMiddle}>
                <p>728 Mabini Street<br />San Francisco, CA 94110<br />
                +1 415-872-6655 ·<br /><a href = "INFO@ADOBOAGOGO.COM" style = {{color: "white"}}>INFO@ADOBOAGOGO.COM</a></p>
              </div>
              <div className={styles.footerColumn}>
                <p><strong>Connect with us</strong></p>
                <p><a href="#">Sign up for emails</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}


export default index;
