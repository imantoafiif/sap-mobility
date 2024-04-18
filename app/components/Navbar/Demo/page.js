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
                </div>
            </div>
        </>
    )
}

export default Demo