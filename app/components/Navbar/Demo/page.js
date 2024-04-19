'use client'

import React from 'react'
import style from './demo.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faArrowRightLong
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
                    <div className={style.controller}>
                        <div onClick={handleReqDemo}>
                            <FontAwesomeIcon icon={faX} />
                        </div>
                    </div>
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
                    <h1>How are we allowed to contact you ?</h1>
                    <input placeholder='Surname *' type='text'/>
                    <input placeholder='Email *' type='email'/>
                    <input placeholder='Company (optional)' type='text'/>
                    <input placeholder='Phone (optional)' type='tel'/>
                    <textarea placeholder='News' id="w3review" name="w3review" rows="4" cols="50"/>
                    <div className={style.checkbox_container}>
                        <div></div>
                        I agree to be contacted to process the request.
                    </div>
                    <div className={style.send_container}>
                        <button className={style.send_btn}>
                            Send
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo