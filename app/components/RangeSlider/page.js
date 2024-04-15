'use client'

import React from 'react';
import RangeSlider from 'rsuite/RangeSlider';
import 'rsuite/RangeSlider/styles/index.css';
import style from './slider.module.scss'

const Slider = ({ 
    range = [0, 100], 
    onValueChange,
    currentValue
}) => {

    const [value, setValue] = React.useState(range)

    const setSliderValue = v => {
        setValue(v)
        onValueChange(value)
    }
    
    return (
        <RangeSlider 
            min={range[0]}
            max={range[1]}
            onChange={value => {
                setSliderValue(value)
            }}
            constraint={([start, end]) => start < end && end > start}
            value={currentValue}
            defaultValue={value}
            tooltip={false}/>
    )
}

export default Slider