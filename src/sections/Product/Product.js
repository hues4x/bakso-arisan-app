import React, { useContext } from 'react'
import { UserContext } from '../../App';
import './Product.css'

const Product = () => {
    const { isDark } = useContext(UserContext);

    return (
        <section className='product'>
            <div className="container d-flex justify-content-center">
                <div className={`column col-lg-6 col-md-8 col-10 ${isDark?'dark':''}`}>
                    <div>
                        <h1>OUR <br /> PRODUCTS</h1>
                    </div>
                    <div className="products">
                        <button className={`productBtn ${isDark?'dark':''}`}>ARISAN</button>
                        <button className={`productBtn ${isDark?'dark':''}`}>REFERRALS</button>
                        <button className={`productBtn ${isDark?'dark':''}`}>SOUP KITCHEN</button>
                        <button className={`productBtn ${isDark?'dark':''}`}>LAUNCH PAD</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
