'use client'

import Image from 'next/image'
import style from './navbar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Products from './Products/page';
import Why from './Why/page';
import Events from './Events/page';
import Resources from './Resources/page';
import Demo from './Demo/page'

const Navbar = () => {

    const [expand, setExpansion] = React.useState(false)
    const [activeMobileTab, setActiveTab] = React.useState(0)
    const [reqDemo, setReqDemo] = React.useState(false)

    const toggleExpansion = () => {
        setExpansion(!expand)
    }

    const handleActiveTab = v => {
        setActiveTab(v)
    }

    const handleReqDemo = () => {
        setReqDemo(!reqDemo)
    }

    return (
        <>
            <header className={style.header}>
                <div className={style.nav_container}>
                    <div className={`${style.nav_container__header} ${expand ? style.expanded : ''}`}>
                        <Image
                            src="/ontego_business_mobi.svg"
                            alt="logo"
                            width={165}
                            height={22}
                            priority/>
                        <FontAwesomeIcon onClick={toggleExpansion} icon={expand ? faX : faBars} />
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
                                                                <a href='#'>{ item }</a>
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
                                                            <a href='#'>{ item }</a>
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
                    <div
                        className={style.header__req_demo}>
                        <div className={style.hovered}></div>
                        <span>Request a demo</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>
                <div className={`
                    ${style.mobile_nav} 
                    ${expand ? style.display : ''}
                `}>    
                    <div className={style.mobile_nav__container}>
                        <ul>
                            {
                                ['Products', 'Why ?', 'Events', 'Resources']
                                .map((item, key) => (
                                    <li 
                                        onClick={() => handleActiveTab(key)}
                                        className={`${activeMobileTab == key ? style.active : null}`}
                                        key={key}>
                                        { item }
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={style.products}>
                            { activeMobileTab == 0 && <Products/> }
                            { activeMobileTab == 1 && <Why/> }
                            { activeMobileTab == 2 && <Events/> }
                            { activeMobileTab == 3 && <Resources/> }
                            <button 
                                onClick={handleReqDemo}
                                className={style.products__request}>
                                Request a Demo
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </button>
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
                                        {
                                            ['User Experience', 'Template Principle', 'SAP Integration', 'Offline & Sync+', 'ERP Extensions', 'Ontego Designer']
                                            .map((item, key) => (
                                                <span key={key}>{ item }</span>
                                            ))
                                        }
                                    </div>
                                </li>
                                <li>
                                    <font>Areas of Application</font>
                                    <div>
                                        {
                                            ['Warehouse Logistics', 'Production', 'Inventory', 'Service Management', 'Maintenance', 'Other Areas']
                                            .map((item, key) => (
                                                <span key={key}>{ item }</span>
                                            ))
                                        }
                                    </div>
                                </li>
                                <li><font>Mobile Devices</font></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Demo 
                is_active={reqDemo} 
                handleReqDemo={handleReqDemo}/>
        </>
    )
}

export default Navbar