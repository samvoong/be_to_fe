import React from 'react';

import style from './Footer.scss';

const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("scrolling...")
};

const Footer = () => (
    <footer className={style.footer}>
        <button onClick={scrollTop} className={style.button} title="Go to top">Go up</button>
        <p className={style.p}>Made by Sammy Voong (I tried my best!)</p>
    </footer>
)

export default Footer;
