'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import style from './products.module.scss'
import React from 'react';

const Products = () => {

    const [mobileExpand, setMobileExpansion] = React.useState(false)

    const toggleMobileExpansion = () => {
        setMobileExpansion(!mobileExpand)
    }

    return (
        <div className={style.menus}>
            <div className={style.menus__header}>
                <Image
                    src="/ontego_subline.svg"
                    alt="arrow"
                    width={104}
                    height={55}
                    priority/>
                <FontAwesomeIcon 
                    onClick={toggleMobileExpansion}
                    className={`${mobileExpand ? style.up : style.down}`}
                    icon={faChevronDown} />
            </div>
            <div className={`${style.menus__dropdown} ${mobileExpand ? style.expand : ''}`}>
                <p className={style.menus__dropdown__title}>Features</p>
                <ul>
                    {
                        ['User Experience', 'Template Principle', 'Sap Integration', 'Offline & Sync+', 'ERP Extensions', 'Ontego Designer']
                        .map((item, key) => (
                            <li key={key}>
                                <a href='#'>{ item }</a>
                            </li>
                        ))
                    }
                </ul>
                <p className={style.menus__dropdown__title}>Areas of Application</p>
                <ul>
                    {
                        ['Warehouse Logistcs', 'Production', 'Inventory', 'Service Management', 'Maintenance', 'Other Areas']
                        .map((item, key) => (
                            <li key={key}>
                                <a href='#'>{ item }</a>
                            </li>
                        ))
                    }
                </ul>
                <p className={style.menus__dropdown__title}>Mobile Devices</p>
                <ul>
                    <li>
                        <i>Find mobile hardware for my employees.</i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Products