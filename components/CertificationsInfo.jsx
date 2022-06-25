import Image from "next/image";
import styles from "../styles/CertificationsInfo.module.css";
import CertificationsBodyItems from "./CertificationsBodyItems";
import CertificationsChecks from "./CertificationsChecks";

const CertificationsInfo = () => {
  return (
    <section className={styles.certificate}>
      <article className={styles.certificateHeader}>
        <div className="content-wrap">
          <div className={styles.grid}>
            <div className={styles.box2}>
              <Image
                width="173px"
                height="238px"
                src="/images/grass-fed-logo.png"
                alt="Certificado de Grass Fed"
              />
            </div>
            <div className={styles.box1}>
              <h2>Tambo certificado</h2>
              <div className="separator"></div>
              <h4>
                Producción pastoril, amigable con el medio ambiente y asegurando
                el bienestar animal
              </h4>
              <p>Programa de certificación desarrollado por Conaprole</p>
            </div>
          </div>
        </div>
      </article>

      <article className={styles.certificateBody}>
        <div className="content-wrap">
          <div className={styles.wrapper}>
            <CertificationsBodyItems
              icon="fas fa-leaf"
              title="Dieta en base a pasturas"
              text="Más del 85% de la dieta es pastura y/o reservas forrajeras (base fresca)"
            />
            <CertificationsBodyItems
              icon="fas fa-cloud-sun"
              title="Sistema de producción a cielo abierto"
              text="Las vacas en ordeñe tienen acceso a pastoreo diariamente (a excepción de períodos extraordinarios por restricciones climáticas u otras)"
            />
          </div>
        </div>
      </article>

      <article className={styles.certificateFooter}>
        <div className="content-wrap">
          <div className={styles.wrapper}>
            <img
              src="/images/conaprole.png"
              alt="Conaprole"
              className={styles.logoConaprole}
            />
            <h3>Producción natural, saludable y segura para el consumidor</h3>
            <div className={styles.checksGrid}>
              <CertificationsChecks text="Sin proteínas de origen animal en la alimentación" />
              <CertificationsChecks text="Trazabilidad del ganado y de la leche" />
              <CertificationsChecks text="Sin uso de hormonas o antibióticos como promotores de crecimiento" />
              <CertificationsChecks text="Animales libres de hambre y sed" />
              <CertificationsChecks text="Familias arraigadas en el medio rural" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CertificationsInfo;
