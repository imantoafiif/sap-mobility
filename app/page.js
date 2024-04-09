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
                    <Image
                        src="/ontego_subline.svg"
                        alt="arrow"
                        width={104}
                        height={55}
                        priority/>
                    <div className={style.header__submenu__container}>
                        <ul>
                            <li><p>Features</p></li>
                            <li><p>Areas of Application</p></li>
                            <li><p>Mobile Devices</p></li>
                        </ul>
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