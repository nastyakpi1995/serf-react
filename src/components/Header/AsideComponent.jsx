import React from 'react';
import img1 from '../../public/img/nav-ico-1.svg';
import img2 from '../../public/img/nav-ico-2.svg';
import img3 from '../../public/img/nav-ico-3.svg';
import img4 from '../../public/img/nav-ico-4.svg';
import logo from '../../public/img/logo.svg'
import search from '../../public/img/Search.svg'

const layoutArray = [
    {img: img1, title: 'Surf'},
    {img: img2, title: 'Holder'},
    {img: img3, title: 'Sleep'},
    {img: img4, title: 'Shop'},
]

const AsideComponent = () => (
        <div className="header__aside">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <nav className="menu">
                <ul className="menu__list">
                    {layoutArray.map(({img, title}, index) => (
                        <li key={index}>
                            <a href="#">
                                <img src={img} alt="" />
                                <span>{title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="header__search">
                <img src={search} alt="" />
            </div>
            <div className="header__date">
                20
                <span> 06 | 2018 </span>
            </div>
            <div className="header__location">California</div>
        </div>
    )

export default AsideComponent;

