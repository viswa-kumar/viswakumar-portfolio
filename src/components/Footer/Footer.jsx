import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import WhatsApp from '@iconscout/react-unicons/icons/uil-whatsapp'
import ReactLogo from '@iconscout/react-unicons/icons/uil-react'
const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">

                <div className="f-icons">
                    <a href="https://www.linkedin.com/in/viswa-kumar">< LinkedIn color='white' size='3rem' /></a>
                    <a href="https://github.com/viswa-kumar">< GitHub color='white' size='3rem' /></a>
                    <a href="https://wa.me/6374572587">< WhatsApp color='white' size='3rem' /></a>
                </div>
                <div className="f-bottom">
                    <span>Developed by Viswakumar T using React JS </span>
                    <ReactLogo color='aqua' size='2rem' />
                </div>

            </div>
        </div>
    )
}

export default Footer;