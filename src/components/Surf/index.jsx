import React, {useRef, useState} from 'react';
import SliderSurf from "./SliderSurf";
import SliderMap from "./SliderMap";
import surfBg from '../../public/img/surf_bg.svg';

const  Surf = () => {
    const carouselRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToSlide = (idx) => {
        carouselRef.current.goTo(idx)
        setCurrentIndex(idx)
    }

    return (
        <div className='surf' style={{backgroundImage: `url(${surfBg})`}}>
            <SliderMap goToSlide={goToSlide} currentIndex={currentIndex} />
            <SliderSurf goToSlide={goToSlide} currentIndex={currentIndex} carouselRef={carouselRef} />
        </div>
    );
}

export default Surf;

