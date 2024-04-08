import Image from 'next/image'
import style from './page.module.scss'

const Page = () => {
    return (
        <main className={style.container}>
            <header className={style.header}>
                <Image
                    src="/ontego_business_mobi.svg"
                    alt="logo"
                    width={165}
                    height={22}
                    priority/>
                <menu>
                    <ul className={style.header__menu}>
                        <li>Products</li>
                        <li>Why Ontego ?</li>
                        <li>Events</li>
                        <li>Resources</li>
                    </ul>
                </menu>
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