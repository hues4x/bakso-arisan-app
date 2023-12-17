import React, { useContext } from 'react'
import { UserContext } from '../../App';
import './Partners.css'

const Partners = () => {
    const { isDark } = useContext(UserContext);
    return (
        <section className='partners'>
            <div className="container">
                <div className={`partnersHeading d-flex justify-content-center ${isDark?'dark':''}`}>
                    <h1>
                        Partners
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Partners
