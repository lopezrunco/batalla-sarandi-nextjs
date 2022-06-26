import PageHeader from "../components/PageHeader"
import ContactInfo from "../components/ContactInfo"

const Contacto = () => {
    return <>
        <PageHeader
            bgImage='contacto-header'
            title='Contacte con nosotros'
            page='Contacto'
        />
        <ContactInfo />
    </>
}

export default Contacto