import styles from "../styles/ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <section className={styles.contactInfoCards}>
      <article className="content-wrap">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h4>Emails</h4>
            <p>
              <a href="mailto:info@batalladesarandi.com.uy">
                info@batalladesarandi.com
              </a>
            </p>
            <p>
              <a href="mailto:contacto@batalladesarandi.com">
                contacto@batalladesarandi.com
              </a>
            </p>
          </div>
          <div className={`${styles.card} ${styles.active}`}>
            <h4>Dirección</h4>
            <p>
              Camino al obelisco kilómetro 2,500. <br />
              Puntas de Sarandí, Florida, Uruguay
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ContactInfo;
