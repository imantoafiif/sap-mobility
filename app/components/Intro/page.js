import style from './intro.module.scss'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className={style.container}>
            <div className={style.intro}>
                <div className={style.intro__label}>
                    <h1>abc</h1>
                </div>
                <Image
                    src="/sap-mob-intro.jpg"
                    alt="intro"
                    width={616.66}
                    height={346.86}
                    priority/>
            </div>
        </section>
    )
}

export default Intro