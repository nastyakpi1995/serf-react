import React, {useEffect, useRef, useState} from 'react';
import './styles/global.scss';
import './styles/_colors.scss';
import './styles/styles.scss';
import './styles/_libs.scss';
import './styles/surf.scss';
import './styles/header.scss';
import './styles/shop.scss';
import './styles/footer.scss';
import Header from "./components/Header";
import Surf from "./components/Surf";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

const  App = () => {
    const [isBottom, setIsBottom] = useState(false)
    const footerRef = useRef(null)
    const onButtonDown = () => {
        setIsBottom(true)
    }
    useEffect(() => {
        if (isBottom) {
            footerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
            setIsBottom(false)
        }
    }, [isBottom])
    return (
        <div>
            <Header onButtonDown={onButtonDown}/>
            <Surf/>
            <Shop/>
            <Footer footerRef={footerRef}/>
        </div>
    );
}

export default App;
