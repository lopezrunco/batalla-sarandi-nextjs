import styles from "../styles/CertificationsChecks.module.css";

const CertificationsChecks = ({ text }) => {
  return (
    <div className={styles.item}>
      <i className="fas fa-check"></i>
      <p>{text}</p>
    </div>
  );
};

export default CertificationsChecks;
