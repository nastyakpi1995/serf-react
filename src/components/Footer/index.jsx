import React, {useRef} from 'react';
const  Footer = () =>  {
    const footerRef = useRef(null)
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

