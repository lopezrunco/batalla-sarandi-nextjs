import Head from 'next/head'
import { data } from '../data'
import HomeSlider from '../components/HomeSlider'
import News from '../components/News'
import About from '../components/About'
import TestimonialsSection from '../components/TestimonialsSection'
import VideoModal from '../components/VideoModal'

export default function Home({ news }) {
  return (
    <div>
      <Head>
        <title>Establecimiento Batalla de Sarandi</title>
        <meta name="description" content="Reconocido establecimiento lechero como modelo de producción por autoridades gubernamentales y gremiales de todo el país." />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <HomeSlider />
      <About />
      <TestimonialsSection />
      <VideoModal
        videoSrc='https://www.youtube.com/embed/VmA-iiTDnso'
        bgImgName='video-section-bg1.jpg'
        title='40 hectáreas de producción intensiva'
        subtitle='Conozca nuestro establecimiento'
      />
      <News news={news} />
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