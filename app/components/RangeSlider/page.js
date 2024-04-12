'use client'

import React from 'react';
import RangeSlider from 'rsuite/RangeSlider';
import 'rsuite/RangeSlider/styles/index.css';
import style from './slider.module.scss'

const Slider = () => {

    const [value, setValue] = React.useState([0, 100])

    const setSliderValue = v => {
        setValue(v)
    }

    return (
        <RangeSlider 
            max={100}
            min={0}
            onChange={value => {
                setSliderValue(value)
            }}
            constraint={([start, end]) => start < end && end > start}
            value={value}
            defaultValue={value}
            tooltip={false}/>
    )
}

export default Slider