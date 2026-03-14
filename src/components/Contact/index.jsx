import styles from "./contact.module.css";
import { getIconImageUrl } from "../../utils/functions.js";
import { phoneContact } from "../../data/contacts.js";

const ContactNumber = () => {
  return (
    <div className={styles.contactNumberContainer}>
      <div className={styles.contactIcon}>
        <img src={getIconImageUrl(phoneContact.iconImage)}
            alt={`${phoneContact.type} icon`}
            width="15px"
            height="15px"/>
      </div>
      <a href={`tel:${phoneContact.callNumber}`}>{phoneContact.number}</a>
    </div>
  );
};

export default ContactNumber