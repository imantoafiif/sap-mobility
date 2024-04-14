import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faX,
    faArrowRightLong,
    faAngleUp
} from "@fortawesome/free-solid-svg-icons";

import style from './hoverables.module.scss'
import React from "react";

const Hoverables = ({ scrollToTop, pos }) => {

    const [popup, setPopup] = React.useState(false)
    const [popupRead, setPopupRead] = React.useState(false)

    const handlePopup = v => {
        setPopupRead(v)
    }

    const handleAgreement = va => {
        
    }

    React.useEffect(() => {
        if(pos >= 85) setPopup(true)
    }, [pos])

    return (
        <>
            {/* <div className={style.cookie_agreement}>
                <div className={style.cookie_agreement__container}>
                    <div className={style.header}>
                        <button onClick={() => handleAgreement(false)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>
                    <div className={style.agreement_content}>
                        <p>This website stores cookies on your computer. These cookies are used to optimize your website experience and to provide you with a personalized service, both on this website and on other media channels. You can find more information about the cookies we use in our privacy policy.</p>
                        <p>When you visit our site, your data will not be tracked. However, in order to optimally meet your wishes and settings, we only need to set a tiny cookie so that you do not have to make this selection again</p>
                    </div>
                    <div className={style.footer}>
                        <button>Accept</button>
                    </div>
                </div>
            </div> */}
            <div 
                className={`
                    ${style.subscribe_popup} 
                    ${popup && !popupRead ? style.active : null}
                `}>
                <h3>
                    <span onClick={() => handlePopup(true)}><FontAwesomeIcon icon={faX} /></span>
                    Would you like to be informed immediately about new devices?
                </h3>
                <p>We will be happy to send you the most important updates from our Hardware Finder.</p>
                <div className={style.input_email}>
                    <input placeholder="Email *" type="email"></input>
                    <div>
                        <span>Send</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>
                <div className={style.checkbox_container}>
                    <span className={style.checkmark}></span>
                    <span className={style.label}>I agree to be contacted only for updates to this page.</span>
                </div>
            </div>
            <div
                onClick={scrollToTop} 
                className={`${style.scroll_top} ${pos <= 20 ? style.hidden : null}`}>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
        </>
    )
}

export default Hoverables