import { data } from "../data";
import styles from "../styles/Bottom.module.css";

const Bottom = () => {
  return (
    <section className={styles.bottom}>
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.bottomAbout}>
            <h4>Nosotros</h4>
            <p>
              Reconocido establecimiento lechero como modelo de producción por
              autoridades gubernamentales y gremiales de todo el país.
            </p>
          </div>

          <div className={styles.bottomNavigation}>
            <h4>Navegación</h4>
            <div className={styles.footerMenu}>
              <ul>
                <li>
                  <a href="/nosotros">Acerca del Establecimiento</a>
                </li>
                <li>
                  <a href="/galeria">Galería</a>
                </li>
                <li>
                  <a href="/novedades">Novedades</a>
                </li>
                <li>
                  <a href="/contacto">Contacte con nosotros</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.bottomNews}>
            <h4>Últimas novedades</h4>
            <div className={styles.flex}>
              {data.map((el, index) => {
                if (index < 2) {
                  return (
                    <div className={styles.item} key={index}>
                      <div className={styles.grid}>
                        <div className={styles.thumb}>
                          <a
                            href={`/novedades/${el.name}`}
                            className={styles.introText}
                          >
                            <img src={el.images[0].url} alt={el.name} />
                          </a>
                        </div>
                        <div className={styles.info}>
                          <a
                            href={`/novedades/${el.name}`}
                            className={styles.introText}
                          >
                            <p className={styles.introText}>{el.title}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className={styles.bottomContact}>
            <h4>Contacto</h4>
            <p>
              Camino al Obelisco kilometro 2,5. <br /> Sarandí Grande, Florida
            </p>
            <a href="mailto:info@batalladesarandi.com.uy">
              info@batalladesarandi.com.uy
            </a>
            <a href="tel:+59843547094">4354 7094</a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Bottom;
