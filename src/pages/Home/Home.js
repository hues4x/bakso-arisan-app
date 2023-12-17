import React from 'react'
import Header from '../../sections/Header/Header';
import HeaderMain from '../../sections/HeaderMain/HeaderMain';
import Partners from '../../sections/Partners/Partners';
import Product from '../../sections/Product/Product';
import Roadmap from '../../sections/Roadmap/Roadmap';
import Footer from '../../sections/Footer/Footer'
import './Home.css'
import { useContext } from 'react';
import { UserContext } from '../../App';

const Home = () => {
    const { isDark } = useContext(UserContext);

    return (
        <section className={`home ${isDark? 'dark':'light'}`}>
        <div className={`gradientTop ${isDark?'dark':'light'}`}></div>
            <Header />
            <HeaderMain />
            <hr />
            <Product />
            <hr />
            <Roadmap />
            <Partners />
            <hr />
            <Footer />
            <div className={`gradientBottom ${isDark?'dark':'light'}`}>
            <div className={`col-lg-10 mx-auto copyRight ${isDark?'dark':''}`}>
                <p >Copyright &copy; {new Date().getFullYear()} BaksoSwap | All Rights Reserved</p>
            </div>
        </div>
       </section>
    )
}

export default Home
