import styles from "./index.module.css";

const CompanyName = ({className}) => {
  return(
    <div className={`${styles.companyTitle} ${className || ''}`}>
      <h2>News For Today</h2>
    </div>
  )
}

export default CompanyName