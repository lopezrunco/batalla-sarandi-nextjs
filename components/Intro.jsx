import styles from '../styles/Intro.module.css'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className={styles.container}>
            <Image
                src='/images/slider-1.jpg'
                width='100%'
                height='100%'
                layout='fill'
                objectFit='cover'
                alt='Establecimiento Batalla de Sarandi'
            />
        </div>
    )
}

export default Intro