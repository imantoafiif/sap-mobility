import React from 'react'
import style from './demo.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Demo = ({ is_active, handleReqDemo }) => {
    return (
        <>
            <div className={`
                ${style.head_container} 
                ${is_active ? style.display : style.hide}
            `}>
                <Image
                    src="/ontego_business_mobi.svg"
                    alt="logo"
                    width={225.86}
                    height={22}
                    priority/>
            </div>
            <div className={`
                ${style.body_container} 
                ${is_active ? style.display : style.hide}
            `}>
                <div className={style.content}>
                    <button onClick={handleReqDemo}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <h1>Do you need a mobile solution ?</h1>
                    <div className={style.radio_groups}>
                        {
                            [0, 0].map((item, key) => (
                                <div
                                    key={key} 
                                    className={style.content__radio}>
                                    <div className={style.content__radio__checkmark}></div>
                                    <span>Yes, please send me a demo appointment</span>
                                </div>
                            ))
                        }
                    </div>
                    <h2>For which areas of application ?</h2>
                    <div className={style.chips_group}>
                        {
                            ['Warehouse logistics', 'Production', 'Inventory', 'Service management', 'Maintenance', 'Other areas'].map((item, key) => (
                                <span
                                    key={key} 
                                    className={style.chip}>
                                    { item }
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo