import React from 'react';
import SliderMapDots from "../../public/img/world-map-dots.png"
import arrowRight from "../../public/img/arrows-right.svg"
import water from "../../public/img/water-icon.svg"
import wind from "../../public/img/wind-icon.svg"
import surfIcon from "../../public/img/surf-icon.svg";
import classNames from "classnames";


const sliderMapArray = [
    {index: 1, title: 'Airlie Beach', subtitle: 'Australia', Img: surfIcon,
        content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
    {index: 2, title: 'Airlie Beach', subtitle: 'Australia', Img: surfIcon, content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
    {index: 3, title: 'Airlie Beach', subtitle: 'Australia', Img: surfIcon, content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
    {index: 4, title: 'Airlie Beach', subtitle: 'Australia', Img: surfIcon, content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
    {index: 5, title: 'Airlie Beach', subtitle: 'Australia', Img: surfIcon, content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
    {index: 6, title: 'Airlie Beach', subtitle: 'Australia', Img: surfIcon, content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
    {index: 7, title: 'Airlie Beach', subtitle: 'Australia', Img: surfIcon, content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
    {index: 8, title: 'Airlie Beach', subtitle: 'Australia', content: [
            {contentName: 'Surf (FT)', contentNumber: '9-13', Img: surfIcon},
            {contentName: 'Tide (FT)', contentNumber: '+2.3', Img: water},
            {contentName: 'Wind (KTS)', contentNumber: '4 SE',Img: wind },
        ]},
]

const  SliderMap = ({currentIndex, goToSlide}) => {
    return (
        <div className="slider-map" style={{background: `url(${SliderMapDots})`}}>
            <div className="map">
            {sliderMapArray.map((el, index) => (
                <div key={index} className={`slider-dots slider-dots--${el.index}`} onClick={() => goToSlide(index)}>
                    <div className="slider-dots__circle " />
                    <div className={classNames({
                        "slider-dots__content": true,
                       "slick-active": currentIndex === index
                    })}>
                        <div className="slider-dots__content-row">
                            <div className="slider-dots__content-head">
                                <div className="slider-dots__content-title">{el.title}</div>
                                <div className="slider-dots__content-subtitle">{el.subtitle}</div>
                            </div>
                            <a className="slider-dots__content-link" href="#">
                                <img src={arrowRight} alt="" />
                            </a>
                        </div>
                        <div className="slider-dots__content-row">
                            {el.content.map((item, index) => (
                                <div key={index} className="slider-dots__content-item">
                                    <img src={item.Img} alt="" />
                                    <div className="slider-dots__content-number">{item.contentNumber}</div>
                                    <div className="slider-dots__content-name">{item.contentName}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default SliderMap;
