'use client'

import style from './products.module.scss'
import Slider from '../RangeSlider/page'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faX
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import products from '@/app/utils/products';
import filters from '@/app/utils/filters';

const Products = () => {

    const [price, setPriceFilter] = React.useState([0, 3500])
    const [weight, setWeightFilter] = React.useState([35, 1300])
    const [expand, setExpansion] = React.useState(false)
    const [filteredProducts, setFilteredProducts] = React.useState([])
    const [selections, setSelections] = React.useState(['ALL_DEVICES'])
    const [selectedDeviceType, setSelectedDeviceType] = React.useState([])
    const [selectedManufacturer, setSelectedManufacturer] = React.useState([])
    const [selectedOperationalArea, setSelectedOperationalArea] = React.useState([])

    const handleExpansionToggle = () => {
        setExpansion(!expand)
    }

    const handleSelections = v => {
        if(v == 'ALL_DEVICES') {
            setSelections([v])
            return
        }
        if(selections[0] === 'ALL_DEVICES') {
            setSelections([v])
        } else {
            const is_exist = selections.indexOf(v)
            if(is_exist != -1) {
                let s = [...selections]
                s.splice(is_exist, 1)
                if(s.length == 0) s = ['ALL_DEVICES']
                setSelections(s)
                return
            }
            setSelections([...selections, v])
        }
    }

    const handleDeviceType = v => {
        const is_exist = selectedDeviceType.indexOf(v)
        if(is_exist != -1) {
            let s = [...selectedDeviceType]
            s.splice(is_exist, 1)
            setSelectedDeviceType(s)
            return
        }
        setSelectedDeviceType([...selectedDeviceType, v])
    }

    const handleManufacturer = v => {
        const is_exist = selectedManufacturer.indexOf(v)
        if(is_exist != -1) {
            let s = [...selectedManufacturer]
            s.splice(is_exist, 1)
            setSelectedManufacturer(s)
            return
        }
        setSelectedManufacturer([...selectedManufacturer, v])
    }

    const handleOperationalArea = v => {
        const is_exist = selectedOperationalArea.indexOf(v)
        if(is_exist != -1) {
            let s = [...selectedOperationalArea]
            s.splice(is_exist, 1)
            setSelectedOperationalArea(s)
            return
        }
        setSelectedOperationalArea([...selectedOperationalArea, v])
    }

    const setupData = () => {
        let pivot = {
            key: 0,
            items: []
        }
        const structure = []
        for(let i = 0; i < products.length; ++i) {
            const item = products[i]
            if(selections[0] === 'ALL_DEVICES') {
                if(
                    (selectedDeviceType.length ? selectedDeviceType.includes(item.type) : true) &&
                    (selectedManufacturer.length ? selectedManufacturer.includes(item.manufacturer) : true) && 
                    (selectedOperationalArea.length ? selectedOperationalArea.some(element => item.operational_area.some(obj => obj.value === element)) : true) &&
                    (price[0] <= item.price && price[1] >= item.price) &&
                    (weight[0] <= item.weight && weight[1] >= item.weight)
                ) {
                    pivot.items.push(item)
                }
            } else {
                if(
                    (selections.includes('OUR_FAVORITES') ? item.is_favorite : true) && 
                    (selections.includes('RENTAL_EQUIPMENT') ? item.is_rental : true) && 
                    (selectedDeviceType.length ? selectedDeviceType.includes(item.type) : true) && 
                    (selectedManufacturer.length ? selectedManufacturer.includes(item.manufacturer) : true) &&
                    (selectedOperationalArea.length ? selectedOperationalArea.some(element => item.operational_area.some(obj => obj.value === element)) : true) &&
                    (price[0] <= item.price && price[1] >= item.price) &&
                    (weight[0] <= item.weight && weight[1] >= item.weight)
                ) {
                    pivot.items.push(item)
                }
            }
            if((pivot.items.length && pivot.items.length % 4 == 0) || i == products.length - 1) {
                structure.push(pivot)
                pivot = {
                    key: pivot.key + 1,
                    items: []
                }
            }
        }
        setFilteredProducts(structure)
    }

    React.useEffect(() => {
        setupData()
    }, [
        selections, 
        selectedDeviceType, 
        selectedManufacturer,
        selectedOperationalArea,
        price,
        weight
    ])


    return (
        <section className={style.container}>
            <div className={style.filter}>
                <div className={style.filter__filter}>
                    <p>Selection</p>
                    {
                        filters.selection.map(item => (
                            <span 
                                onClick={() => handleSelections(item.value)}
                                key={item.value} 
                                className={`
                                    ${style.filter__filter__chip} 
                                    ${selections.includes(item.value) ? style.active : ''}
                                `}>
                                { item.label }
                            </span>
                        ))
                    }
                </div>
                <div className={style.filter__filter}>
                    <p>Device Type</p>
                    {
                        filters.device_type.map(item => (
                            <span 
                                onClick={() => handleDeviceType(item.value)}
                                key={item.value} 
                                className={`
                                    ${style.filter__filter__chip} 
                                    ${selectedDeviceType.includes(item.value) ? style.active : ''}
                                `}>
                                { item.label }
                            </span>
                        ))
                    }
                </div>
                <div className={`${style.filter__optional_filter} ${expand ? style.active : style.hidden}`}>
                    <div className={style.filter__filter}>
                        <p>Manufacturer</p>
                        {
                            filters.manufacturer.map(item => (      
                                <span 
                                    onClick={() => handleManufacturer(item.value)}
                                    key={item.value} 
                                    className={`
                                        ${style.filter__filter__chip} 
                                        ${selectedManufacturer.includes(item.value) ? style.active : ''}
                                    `}>
                                    { item.label }
                                </span>                            
                            ))
                        }
                    </div>
                    <div className={style.filter__filter}>
                        <p>Operational Area</p>
                        {
                            filters.operational.map(item => (
                                <span 
                                    onClick={() => handleOperationalArea(item.value)}
                                    key={item.value} 
                                    className={`
                                        ${style.filter__filter__chip} 
                                        ${selectedOperationalArea.includes(item.value) ? style.active : ''}
                                    `}>
                                    { item.label }
                                </span>                               
                            ))
                        }
                    </div>
                    <div className={style.filter__filters}>
                        <div>
                            <span>List Price</span>
                            <div className={style.slider_container}>
                                <span className={style.slider_container__input}>
                                    <span className={style.slider_container__input__item}>{ price[0] }</span>
                                    <span>€</span>
                                </span>
                                <div className={style.rs_slider}>
                                    <Slider range={[0, 3500]} onValueChange={setPriceFilter} />
                                </div>
                                <span className={style.slider_container__input}>
                                <span className={style.slider_container__input__item}>{ price[1] }</span>
                                <span>€</span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <span>Weight</span>
                            <div className={style.slider_container}>
                                <span className={style.slider_container__input}>
                                <span className={style.slider_container__input__item}>{ weight[0] }</span>
                                <span>g</span>
                                </span>
                                <div className={style.rs_slider}>
                                    <Slider range={[35, 1300]} onValueChange={setWeightFilter} />
                                </div>
                                <span className={style.slider_container__input}>
                                <span className={style.slider_container__input__item}>{ weight[1] }</span>
                                <span>g</span>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={style.filter__filter_actions}>
                    <span>Alle Angaben / Preise ohne Gewähr</span>
                    <div>
                        <button>Reset Filters</button>
                        <button onClick={handleExpansionToggle}>{ expand ? 'Hide' : 'Show More' } Filters</button>
                    </div>
                </div>
            </div>
            <div className={style.filtered}>
                {
                    filteredProducts.map(product => (
                        <div className={style.filtered__container}>
                            <div className={style.filtered__lists}>
                                {
                                    product.items.map(item => (
                                        <div className={style.filtered__card}>
                                            <div className={style.filtered__card__item}>
                                                <div className={style.filtered__card__item__hov}></div>
                                                <div className={style.filtered__card__item__chips}>
                                                    {
                                                        item.is_rental && (
                                                            <span className={`${style.filtered__card__item__chip} ${style.warning}`}>
                                                                Rental Device
                                                            </span>
                                                        )
                                                    }
                                                    {
                                                        item.is_favorite && (
                                                            <span className={`${style.filtered__card__item__chip} ${style.dark}`}>
                                                                Favorite
                                                            </span>
                                                        )
                                                    }
                                                </div>
                                                <img src={item.image}></img>
                                            </div>
                                            <p>{ item.name }</p>
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
                    ))
                }
            </div>
        </section>
    )
}

export default Products