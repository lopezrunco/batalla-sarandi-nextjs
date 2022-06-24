import styles from "../styles/TestimonialsSection.module.css";
import TestimonialsSlider from './TestimonialsSlider'

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonial}>
            <article className="content-wrap">
                <div className={styles.grid}>
                    <div className={styles.textCol}>
                        <span className="top-title">Testimonios</span>
                        <h2>¿Qué dicen de nosotros?</h2>
                        <div className="separator"></div>
                        <p>
                            Diferentes autoridades del gobierno y agrupaciones gremiales a nivel departamental y nacional, 
                            además de productores de todo el país y del exterior, han participado de las jornadas de campo realizadas en el 
                            Establecimiento Batalla de Sarandí, dándonos su testimonio y punto de vista acerca de nuestro modelo de producción.
                        </p>
                    </div>

                    <div className={styles.counter}>
                        <div className="icon-circle">
                            <i className="fas fa-tractor"></i>
                        </div>
                        <div className={styles.info}>
                            <h2>500.000 lts</h2>
                            <p>de remisión en el último año</p>
                        </div>
                    </div>

                    <div className={styles.sliderTestimonialCol}>
                        <TestimonialsSlider />
                    </div>

                </div>
            </article>
        </section>
  );
};

export default TestimonialsSection;
