import React from "react";
import classNames from 'classnames/bind';

const dotsArray = [
    {boxNumber: '01', name: 'North Shore'},
    {boxNumber: '02', name: 'South Shore'},
    {boxNumber: '03', name: 'Worth Shore'},
    {boxNumber: '04', name: 'East Shore'},
]

const DotsHead = ({onclick, curIndex}) => {
    return (
        <div className='slider-dotshead'>
            {dotsArray.map(({boxNumber, name}, index) => (
                <div key={index}
                     onClick={() => onclick(index)}
                     className='slider-dots__item'>
                    <div className={classNames({"dots-box": true, 'slick-active': index === curIndex})}>
                        <div className="dots-box__number">{boxNumber}</div>
                        <div className="dots-box__name">{name}</div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default DotsHead

