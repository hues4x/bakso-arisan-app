import React, { useContext } from 'react'
import './HeaderMain.css';
import logo from '../../assets/images/header_main.png'
import { UserContext } from '../../App';

const HeaderMain = () => {
    const { isDark } = useContext(UserContext);

    return (
        <section className='headerMain'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={`text ${isDark?'dark':'light'}`}>
                        <h1>
                        ROTATING SAVINGS <br />& CREDIT ASSOCIATION
                        </h1>
                        <p>MICROFINANCE ON <a href="/">BINANCE SMART CHAIN</a></p> 
                       </div>
                        <button className={`launchApp ${isDark?'dark':'light'}`}>Launch app</button>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end align-items-center">
                        <img src={logo} alt="logo" className='img-fluid headerMainLogo' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderMain
