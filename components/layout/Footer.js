import styles from "./Footer.module.css";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
return (
  <footer className = {styles.footer}>
    <p className = {styles.backToTop} onClick = {scrollToTop}>Back to Top</p>
    <p>COPYRIGHT © 2025 ADOBO AGOGO - ALL RIGHTS RESERVED.</p>
  </footer>

      
    );
}


export default Footer