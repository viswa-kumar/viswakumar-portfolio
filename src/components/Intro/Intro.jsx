import React, { useContext, useEffect, useState } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import { themeContext } from '../../context';
import { Link } from 'react-scroll';

const Intro = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 50); // Faster typing speed
    const period = 1500; // Shorter delay between loops
    const toRotate = ['Web Developer', 'Full Stack Developer', 'Web Designer'];

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1);
            setDelta(150 - Math.random() * 50); // Reset to faster typing speed
        }
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]); // Added delta to the dependency array

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span className='font' style={{ color: darkMode ? 'white' : 'var(--black)' }}>
                        Hi! I am
                    </span>
                    <span className='font' >Viswakumar T</span>

                    <span className='arrayWords'>{text}.</span>

                </div>
                <Link spy={true} to='Contact' smooth={true} >
                    <button className='button i-button'>Hire me</button>
                </Link>

                <div className='i-icons'>
                    <a href="https://github.com/viswa-kumar"><img src={Github} alt="GitHub" /></a>
                    <a href="https://www.linkedin.com/in/viswa-kumar"><img src={LinkedIn} alt="LinkedIn" /></a>
                </div>
            </div>
            <div className="i-right">

            </div>
        </div>
    );
};

export default Intro;
