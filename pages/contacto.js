import PageHeader from "../components/PageHeader"
import ContactInfo from "../components/ContactInfo"
import Map from "../components/Map"

const Contacto = () => {
    return <>
        <PageHeader
            bgImage='contacto-header'
            title='Contacte con nosotros'
            page='Contacto'
        />
        <ContactInfo />
        <Map />
    </>
}

export default Contacto