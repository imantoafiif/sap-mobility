'use client'

import React from 'react'
import Intro from './components/Intro/page'
import Navbar from './components/Navbar/page'
import Products from './components/Products/page'
import ProductsMobile from './components/ProductsMobile/page'
import Footer from './components/Footer/page'
import Hoverables from './components/Hoverables/page'

import style from './page.module.scss'

const Page = () => {

    const [scrollY, setScrollY] = React.useState(0)
    const containerRef = React.useRef(null)

    const scrollToTop = () => {
        containerRef.current.scrollTop = 0
    }

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = containerRef.current.scrollHeight;
            const scrollTop = containerRef.current.scrollTop;
            const clientHeight = containerRef.current.clientHeight;
            const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollY(percentage)
        };

        containerRef.current.addEventListener('scroll', handleScroll);

        return () => {
            containerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className={style.container}>
            <Navbar/>
            <section    
                ref={containerRef} 
                className={style.content}>
                <Intro/>
                <Products/>
                <ProductsMobile/>
                <Footer/>
                <Hoverables scrollToTop={scrollToTop} pos={scrollY} />
            </section>
        </main>
    )
}

export default Page