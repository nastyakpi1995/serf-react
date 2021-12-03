import React from 'react';
import AsideComponent from "./AsideComponent";
import Slider from "./SliderComponent";
import ArrowsDown from '../../public/img/arrows-down.svg';

const Header = ({onButtonDown}) => (
        <div className='header' >
            <div className="header__title">
                go surf
            </div>
            <div className="header__arrows">
                <a href="#" onClick={onButtonDown} className="animated fadeInDown infinite slow">
                    <img src={ArrowsDown} alt="" />
                </a>
            </div>

            <AsideComponent />
            <Slider />
        </div>
)

export default Header;
