import React from 'react';
import ShopSlider from "./ShopSlider";
import shopImageBg from '../../public/img/shop_image_bg.png'
const  Shop = () => (
        <div style={{background: '#171919', color: 'white'}}>
            <div className='shop' style={{  background: `url(${shopImageBg})`}}>
                <div className="title">
                    <span>Shop<h3>Shop</h3></span>
                </div>
                <ShopSlider />
            </div>
        </div>
);

export default Shop;

