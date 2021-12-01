import React from 'react';
import {Carousel} from "antd";
import slide1 from '../../public/img/slide-1.png'
import slide2 from '../../public/img/slide-2.png'
import slide3 from '../../public/img/slide-3.png'
import slide4 from '../../public/img/slide-4.png'
import classNames from "classnames";

const surfSliderArray = [
    {name: 'Malibu Beach', Img: slide1, location: 'California', place: 'USA', text: 'surf'},
    {name: 'Airlie Beach', Img: slide2, location: 'Queenslandh', place: 'Australia', text: 'surf'},
    {name: 'Cloud Nine', Img: slide3, location: 'Siargao', place: 'Philippines', text: 'surf'},
    {name: 'Vieux Boucau', Img: slide4, location: 'Hossegor', place: 'France', text: 'surf'},
    {name: 'Malibu Beach', Img: slide1, location: 'California', place: 'USA', text: 'surf'},
    {name: 'Airlie Beach', Img: slide2, location: 'Queenslandh', place: 'Australia', text: 'surf'},
    {name: 'Cloud Nine', Img: slide3, location: 'Siargao', place: 'Philippines', text: 'surf'},
    {name: 'Vieux Boucau', Img: slide4, location: 'Hossegor', place: 'France', text: 'surf'},
]

const  SliderSurf = ({goToSlide, currentIndex, carouselRef}) => {
    return (
            <Carousel ref={carouselRef} className='surf-slider' dots={false} dotPosition='bottom' slidesToShow={4}>
                {surfSliderArray.map(({name, location, Img, place, text}, index) => (
                    <div key={index} className="surf-box" onClick={() => goToSlide(index)}>
                            <div className="surf-box__inner" style={{background: `url(${Img})`}}>
                                <div className={classNames({
                                    'slick-current': currentIndex === index,
                                    'surf-box__inner-body': true,
                                })}>
                                    <div className="surf-box__inner-title">{name}</div>
                                    <div className="surf-box__inner-location">{location} <span> | </span>{place}</div>
                                    <div className={'surf-box__inner-btn'}>
                                        <a className="btn" href="#">
                                            view <span>{text}</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                    </div>
                ))}
            </Carousel>
    );
}

export default SliderSurf;

