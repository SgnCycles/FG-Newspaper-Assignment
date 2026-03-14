import styles from "./footer.module.css";
import Socials from "../Socials";
import Company from "../Company";
import About from "../About"
import Legal from "../Legal"
import Subscribe from "../Subscribe";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTop}>
          <div className={styles.footerSectionOne}>
            <Company className={styles.footerCompanyTitle}/>
            <div className={styles.aboutShort}>
              News Today delivers the latest headlines and stories that matter, keeping you informed with accurate, timely, and reliable reporting every day.
            </div>
          </div>
          <div className={styles.footerSectionTwo}>
            <h3 className={styles.footerHeaderTitle}>Company</h3>
            <About className={styles.footerAboutSection}/>
          </div>
          <div className={styles.footerSectionThree}>
            <h3 className={styles.footerHeaderTitle}>Subscribe</h3>
            <Subscribe />
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerTrademark}>© News For Today 2026</div>
          <Legal className={styles.footerLegal}/>
          <Socials className={styles.footerSocials}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer