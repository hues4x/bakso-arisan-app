import React, { useContext } from 'react'
import './Footer.css'
import fb from '../../assets/icons/fb.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'
import youtube from '../../assets/icons/youtube.svg'
import medium from '../../assets/icons/medium.svg'
import { UserContext } from '../../App'

const Footer = () => {
    const { isDark } = useContext(UserContext);
    return (
        <footer className={`${isDark?'dark':''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto socialMedia">
                        
                        <div className='singleMediaCard mx-auto'>
                            <a href="https://www.instagram.com/baksoswap/" target='blank'><img src={instagram} alt="socialIcon" className='img-fluid' /></a>
                        </div>
                     
                        <div className='singleMediaCard mx-auto'>
                           <a href="https://www.facebook.com/baksoswap" target='blank'> <img src={fb} alt="socialIcon" className='img-fluid' /></a>
                        </div>
                      
                        <div className='singleMediaCard mx-auto'>
                           <a href="https://twitter.com/BaksoSwap" target='blank'> <img src={twitter} alt="socialIcon" className='img-fluid' /></a>
                        </div>
                        <div className='singleMediaCard mx-auto'>
                           <a href="https://www.youtube.com/channel/UCH-ogsGjAtpy-mLTv0JFRdw" target='blank'> <img src={youtube} alt="socialIcon" className='img-fluid' /></a>
                        </div>
                        <div className='singleMediaCard mx-auto'>
                           <a href="https://t.me/baksoswap" target='blank'> <img src={telegram} alt="socialIcon" className='img-fluid' /></a>
                        </div>
                        <div className='singleMediaCard mx-auto'>
                            <a href="https://medium.com/@baksoswap" target='blank'><img src={medium} alt="socialIcon" className='img-fluid' /></a>
                        </div>

                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
