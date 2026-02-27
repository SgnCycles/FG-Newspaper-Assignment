import styles from "./index.module.css";
import Socials from "../Socials";
import Contact from "../Contact";
import Company from "../Company"

const Topbar = () => {
  return (
    <div className={styles.topBar}>
      <Socials />
      <Company />
      <Contact />
    </div>
  )
}

export default Topbar