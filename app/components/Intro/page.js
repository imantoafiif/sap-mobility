import style from './intro.module.scss'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className={style.container}>
            <div className={style.intro}>
                <h1>
                    How do i find the <u>best mobile devices</u> for my employees ?
                </h1>
                <div className={style.intro__container}>
                    <div className={style.intro__container__cover}></div>
                    <Image
                        src="/sap-mob-intro.jpg"
                        alt="intro"
                        width={616.66}
                        height={346.86}
                        priority/>
                </div>
            </div>
            <div className={style.subtitle}>
                <p>Mobile applications are now part of everyday life in companies: in production, warehouse logistics, maintenance or delivery. We give you an overview of mobile hardware from handheld computers to mobile scanners, forklift terminals and tablets to robust smartphones and mobile printers.</p>
            </div>
        </section>
    )
}

export default Intro