import styles from "../styles/AboutHits.module.css";

const AboutHits = () => {
  const hitsData = [
    {
      date: "47",
      info: "El matrimonio Runco Facal comienza a trabajar la fracción en un régimen de explotación granífero y ovino.",
    },
    {
      date: "70",
      info: "Se traslada la titularidad de la fracción al matrimonio Runco Batista, que comienza la explotación lechera con 15 vacas holando.",
    },
    {
      date: "88",
      info: "El matrimonio Runco López toma la titularidad del establecimiento, dando inicio a una etapa de profundos cambios en infraestructura y modelo de negocio.",
    },
    {
      date: "94",
      info: "Instalación de luz eléctrica y pozo semisurgente. Construcción de nueva sala de ordeñe con sistema de circuito cerrado y tanque de frío.",
    },
    {
      date: "00",
      info: "Construcción de vivienda mediante el plan Mevir y ampliación de la sala de ordeñe.",
    },
    {
      date: "12",
      info: "Construcción de nuevo pozo semisurgente con un caudal de 20.000 litros por hora e instalación de sistema de riego por aspersores en 20 hectáreas de la fracción.",
    },
    {
      date: "14",
      info: "Ampliación del sistema de riego a la totalidad de la fracción.",
    },
    {
      date: "18",
      info: "Múltiples mejoras en el tambo, que incluyen la instalación de silos aéreos y pileta de decantación para manejo de efluentes.",
    },
  ];

  const imagesData = [
    { imgSrc: "images/about-9.jpg" },
    { imgSrc: "images/about-11.jpg" },
    { imgSrc: "images/about-12.jpg" },
    { imgSrc: "images/about-13.jpg" },
    { imgSrc: "images/about-17.jpg" },
  ];

  return (
    <section className={styles.hits}>
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <span className="top-title">Un poco de historia</span>
            <h2>Momentos clave</h2>
            <div className="separator"></div>

            <div className={styles.hitsList}>
              {hitsData.map((el, index) => {
                return (
                  <div className={styles.hit} key={index}>
                    <span className={styles.date}>{`'${el.date}`}</span>
                    <p>{el.info}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.rightCol}>
            {imagesData.map((el, index) => {
              return (
                <img
                  src={el.imgSrc}
                  alt="Historia del Establecimiento Batalla de Sarandí"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutHits;
