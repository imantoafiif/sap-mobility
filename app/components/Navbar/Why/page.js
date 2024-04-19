import style from './why.module.scss'
import React from 'react';

const Why = () => {
    return (
        <div className={style.menus}>
            <div className={`${style.menus__dropdown}`}>
                <p className={style.menus__dropdown__title}>Good Reasons</p>
                <ul>
                    <li>
                        <i>Why companies rely on Ontego Business Mobility.</i>
                    </li>
                </ul>
                <p className={style.menus__dropdown__title}>In Use</p>
                <ul>
                    {
                        ['Credentials']
                        .map((item, key) => (
                            <li key={key}>
                                <a href='#'>{ item }</a>
                            </li>
                        ))
                    }
                </ul>
                <p className={style.menus__dropdown__title}>This is Us</p>
                <ul>
                    {
                        ['Pursue', 'Locations', 'Career']
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

export default Why