import Image from 'next/image'
import { data } from '../../data'
import styles from '../../styles/New.module.css'

const New = ({ newItem }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {newItem.images.map(img => (
                    <div key={img.id} className={styles.imgContainer}>
                        <Image
                            src={img.url}
                            width='100%'
                            height='100%'
                            objectFit='cover'
                            layout='responsive'
                            alt='Desc'
                        />
                    </div>
                ))}
            </div>
            <div>
                <h1 className={styles.title}>{newItem.title}</h1>
                <p className={styles.desc}>{newItem.longDesc}</p>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const news = data
    const paths = news.map(item => {
        return {
            params: {name: item.name}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {
    const name = ctx.params.name
    const newItem = data.filter(item => item.name === name)[0]
    return {
        props: { newItem }
    }
}

export default New