import PageHeader from "../components/PageHeader"
import NewsGrid from "../components/NewsGrid"

const Novedades = () => {
    return <>
        <PageHeader
            bgImage='novedades-header'
            title='Novedades'
            page='Novedades'
        />
        <NewsGrid />
    </>
}

export default Novedades