import Head from 'next/head'
import { data } from '../data'
import HomeSlider from '../components/HomeSlider'
import News from '../components/News'
import Testimonials from '../components/Testimonials'

export default function Home({ news }) {
  return (
    <div>
      <Head>
        <title>Establecimiento Batalla de Sarandi</title>
        <meta name="description" content="Reconocido establecimiento lechero como modelo de producción por autoridades gubernamentales y gremiales de todo el país." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeSlider />
      <News news={news} />
      <Testimonials />
    </div>
  )
}

// This method allows to render data before rendering component or pages
export const getStaticProps = async () => {
  const news = data
  return {
    props: { news }
  }
}