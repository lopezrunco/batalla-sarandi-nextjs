import styles from "../styles/AboutIntro.module.css";

const AboutIntro = () => {
  return (
    <section className={styles.aboutIntro}>
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.title}>
            <span className="top-title">¿Qué hacemos?</span>
            <h2>Establecimiento Batalla de Sarandí</h2>
            <div className="separator"></div>
          </div>

          <div className={styles.content}>
            <p>
              En la zona de Puntas de Sarandí se ubica el Establecimiento
              Batalla de Sarandí. Desarrolla su producción remitiendo a
              Conaprole desde hace más de 50 años, en un predio de 39 hectáreas
              del Instituto Nacional de Colonización.
              <br />
              Entre las mejoras mas significativas está un sistema de riego por
              aspersión, que junto a un manejo intensivo, le permite llegar a
              producir 500.000 litros anuales de leche.
              <br />
              El establecimiento es reconocido como modelo de producción por
              autoridades gubernamentales y gremiales de todo el país.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutIntro;
