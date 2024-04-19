import style from './events.module.scss'
import React from 'react';

const Events = () => {
    return (
        <div className={style.menus}>
            <div className={`${style.menus__dropdown}`}>
                <p className={style.menus__dropdown__title}>Trade Fairs & Congresses</p>
                <ul>
                    {
                        ['VLB Logistics Congress 2024', 'LogiMAT 2024']
                        .map((item, key) => (
                            <li key={key}>
                                <a href='#'>{ item }</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Events