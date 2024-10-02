import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/news.png'
import img2 from '../images/medical.png'
import img3 from '../images/fruits.png'
import img4 from '../images/world.png'
import img5 from '../images/india.png'


const Footer = () => {
  return (
    <div className="all__stories">
    <footer>
        <ul className="header__categories">
            <li><Link to="/posts/categories/:news"><img src={img1} alt="news" /></Link></li>
            <li><Link to="/posts/categories/:medical"><img src={img2} alt="medical" /></Link></li>
            <li><Link to="/posts/categories/:fruits"><img src={img3} alt="fruits" /></Link></li>
            <li><Link to="/posts/categories/:world"><img src={img4} alt="world" /></Link></li>
            <li><Link to="/posts/categories/:india"><img src={img5} alt="india" /></Link></li>

        </ul>

       
        
    </footer>
    <div className="stories">
    <h1>Top stories about Food</h1>
    <h2>No stories available</h2>
    <h1>Top stories about Medical</h1>
    <h2>No stories available</h2>
  </div>
    </div>
  )
}

export default Footer