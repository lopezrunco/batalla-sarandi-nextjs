import styles from "../styles/AboutHistory.module.css";

const AboutHistory = () => {
  return (
    <section className={styles.history}>
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <img
              src="images/about-8.jpg"
              alt="Establecimiento Batalla de Sarandí Inicios"
            />
            <img
              src="images/about-5.jpg"
              alt="Establecimiento Batalla de Sarandí Inicios"
            />
            <img
              src="images/about-6.jpg"
              alt="Establecimiento Batalla de Sarandí Inicios"
            />
          </div>
          <div className={styles.rightCol}>
            <span className="top-title">1947</span>
            <h2>Los comienzos</h2>
            <div className="separator"></div>
            <p>
              Los inicios se remontan al año 1947, cuando el matrimonio Runco
              Facal toma la titularidad de un predio de 39 hectáreas del
              Instituto Nacional de Colonización, en la Colonia Antono María
              Fernández. La explotación en esos inicios era netamente granífera
              y ovina.
              <br />
              Hoy, el predio cuenta con numerosas mejoras, entre las que se
              encuentra un sistema de riego instalado en todo el campo, piletas
              de decantación para manejo responsable de efluentes, silos aéreos
              y un manejo intensivo que permite llegar a 500.000 litros anuales,
              con un rodeo de 70 vacas y una distribución de 2 vacas por
              hectárea.
            </p>
            <img
              src="images/about-7.jpg"
              alt="Establecimiento Batalla de Sarandí Inicios"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutHistory;
