import React, { useContext } from 'react';
import './About.css';
import Me from '../../img/bestProfile-1.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import { themeContext } from '../../context';
import pdfFile from '../../img/resume.pdf';




const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const downloadFile = (url) => {
        const file = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute('download', file);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };


    return (
        <div className="aboutSection" >
            <div className="about" id='About'>
                <div className="a-left">

                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={Me} alt="" className='me' />
                    <button onClick={() => {
                        downloadFile(pdfFile);
                    }} className='button'>Download Resume</button>
                </div>
                <div className="a-right">
                    <div className="a-name">
                        <div >
                            <span className="a-title" style={{
                                color: darkMode ? 'white' : ''
                            }}>About </span>
                            <span className="a-subtitle">me</span>
                        </div>

                        <span className="a-description">
                            I'm Viswakumar T, currently in my final year of pursuing a Bachelor’s degree in
                            Electronics and Communication Engineering at Panimalar Engineering College in Chennai, Tamil Nadu.
                            I’m passionate about Web Development and specialize in turning innovative ideas into functional, visually appealing websites.
                        </span>
                    </div>
                </div>

            </div>


        </div >
    );
}

export default About;
