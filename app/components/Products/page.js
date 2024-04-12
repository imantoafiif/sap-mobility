import style from './products.module.scss'
import Slider from '../RangeSlider/page'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faX
} from "@fortawesome/free-solid-svg-icons";

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
            <div className={style.filter}>
                <div className={style.filter__filter}>
                    <p>Selection</p>
                    {
                        selection.map(item => (
                            // style.filter__filter__chip__active
                            <span className={style.filter__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.filter__filter}>
                    <p>Device Type</p>
                    {
                        device_type.map(item => (
                            <span className={style.filter__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.filter__filter}>
                    <p>Manufacturer</p>
                    {
                        manufacturer.map(item => (
                            <span className={style.filter__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.filter__filter}>
                    <p>Operational Area</p>
                    {
                        operational.map(item => (
                            <span className={style.filter__filter__chip}>{ item.label }</span>
                        ))
                    }
                </div>
                <div className={style.filter__filters}>
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
                <div className={style.filter__filter_actions}>
                    <span>Alle Angaben / Preise ohne Gewähr</span>
                    <div>
                        <span>Reset Filters</span>
                        <span>Hide Filters</span>
                    </div>
                </div>
            </div>
            <div className={style.filtered}>
                <div className={style.filtered__container}>
                    <div className={style.filtered__lists}>
                        {
                            [0, 1, 2, 3].map(item => (
                                <div className={style.filtered__card}>
                                    <div className={style.filtered__card__item}>
                                        <div className={style.filtered__card__item__hov}></div>
                                        <div className={style.filtered__card__item__chips}>
                                            <span className={`${style.filtered__card__item__chip} ${style.warning}`}>
                                                Rental Device
                                            </span>
                                            <span className={`${style.filtered__card__item__chip} ${style.dark}`}>
                                                Favorite
                                            </span>
                                        </div>
                                        <img src='https://skystatic08.atmos.id/11018/2049634327/2003088216/2012441964/zebra_mc3300@2x.jpeg'></img>
                                    </div>
                                    <p>Zebra MC3300X</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className={style.filtered__detail}>
                        <span>
                            <FontAwesomeIcon icon={faX} />
                        </span>
                        <div className={style.filtered__detail__container}>
                            <img src='https://skystatic08.atmos.id/11018/2049634327/2003088216/2012441964/zebra_mc3300@2x.jpeg'></img>
                            <div className={style.filtered__detail__container__specs}>
                                <h6>Zebra MC3300X</h6>
                                <ul>
                                    <li>Price: from 1100 euros</li>
                                    <li>Display: 4 inches</li>
                                    <li>Weight: 445 grams</li>
                                    <li>Available accessories: various engines - very powerful 2D imager, configuration with pistol grip, rotating head, 0° or 45° scan</li>
                                </ul>
                                <div className={style.filtered__detail__container__chips_container}>
                                    <span className={style.filter__filter__chip}>Warehouse & Production</span>
                                    <span className={style.filter__filter__chip}>Field Service</span>
                                </div>
                            </div>
                            <div className={style.filtered__detail__container__container}>
                                <div className={style.filtered__detail__container__desc}>
                                    <p>Our assessment</p>
                                    <h5>The top device in the mid-range storage class with a large display and full keyboard. Auto-Range Imager enables multiple scans and scans up to 21 m away.</h5>
                                </div>
                                <a 
                                    target='_blank' 
                                    href='https://google.com'>
                                    To the manufacturer
                                    <FontAwesomeIcon icon={faArrowRightLong} />                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.filtered__lists}>
                    {
                            [0, 1, 2, 3].map(item => (
                                <div className={style.filtered__card}>
                                    <div className={style.filtered__card__item}>
                                        <div className={style.filtered__card__item__hov}></div>
                                        <div className={style.filtered__card__item__chips}>
                                            <span className={`${style.filtered__card__item__chip} ${style.warning}`}>
                                                Rental Device
                                            </span>
                                            <span className={`${style.filtered__card__item__chip} ${style.dark}`}>
                                                Favorite
                                            </span>
                                        </div>
                                        <img src='https://skystatic08.atmos.id/11018/2049634327/2003088216/2012441964/zebra_mc3300@2x.jpeg'></img>
                                    </div>
                                    <p>Zebra MC3300X</p>
                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}

export default Products