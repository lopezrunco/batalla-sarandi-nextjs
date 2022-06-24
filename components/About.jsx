import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className="about">
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.imagesCol}>
            <div className={styles.backCircle}></div>
            <div className={styles.lgImg}></div>
            <div className={styles.smImg}></div>
            <div className={styles.topCircle}>
              <i className="fab fa-pagelines"></i>
            </div>
          </div>

          <div className={styles.textCol}>
            <span className="topTitle">Acerca del establecimiento</span>
            <h2>Somos un tambo modelo</h2>
            <div className="separator"></div>
            <p>
              El Establecimiento Batalla de Sarandí, ubicado en Camino al
              Obelisco, Florida, cuenta con más de 50 años de trayectoria en la
              cuenca lechera. Reconocido hoy por autoridades gubernamentales y
              gremiales como modelo de producción.
            </p>

            <div className={styles.featuredInfo}>
                <div className={styles.box}>
                  <i className="fas fa-check"></i>
                  <h3>2 vacas por hectárea</h3>
                </div>
                <div className={styles.box}>
                  <i className="fas fa-check"></i>
                  <h3>Canje lechero en S.P.L.F</h3>
                </div>
            </div>

            <a href="/nosotros" className="btn btn-lg btn-secondary">
              Saber más
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
