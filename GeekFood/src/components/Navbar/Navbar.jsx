import React, {useState}  from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu, setMenu] = useState("Home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("Home")}  className={menu==="Home"?"active":""}>HOME</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>MENU</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>MOBILE-APP</a>
        <a href='#footer' onClick={() => setMenu("Contact-US")} className={menu==="Contact-US"?"active":""}>CONTACT US</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button >SIGN IN</button>
      </div>
    </div>
  )
}

export default Navbar
