import Image from 'next/image'
import style from './page.module.scss'

const Page = () => {
    return (
        <main className={style.container}>
            <header className={style.header}>
                <div className={style.header__container}>
                    <Image
                        src="/ontego_business_mobi.svg"
                        alt="logo"
                        width={165}
                        height={22}
                        priority/>
                    <menu>
                        <ul className={style.header__menu}>
                            <li className={style.active_nav}>Products</li>
                            <li>Why Ontego ?</li>
                            <li>Events</li>
                            <li>Resources</li>
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
                <div className={style.header__submenu}>
                    <div className={style.header__submenu__daktau}>
                        <Image
                            src="/ontego_subline.svg"
                            alt="arrow"
                            width={104}
                            height={55}
                            priority/>
                        <div className={style.header__submenu__container}>
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
                                <li><font>Areas of Application</font></li>
                                <li><font>Mobile Devices</font></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <section className={style.content}>
                {
                    [0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0].map(item => (
                        <div><p>asd</p></div>
                    ))
                }
            </section>
            {/* <section className="">
                {
                    [0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0].map(item => (
                        <div><p>asd</p></div>
                    ))
                }
            </section> */}
        </main>
    )
}

export default Page