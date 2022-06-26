import styles from "../styles/Map.module.css";

const Map = () => {
  return (
    <section className={styles.map}>
      <article className="content-wrap">
        <h2>¿Dónde estamos?</h2>
        <div className="separator"></div>
        <div className={styles.grid}>
          <div className={styles.mapCol}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37549.591528983445!2d-56.31519546735065!3d-33.68703232236209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a12c5eebfc12d3%3A0x25ad735be1b128ac!2s94100%20Departamento%20de%20Florida!5e0!3m2!1ses-419!2suy!4v1624299830320!5m2!1ses-419!2suy"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.backCircle}></div>
            <img
              src="images/contact-img-col.jpg"
              alt="Establecimiento Batalla de Sarandí"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Map;
