import InfoBox from "./InfoBox";
import styles from "../styles/FeaturedInfo.module.css";

const FeaturedInfo = () => {
  return (
    <section>
      <div className="content-wrap">
        <div className={styles.grid}>
          <InfoBox text="50 años de mejoras continuas" />
          <InfoBox text="8.000 litros por lactancia" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfo;
