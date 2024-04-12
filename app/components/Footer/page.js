import Image from 'next/image'

import style from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.sub_footer}>
                <div className={style.sub_footer__contact}>
                    <p>Contact</p>
                    <p>
                        Lindenstraße 6<br/>
                        14467 Potsdam<br/>
                        Telephone: 0331-730 73-0<br/>
                        Fax: 0331-730 73-99<br/>
                        office@commsult.de
                    </p>
                </div>
                <div className={style.sub_footer__imprints}>
                    <span>Imprint</span>
                    <span>Data Protection</span>
                </div>
            </div>
            <div className={style.sub_footer}>
                <p>Upcoming events</p>
                <p>Get to know the experts for mobile solutions!</p>
                <div className={style.link_wrapper}>
                    <span>Congress</span><br/>
                    <span>VLB Logistics Congress 2024</span><br/>
                    <span>March 4th – 6th, 2024 in Chemnitz</span><br/>
                </div>
                <div className={style.link_wrapper}>
                    <span>Messe</span><br/>
                    <span>LogiMAT 2024</span><br/>
                    <span>March 19 – 21, 2024 in Stuttgart</span><br/>
                </div>
            </div>
            <div className={style.sub_footer}>
                <div>
                    <Image
                        src="/commsult.svg"
                        alt="logo"
                        width={118}
                        height={19}
                        priority/>
                    <p>The specialists<br/>for mobile software in business processes</p>
                    <div className={style.link_wrapper}>
                        <span>
                            <a 
                                target='_blank'
                                href='www.comsult.de'>
                                www.commsult.de
                            </a>
                        </span>
                    </div>
                </div>
                <Image
                    src="/sap_partner_logo.png"
                    alt="logo"
                    width={50}
                    height={29.3}
                    priority/>
            </div>
        </footer>
    )
}

export default Footer