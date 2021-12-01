import React, {useRef, useState} from 'react';
import {Carousel} from "antd";
import Background from '../../public/img/header_bg.jpg';
import DotsHead from "./DotsHead";
import WestShoreSvg from "../SvgBox/WestShoreSvg";

const slideHeaderArray = [
    {suptitle: 'Surf', title: 'North Shore', suptex: 'Condition', text: 'Radical',boxNumber: '01', name: 'North Shore', SvgField: WestShoreSvg},
    {suptitle: 'South', title: 'South Shore', suptex: 'Condition', text: 'Radical', boxNumber: '02', name: 'South Shore', SvgField: WestShoreSvg},
    {suptitle: 'West', title: 'West Shore', suptex: 'Condition', text: 'Radical', boxNumber: '03', name: 'Worth Shore', SvgField: WestShoreSvg},
    {suptitle: 'East', title: 'East Shore', suptex: 'Condition', text: 'Radical', boxNumber: '04', name: 'East Shore', SvgField: WestShoreSvg},
]

const SliderComponent = ( ) => {
    const [curIndex, setCurIndex] = useState(1)
    const carouselRef = useRef(null)
    const goToCarousel = (index) => {
        setCurIndex(index)
      carouselRef.current.goTo(index)
    }

    return (
        <div>
            <Carousel ref={carouselRef} className="header__slider" dots={false} style={{background: `url(${Background})`}}>
                {slideHeaderArray.map(({suptitle,suptex,text,title,img, boxNumber, name, SvgField}, index) => (
                    <div key={index} className='slider_body' >
                        <div className="header__map">
                            <SvgField />
                        </div>
                        <div key={index} className="slider-item" >
                            <div className="slider-item__info">
                                <div className="slider-item__info-suptitle headline-left">{suptitle}</div>
                                <div className="slider-item__info-title">{title}</div>
                                <div className="slider-item__info-suptex headline-left">{suptex}</div>
                                <div className="slider-item__info-text">{text}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            <DotsHead curIndex={curIndex} onclick={goToCarousel} />
        </div>
    )
};

export default SliderComponent;

