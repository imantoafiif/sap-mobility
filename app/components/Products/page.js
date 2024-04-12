import style from './products.module.scss'
import Slider from '../RangeSlider/page'

const Products = () => {

    const selection = [
        { label: 'All devices' },
        { label: 'Our favorites' },
        { label: 'Rental equipment' },
    ]

    const device_type = [
        { label: 'Handheld Computer' }, { label: 'Smartphone' }, { label: 'Forklift Terminal / Tablet' },
        { label: 'Wearable / Handheld Scanner' }, { label: 'Printer' },
    ]

    const manufacturer = [
        { label: 'ACD' }, { label: 'Advantech' }, { label: 'Bixolone' },
        { label: 'Casio' }, { label: 'CAT' }, { label: 'Cipherlab' }, { label: 'Datalogic' },
        { label: 'Cowardly' }, { label: 'Getac' }, { label: 'Gigaset' }, { label: 'Honeywell' },
        { label: 'i.Safe Mobile' }, { label: 'iData' }, { label: 'Keyence' }, { label: 'KoamTac' },
        { label: 'Newland' }, { label: 'Panasonic' }, { label: 'Point Mobile' }, { label: 'ProGlove' },
        { label: 'Samsung' }, { label: 'zebra' },
    ]

    const operational = [
        { label: 'Warehouse & Production' }, { label: 'Beverage Logistics' }, { label: 'Maintenance' },
        { label: 'Field Service' }, { label: 'Healthcare' }, { label: 'Explosion-proof' },
    ]

    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.content__filter}>
                    <p>Selection</p>
                    {
                        selection.map(item => (
                            // style.content__filter__chip__active
                            <span className={style.content__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.content__filter}>
                    <p>Device Type</p>
                    {
                        device_type.map(item => (
                            <span className={style.content__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.content__filter}>
                    <p>Manufacturer</p>
                    {
                        manufacturer.map(item => (
                            <span className={style.content__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.content__filter}>
                    <p>Operational Area</p>
                    {
                        operational.map(item => (
                            <span className={style.content__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.content__filters}>
                    <div>
                        <span>List Price</span>
                        <div className={style.slider_container}>
                            <span className={style.slider_container__input}>
                                <span className={style.slider_container__input__item}>0</span>
                                <span>€</span>
                            </span>
                            <div className={style.rs_slider}>
                                <Slider/>
                            </div>
                            <span className={style.slider_container__input}>
                            <span className={style.slider_container__input__item}>3500</span>
                            <span>€</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>Weight</span>
                        <div className={style.slider_container}>
                            <span className={style.slider_container__input}>
                            <span className={style.slider_container__input__item}>35</span>
                            <span>g</span>
                            </span>
                            <div className={style.rs_slider}>
                                <Slider/>
                            </div>
                            <span className={style.slider_container__input}>
                            <span className={style.slider_container__input__item}>1300</span>
                            <span>g</span>
                            </span>
                        </div>
                        
                    </div>
                </div>
                <div className={style.content__filter_actions}>
                    <span>Alle Angaben / Preise ohne Gewähr</span>
                    <div>
                        <span>Reset Filters</span>
                        <span>Hide Filters</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products