import style from './productsMobile.module.scss'
import Image from 'next/image'

const ProductsMobile = () => {
    return (
        <section className={style.container}>
            <div className={style.container__info}>
                <h5>Unfortunately we don't have enough space here...</h5>
                <p>... for our hardware finder. But feel free to visit this page while having your morning coffee at work and browse through recommendations, overviews and helpful links to the latest mobile devices.</p>
                <Image
                    src="/hardware_finder.jpg"
                    alt="hardware_finder"
                    width={510}
                    height={382.5}
                    priority/>           
            </div>
        </section>
    )
}

export default ProductsMobile