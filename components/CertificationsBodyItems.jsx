import styles from "../styles/CertificationsBodyItems.module.css";

const CertificationsBodyItems = ({ icon, title, text }) => {
  return (
    <div className={styles.item}>
      <div className={styles.flex}>
        <div className={styles.icon}>
          <i className={icon}></i>
        </div>
        <div className={styles.content}>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsBodyItems;
