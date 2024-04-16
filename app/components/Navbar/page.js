'use client'

import Image from 'next/image'
import style from './navbar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Navbar = () => {

    const [expand, setExpansion] = React.useState(false)
    const [mobileExpand, setMobileExpansion] = React.useState(false)

    const toggleExpansion = () => {
        setExpansion(!expand)
    }

    const toggleMobileExpansion = () => {
        setMobileExpansion(!mobileExpand)
    }

    return (
        <header className={style.header}>
            <div className={style.nav_container}>
                <div className={style.nav_container__header}>
                    <Image
                        src="/ontego_business_mobi.svg"
                        alt="logo"
                        width={165}
                        height={22}
                        priority/>
                    <FontAwesomeIcon onClick={toggleExpansion} icon={faBars} />
                </div>
                <menu>
                    <ul className={style.header__menu}>
                        <li>
                            <span>Products</span>
                            <div className={style.header__submenu__floating}>
                                <div className={style.header__submenu__floating__container}>
                                    <div className={style.header__submenu__floating__container__img}>
                                        <Image
                                            src="/ontego_subline.svg"
                                            alt="arrow"
                                            width={104}
                                            height={55}
                                            priority/>
                                    </div>
                                    <div className={style.header__submenu__wrap}>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>Features</span>
                                            <ul>
                                                {
                                                    ['User Experience', 'Template Principle', 'Sap Integration', 'Offline & Sync+', 'ERP Extensions', 'Ontego Designer']
                                                    .map((item, key) => (
                                                        <li key={key}>
                                                            <a href='https://google.com'>{ item }</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>Areas of Application</span>
                                            <ul>
                                            {
                                                ['Warehouse Logistcs', 'Production', 'Inventory', 'Service Management', 'Maintenance', 'Other Areas']
                                                .map((item, key) => (
                                                    <li key={key}>
                                                        <a href='https://google.com'>{ item }</a>
                                                    </li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>Mobile Devices</span>
                                            <p>Find mobile hardware for my employees.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Why Ontego ?</span>
                            <div className={style.header__submenu__floating}>
                                <div className={style.header__submenu__floating__container}>
                                    <div className={style.header__submenu__floating__container__img}>
                                        <Image
                                            src="/ontego_subline.svg"
                                            alt="arrow"
                                            width={104}
                                            height={55}
                                            priority/>
                                    </div>
                                    <div className={style.header__submenu__wrap}>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>Good Reasons</span>
                                            <p>Why companies rely on Ontego Business Mobility.</p>
                                        </div>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>In Use</span>
                                            <ul>
                                                <li>Credentials</li>
                                            </ul>
                                        </div>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>This is us</span>
                                            <ul>
                                                <li>Pursue</li>
                                                <li>Locations</li>
                                                <li>Career</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Events</span>
                            <div className={style.header__submenu__floating}>
                                <div className={style.header__submenu__floating__container}>
                                    <div className={style.header__submenu__floating__container__img}>
                                        <Image
                                            src="/ontego_subline.svg"
                                            alt="arrow"
                                            width={104}
                                            height={55}
                                            priority/>
                                    </div>
                                    <div className={style.header__submenu__wrap}>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>Trade Fairs & Congresses</span>
                                            <ul>
                                                <li>VLB Logistics Congress 2024</li>
                                                <li>LogiMAT 2024</li>
                                            </ul>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Resources</span>
                            <div className={style.header__submenu__floating}>
                                <div className={style.header__submenu__floating__container}>
                                    <div className={style.header__submenu__floating__container__img}>
                                        <Image
                                            src="/ontego_subline.svg"
                                            alt="arrow"
                                            width={104}
                                            height={55}
                                            priority/>
                                    </div>
                                    <div className={style.header__submenu__wrap}>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>Trade Fairs & Congresses</span>
                                            <p>Information and tips about MDE for SAP and other ERP systems.</p>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </menu>
                <div className={style.header__req_demo}>
                    <div className={style.hovered}></div>
                    <span>Request a demo</span>
                    <Image
                        src="/arrow_light_blue.svg"
                        alt="arrow"
                        width={18}
                        height={30}
                        priority/>
                </div>
            </div>
            <div className={`
                ${style.mobile_nav} 
                ${expand ? style.display : ''}
            `}>    
                <div className={style.mobile_nav__container}>
                    <ul>
                        <li className={style.active}>Products</li>
                        <li>Why ?</li>
                        <li>Events</li>
                        <li>Resources</li>
                    </ul>
                    <div className={style.products}>
                        <div className={style.products__menus}>
                            <div className={style.products__menus__header}>
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
                            <div className={`${style.products__menus__dropdown} ${mobileExpand ? style.expand : ''}`}>
                                <p className={style.products__menus__dropdown__title}>Features</p>
                                <ul>
                                    {
                                        ['User Experience', 'Template Principle', 'Sap Integration', 'Offline & Sync+', 'ERP Extensions', 'Ontego Designer']
                                        .map((item, key) => (
                                            <li key={key}>
                                                <a href='https://google.com'>{ item }</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className={style.products__menus__dropdown__title}>Areas of Application</p>
                                <ul>
                                    {
                                        ['Warehouse Logistcs', 'Production', 'Inventory', 'Service Management', 'Maintenance', 'Other Areas']
                                        .map((item, key) => (
                                            <li key={key}>
                                                <a href='https://google.com'>{ item }</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className={style.products__menus__dropdown__title}>Mobile Devices</p>
                                <ul>
                                    {
                                        ['Warehouse Logistcs', 'Production', 'Inventory', 'Service Management', 'Maintenance', 'Other Areas']
                                        .map((item, key) => (
                                            <li key={key}>
                                                <a href='https://google.com'>{ item }</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={style.products__request}>
                            Request a Demo
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.header__submenu}>
                <div className={style.header__submenu__container}>
                    <Image
                        src="/ontego_subline.svg"
                        alt="arrow"
                        width={104}
                        height={55}
                        priority/>
                    <div className={style.header__submenu__menus}>
                        <ul>
                            <li>
                                <font>Features</font>
                                <div>
                                    <span>User Experience</span>   
                                    <span>Template Principle</span>
                                    <span>SAP Integration</span>
                                    <span>Offline & Sync+</span>
                                    <span>ERP Extensions</span>
                                    <span>Ontego Designer</span>
                                </div>
                            </li>
                            <li>
                                <font>Areas of Application</font>
                                <div>
                                    <span>Warehouse Logistics</span> 
                                    <span>Production</span>
                                    <span>Inventory</span>
                                    <span>Service Management</span>
                                    <span>Maintenance</span>
                                    <span>Other Areas</span>  
                                </div>
                            </li>
                            <li><font>Mobile Devices</font></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar