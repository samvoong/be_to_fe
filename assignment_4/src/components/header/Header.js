import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import style from './Header.scss';

const Header = () => (
    <header className={style.header}>
        <h1 className={style.h1}>Sammy's Blog</h1>
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link className={style.a} to="/">Home</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.a} to="/posts">Posts</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.a} to="/form">Add Post</Link>
                </li>
            </ul>
        </nav>
    </header>

)

export default Header

