import Head from 'next/head'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Establecimiento Batalla de Sarandi</title>
        <meta name="description" content="Reconocido establecimiento lechero como modelo de producción por autoridades gubernamentales y gremiales de todo el país." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Intro />
    </div>
  )
}
