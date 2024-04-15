import Image from 'next/image'
import style from './navbar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <header className={style.header}>
            <div className={style.kontol}>
                <Image
                    src="/ontego_business_mobi.svg"
                    alt="logo"
                    width={165}
                    height={22}
                    priority/>
                <FontAwesomeIcon icon={faBars} />
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
                                                <li>User Experience</li>
                                                <li>Template Principle</li>
                                                <li>SAP Integration</li>
                                                <li>Offline & Sync+</li>
                                                <li>ERP Extensions</li>
                                                <li>Ontego Designer</li>
                                            </ul>
                                        </div>
                                        <div className={style.header__submenu__wrap__dropdown}>
                                            <span>Areas of Application</span>
                                            <ul>
                                                <li>Warehouse Logistics</li>
                                                <li>Production</li>
                                                <li>Inventory</li>
                                                <li>Service Management</li>
                                                <li>Maintenance</li>
                                                <li>Other Arease</li>
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
            {/* <div className={style.mobile_nav}>
                <div className={style.mobile_nav__header}>
                    <Image
                        src="/ontego_business_mobi.svg"
                        alt="logo"
                        width={225.86}
                        height={22}
                        priority/>
                </div>
            </div> */}
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