import React, {useRef, useState} from 'react';
import startImg from '../../public/img/star.svg'
import surfboardImg from '../../public/img/surfboard.png'
import waxImg from '../../public/img/wax.png'
import bracelet from '../../public/img/bracelet.png'
import classNames from "classnames";
import {Carousel} from "antd";
import Arrows from "./Arrows";

const shopSliderArray = [
    {headlineRight: 'Style', imgBoard: surfboardImg, head_shop: 'North Nugget TT Surfboard', star_list: '4', price: '$799', priceRest: '99',
        advantages: [
            {advantage: 'Double Concave with Vee Shape low point'},
            {advantage: 'Double Concave with Vee Shape low point'},
            {advantage: 'Double Concave with Vee Shape low point'},
        ],
        extras: [
            {name: 'Sex Wax', price: '$24.99', img: waxImg},
            {name: 'Pura Vida', price: '$27.99', img: bracelet},
        ]
    },
    {headlineRight: 'Style', imgBoard: surfboardImg, head_shop: 'North Nugget TT Surfboard', star_list: '4', price: '$799', priceRest: '99',
        advantages: [
            {advantage: 'Double Concave with Vee Shape low point'},
            {advantage: 'Double Concave with Vee Shape low point'},
            {advantage: 'Double Concave with Vee Shape low point'},
        ],
        extras: [
            {name: 'Sex Wax', price: '$24.99', img: waxImg},
            {name: 'Pura Vida', price: '$27.99', img: bracelet},
        ]
    },
    {headlineRight: 'Style', imgBoard: surfboardImg, head_shop: 'North Nugget TT Surfboard', star_list: '4', price: '$799', priceRest: '99',
        advantages: [
            {advantage: 'Double Concave with Vee Shape low point'},
            {advantage: 'Double Concave with Vee Shape low point'},
            {advantage: 'Double Concave with Vee Shape low point'},
        ],
        extras: [
            {name: 'Sex Wax', price: '$24.99', img: waxImg},
            {name: 'Pura Vida', price: '$27.99', img: bracelet},
        ]
    }
]

const  ShopSlider = () => {
    const [objActive, setObjActive] = useState({
        0: {0: false, 1: false, 2: false},
        1: {0: false, 1: false, 2: false},
        2: {0: false, 1: false, 2: false},
    })
    const [activeStart, setActiveStart] = useState({0: 3, 1: 2, 2: 1})
    const carouselRef = useRef(null)
    const onChangeActive = (idx, index) => {
        setObjActive(prev => ({
            ...prev,
            [idx]: {
                ...prev[idx],
                [index]: !prev[idx][index]}
        }))
    }

    const goToNextSlide = () => {
      carouselRef.current.next()
    }
    const goToPrevSlide = () => {
      carouselRef.current.prev()
    }
    const onClickStarts = (idx, count) => {
        setActiveStart(prev => ({
            ...prev,
            [idx]: count + 1
        }))
    }
    return (
        <div>
            <Arrows goToNextSlide={goToNextSlide} goToPrevSlide={goToPrevSlide} />
            <Carousel ref={carouselRef} className="shop__slider" dots={false}>
            {shopSliderArray.map((item, idx) => (
                <div key={idx} className="shop__slider-item">
                    <div className="shop__slider-inner">
                        <div className="shop__slider-info">
                            <div className="descr">
                                <div className="headline-right">{item.headlineRight}</div>
                                <div className="descr__head descr__head-shop">{item.head_shop}</div>
                            </div>
                            <div className="shop__slider-price">
                                <ul className="shop__star-list star-list">
                                    {Array.from(Array(5)).map((_, index) => (
                                        <li
                                            className={classNames({isActive: index < activeStart[idx]})}
                                            onClick={() => onClickStarts(idx, index)}>
                                            <img
                                                src={startImg} alt=""
                                            />
                                        </li>
                                    ))}
                                </ul>
                                {item.price} <sup>{item.priceRest}</sup>
                            </div>
                            <div className="shop-slider__btn">
                                <a className="btn" href="#">
                                    Drop <span>in</span>
                                </a>
                            </div>
                        </div>
                        <div className="shop__slider-content">
                            <div className="surfboard">
                                <img src={item.imgBoard} alt="" />
                                {item.advantages.map(({advantage}, index) => (
                                    <div key={index} className={`surfboard-box surfboard__position--${index + 1}`} onClick={() => onChangeActive(idx, index)}>
                                        <div className={classNames({
                                        "surfboard-box__circle": true,
                                            "active": objActive[idx][index]
                                        })}>
                                            <div className="circle-row"></div>
                                            <div className="circle-row"></div>
                                        </div>
                                        <div className="surfboard-box__content">
                                            {advantage}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="shop__extras">
                                <div className="shop__extras-title">
                                    Extras
                                </div>
                                <div className="shop__extras-inner">
                                    {item.extras.map(({name,img, price}, index) => (
                                        <div key={index} className="shop__extras-box">
                                            <div className="shop__extras-img">
                                                <img src={img} alt="" />
                                            </div>
                                            <div className="shop__extras-name">{name}</div>
                                            <div className="shop__extras-price">{price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </Carousel>
        </div>
    );
}

export default ShopSlider;

