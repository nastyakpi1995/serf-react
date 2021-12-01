import React from 'react';
import arrowsLeft from '../../public/img/arrows-left.svg'
import arrowsRight from '../../public/img/arrows-right.svg'
const  Arrows = ({goToNextSlide, goToPrevSlide}) => {

    return (
        <div className="shop_arrows">
            <img className='slider-arrows' style={{paddingRight: 20}} src={arrowsLeft} alt="" onClick={goToPrevSlide} />
            <img className='slider-arrows' src={arrowsRight} alt="" onClick={goToNextSlide} />
        </div>
    );
}

export default Arrows;

