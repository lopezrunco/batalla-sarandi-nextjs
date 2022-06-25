import styles from "../styles/Footer.module.css";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="content-wrap">
        <div className={styles.flex}>
          <div className={styles.copyright}>
            <small>© {year} Establecimiento Batalla de Sarandí</small>
          </div>
          <div className={styles.credits}>
            <small>
              Desarrollo:{" "}
              <a
                href="https://www.lopezrunco.com/"
                target="_blank"
                rel="noreferrer"
              >
                LopezRunco
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
