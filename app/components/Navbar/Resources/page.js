import style from './resources.module.scss'
import React from 'react';

const Why = () => {
    return (
        <div className={style.menus}>
            <div className={`${style.menus__dropdown}`}>
                <p className={style.menus__dropdown__title}>Mobility Blog</p>
                <ul>
                    <li>
                        <i>Information and tips about MDE for SAP and other ERP systems.</i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Why