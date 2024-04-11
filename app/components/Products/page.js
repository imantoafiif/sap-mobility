import style from './products.module.scss'

const Products = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.content__filter}>
                    <p>Selection</p>
                    <span className={style.content__filter__chip__active}>All devices</span>
                    <span className={style.content__filter__chip}>Our favorites</span>
                    <span className={style.content__filter__chip}>Rental equipment</span>
                </div>
                <div className={style.content__filter}>
                    <p>Device Type</p>
                    <span className={style.content__filter__chip}>Handheld Computer</span>
                    <span className={style.content__filter__chip}>Smartphone</span>
                    <span className={style.content__filter__chip}>Forklift Terminal / Tablet</span>
                    <span className={style.content__filter__chip}>Wearable / Handheld Scanner</span>
                    <span className={style.content__filter__chip}>Printer</span>
                </div>
            </div>
        </section>
    )
}

export default Products