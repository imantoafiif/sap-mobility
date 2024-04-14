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
    const [selectedItem, setSelectedItem] = React.useState(null)

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

    const handleSelectedItem = v => {
        if(v < 0) {
            setSelectedItem({
                ...selectedItem,
                key: -1,
            })
            return
        }
        setSelectedItem(v)
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
        console.log(filteredProducts)
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
                    filteredProducts.map((product, key) => (
                        <div
                            key={key} 
                            className={style.filtered__container}>
                            <div className={style.filtered__lists}>
                                {
                                    product.items.map(item => (
                                        <div 
                                            key={item.id}
                                            onClick={() => handleSelectedItem({
                                                key,
                                                item
                                            })}
                                            className={style.filtered__card}>
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
                            {
                                (
                                    <div className={`
                                        ${style.filtered__detail} 
                                        ${selectedItem?.key === key ? style.display : style.hidden}
                                    `}>
                                        <span onClick={() => handleSelectedItem(-1)}>
                                            <FontAwesomeIcon icon={faX} />
                                        </span>
                                        <div className={style.filtered__detail__container}>
                                            <img src={selectedItem?.item?.image}></img>
                                            <div className={style.filtered__detail__container__specs}>
                                                <h6>{ selectedItem?.item?.name }</h6>
                                                <ul>
                                                    {
                                                        selectedItem?.item?.specifications.map((spec, key) => (
                                                            <li key={key}>{ spec }</li>
                                                        ))
                                                    }
                                                </ul>
                                                <div className={style.filtered__detail__container__chips_container}>
                                                    {
                                                        selectedItem?.item?.operational_area.map(op => (
                                                            <span key={op.value} className={style.filter__filter__chip}>{ op.label }</span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className={style.filtered__detail__container__container}>
                                                <div className={style.filtered__detail__container__desc}>
                                                    <p>Our assessment</p>
                                                    <h5>{ selectedItem?.item?.assessment }</h5>
                                                </div>
                                                <a 
                                                    target='_blank' 
                                                    href={selectedItem?.item?.manufacturer_url}>
                                                    To the manufacturer
                                                    <FontAwesomeIcon icon={faArrowRightLong} />                            </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products