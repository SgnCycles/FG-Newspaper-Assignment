import styles from "./subscribe.module.css";

const Subscribe = ({className}) => {
  return (
    <form className={`${styles.subscribeForm} ${className || ''}`} action="mailto:someone@email.com" method="POST" encType="text/plain">
      <div className={styles.subscribeInputWrapper}>
        <input className={styles.subscribeInput} type="text" name="Name" id="name" placeholder="First Name" required></input>
        <input className={styles.subscribeInput} type="text" name="e-mail" id="e-mail" placeholder="E-mail" required></input>
      </div>
      <button className={styles.subscribeSubmit} type="submit">Submit</button>
    </form>
  );
};

export default Subscribe