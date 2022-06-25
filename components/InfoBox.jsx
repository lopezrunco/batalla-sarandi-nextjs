import styles from "../styles/InfoBox.module.css";

const InfoBox = ({ text }) => {
  return (
    <div className={styles.box}>
      <h4>{text}</h4>
    </div>
  );
};

export default InfoBox;
