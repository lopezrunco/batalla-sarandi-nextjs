import styles from "../styles/AboutImages.module.css";

const AboutImages = () => {
  return (
    <section className={styles.introImages}>
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.col}>
            <img
              src="images/about-4.png"
              alt="Establecimiento Batalla de Sarandí"
            />
          </div>
          <div className={styles.col}>
            <img
              src="images/about-3.jpg"
              alt="Establecimiento Batalla de Sarandí"
            />
          </div>
          <div className={`${styles.col} ${styles.textCol}`}>
            <div className={styles.overlay}>
              <h2>50 años de producción lechera</h2>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutImages;
