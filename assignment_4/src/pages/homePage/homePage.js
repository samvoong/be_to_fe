import React from 'react'
import { Link } from 'react-router-dom'

import style from './homePage.scss';

const HomePage = () => (
  <section className={style.section}>
    <h1 className={style.h1}>Home Page</h1>
    <p className={style.p}>Welcome to my blog attempt.</p>
    <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque. Gravida quis blandit turpis cursus in. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Suspendisse in est ante in. Iaculis urna id volutpat lacus laoreet non. Eget dolor morbi non arcu risus quis varius quam quisque. Massa tempor nec feugiat nisl pretium. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Sed cras ornare arcu dui vivamus arcu felis.</p>
    <Link to="/posts" className="button">View Posts</Link>
  </section>
)

export default HomePage