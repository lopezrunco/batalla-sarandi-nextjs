import styles from "../styles/AboutToday.module.css";

const AboutToday = () => {
  const cardsData = [
    { icon: "fas fa-leaf", title: "40 hectáreas" },
    { icon: "fas fa-seedling", title: "70 vacunos" },
    { icon: "fas fa-industry", title: "500.000 lts. anuales" },
  ];

  return (
    <section className={styles.today}>
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <span className="top-title">{new Date().getFullYear()}</span>
            <h2>El establecimiento hoy</h2>
            <div className="separator"></div>
            <p>
              Al día de hoy, el establecimiento produce más de 500.000 litros de
              leche al año, manejando unas 70 vacas en parición continua que
              producen 8.000 litros por lactancia, con muy buenos rendimientos
              en pasturas y más de 7.000 kilos de materia seca por hectárea.
              <br />
              La aspiración es acceder a otra fracción lindera de 40 hectáreas
              del Instituto Nacional de Colonización, armar una rotación de
              pasturas por 4 años, criando terneros machos y producir fardos
              para apoyar el tambo y el pastoreo de las vacas.
            </p>

            <div className={styles.cards}>
              {cardsData.map((el, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <i className={el.icon}></i>
                    <h4>{el.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.emptyCol}></div>
        </div>
      </article>
    </section>
  );
};

export default AboutToday;
