import GalleryGrid from "../components/GalleryGrid"
import PageHeader from "../components/PageHeader"

const Galeria = () => {
    return <>
        <PageHeader
            bgImage='galeria-header'
            title='En imágenes'
            page='Galería'
        />
        <GalleryGrid />
    </>
}

export default Galeria