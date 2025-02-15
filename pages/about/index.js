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
          <p>At Adobo Agogo, we strive to redefine Filipino cuisine while prioritizing sustainability!</p>
          </section>

          <section className={styles.contentBox + " " + styles.farmToTable}>
            <div className={styles.text}>
              <div className = {styles.londrina}>
              <h2>Farm-To-Table Freshness</h2>
              </div>
              <p>We source seasonal ingredients directly from local farmers, ensuring every dish is fresh, nutritious, and supports locally-owned businesses and agriculture.</p>
            </div>
            <FarmIcon className={styles.icon} />
          </section>

          <section className={styles.contentBox + " " + styles.sustainablePractices}>
          <SustainableIcon className={styles.icon} />
            <div className={styles.text}>
              <div className = {styles.londrina}>
              <h2>Sustainable Practices</h2>
              </div>
              <p>From compostable packaging to reducing food waste, we're committed to eco-friendly dining that prioritizes people and the planet.</p>
            </div>
          </section>

          <section className={styles.contentBox + " " + styles.plantBased}>
            <div className={styles.text}>
              <div className = {styles.londrina}>
              <h2>Plant-Based</h2>
              </div>
              <p>We source seasonal ingredients directly from local farmers, ensuring every dish is fresh, nutritious, and supports locally-owned businesses and agriculture.</p>
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
