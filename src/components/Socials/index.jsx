import styles from "./socials.module.css";
import { socialIcons } from "../../data/contacts.js";
import { getIconImageUrl } from "../../utils/functions.js";

const Socials = ({className}) => {
  return (
    <div className={`${styles.socialsContainer} ${className || ''}`}>
      {socialIcons.map((icon, index) => (
        <a key={index} href={icon.link}>
          <img
            src={getIconImageUrl(icon.iconImage)}
            alt={`${icon.name} icon`}
            width="30px"
            height="30px"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;