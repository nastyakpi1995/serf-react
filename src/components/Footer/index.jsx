import React from 'react';
const  Footer = ({footerRef}) =>  {
    return (
        <div className="footer" ref={footerRef}>
            <div className="shop-slider__btn">
                <a className="btn" href="#">
                    Go <span>Surf</span>
                </a>
                <div className="footer__copy">
                    © Go-Surf 2018. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer;

