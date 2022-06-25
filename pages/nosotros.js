import PageHeader from "../components/PageHeader"
import AboutIntro from "../components/AboutIntro"

const Nosotros = () => {
    return (
        <>
            <PageHeader
                bgImage='nosotros-header'
                title='Acerca del Establecimiento'
                page='Nosotros'
            />
            <AboutIntro />
            <p>Nosotros page</p>
        </>
    )
}

export default Nosotros