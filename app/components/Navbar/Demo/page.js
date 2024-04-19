'use client'

import React from 'react'
import style from './demo.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faArrowRightLong,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const Demo = ({ is_active, handleReqDemo }) => {

    const [requirement, setRequirement] = React.useState(null)
    const [areas, setAreas] = React.useState([])
    const [agree, setAgreement] = React.useState(false)

    const handleRequirement = v => {
        setRequirement(v)
    }

    const handleAreas = v => {
        const index = areas.indexOf(v)
        if(index < 0) {
            setAreas([...areas, v])
            return
        }
        const item = [...areas]
        item.splice(index, 1)
        setAreas(item)
    }

    const toggleAgreement = () => {
        setAgreement(!agree)
    }

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
                            ['Yes, please send me a demo appointment', 'Yes, but before that i still have manufacturers'].map((item, key) => (
                                <div
                                    onClick={() => handleRequirement(key)}
                                    key={key} 
                                    className={style.content__radio}>
                                    <div className={style.content__radio__checkmark}>
                                        {
                                            (requirement == key) && <div className={style.checked}></div>
                                        }
                                    </div>
                                    <span>{ item }</span>
                                </div>
                            ))
                        }
                    </div>
                    <h2>For which areas of application ?</h2>
                    <div className={style.chips_group}>
                        {
                            ['Warehouse logistics', 'Production', 'Inventory', 'Service management', 'Maintenance', 'Other areas'].map((item, key) => (
                                <span
                                    onClick={() => handleAreas(item)}
                                    key={key} 
                                    className={`${style.chip} ${areas.includes(item) ? style.active : null}`}>
                                    { item }
                                </span>
                            ))
                        }
                    </div>
                    <h1>How are we allowed to contact you ?</h1>
                    <label><input placeholder='Surname *' type='text'/></label>
                    <label><input placeholder='Email *' type='email'/></label>
                    <label><input placeholder='Company (optional)' type='text'/></label>
                    <label><input placeholder='Phone (optional)' type='tel'/></label>
                    <textarea placeholder='News' id="w3review" name="w3review" rows="4" cols="50"/>
                    <div
                        onClick={toggleAgreement} 
                        className={style.checkbox_container}>
                        <div>
                            { agree && <FontAwesomeIcon icon={faCheck} /> }
                        </div>
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