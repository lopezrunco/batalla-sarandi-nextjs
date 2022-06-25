import PageHeader from "../components/PageHeader"
import AboutIntro from "../components/AboutIntro"
import AboutImages from "../components/AboutImages"

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
        </>
    )
}

export default Nosotros