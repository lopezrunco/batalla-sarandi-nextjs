import { useState } from 'react'
import { data } from '../../data'
import PageHeader from '../../components/PageHeader'
import styles from '../../styles/New.module.css'

const New = ({ newItem }) => {
    const [openVideoModal, setOpenVideoModal] = useState(false)
    const handleClick = () => {
        setOpenVideoModal(!openVideoModal)
    }

    return (
        <>
            <PageHeader
                bgImage='novedades-item-header'
                title={newItem.title}
                page='Novedades'
            />

            <section className={styles.newBody}>
                <article className="content-wrap">

                    <div className={styles.introGrid}>
                        <div className={styles.image}>
                            <img src={`/images/${newItem.photo}`} alt="Visita del ministro Tabaré Aguerre" />
                        </div>
                        <div className={styles.introText}>
                            <h4>{newItem.secondaryInfo.title}</h4>
                            <p>{newItem.secondaryInfo.text}</p>
                            <ul className={styles.list}>
                                {newItem.secondaryInfo.infoList.map((el, index) => <li key={index}>{el}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.bodyGrid}>
                        <div className={styles.text}>
                            <h2>{newItem.title}</h2>
                            <p>{newItem.desc}</p>
                            <p>{newItem.longDesc}</p>
                        </div>
                        <div className={styles.videoThumb} onClick={handleClick}>
                            <img src={`/images/${newItem.videoThumb}`} alt={newItem.title} />
                            <div className={styles.playIcon}>
                                <a>
                                    <i className="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {openVideoModal && (
                        <div className={styles.videoModal}>
                            <div className={styles.closeIcon} onClick={handleClick}>
                                <i className="fas fa-times"></i>
                            </div>
                            <iframe src={`https://www.youtube.com/embed/${newItem.videoSrc}`} title="YouTube video player" frameBorder="0" allow="autoplay" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    )}

                </article>
            </section>
        </>
    )
}

export const getStaticPaths = async () => {
    const news = data
    const paths = news.map(item => {
        return {
            params: { name: item.name }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => { // The parameter "ctx" (context) is a reference to the object "params:{name:item.name}" of the getStaticPaths function.
    const name = ctx.params.name
    const newItem = data.filter(item => item.name === name)[0] // In accordance to the parameter name we fetch the data
    return {
        props: { newItem }
    }
}

export default New