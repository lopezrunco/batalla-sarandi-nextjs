import PageHeader from "../components/PageHeader"
import AboutIntro from "../components/AboutIntro"
import AboutImages from "../components/AboutImages"
import VideoModal from "../components/VideoModal"
import AboutHistory from "../components/AboutHistory"
import AboutHits from "../components/AboutHits"
import AboutToday from "../components/AboutToday"

const Nosotros = () => {
    return (
        <>
            <PageHeader
                bgImage='nosotros-header'
                title='Acerca del Establecimiento'
                page='Nosotros'
            />
            <AboutIntro />
            <AboutImages />
            <VideoModal
                videoSrc='https://www.youtube.com/embed/qI-twSYUwxI'
                bgImgName='video-section-bg2.jpg'
                title='Parto de ganado vacuno lechero'
                subtitle='Conozca nuestro establecimiento'
            />
            <AboutHistory />
            <AboutHits />
            <AboutToday />
        </>
    )
}

export default Nosotros