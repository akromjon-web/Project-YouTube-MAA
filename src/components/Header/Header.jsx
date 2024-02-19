import React, { useState } from 'react'
import menuIcon from '../../images/menu-btn.svg'
import logo from '../../images/logo-black.svg'
import searchIcon from '../../images/search-icon.png'
import cameraIcon from '../../images/camera-icon.svg'
import compIcon from '../../images/components-icon.svg'
import bellIcon from '../../images/bell-icon.png'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({setSidebarOpen, sidebarOpen}) => {
  const [openSearch, setOpenSearch] = useState(false)
  console.log(openSearch);

  const handleSearch = () => {
    setOpenSearch(true)
  }  

  const handleClose = () => {
    setOpenSearch(false)
  }
  
  const handlebtn = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <header className='header'>
      <div className="header-content">
        <div className="header-left">
          <button className='menu-btn' onClick={handlebtn}>
            <img src={menuIcon} alt="menu-icon" />
          </button>
          <Link className='logo' to={'/'}>
            <img src={logo} alt="logo" className='logo-img'/>
          </Link>
        </div>
        <div className={sidebarOpen ? "search-box" : "search-box-m"}>
          <label className='search-label'>
              <input type="text" name='text' placeholder='search' required className='search-input'/>
              <button className='search-btn'>
                <img src={searchIcon} alt="search-btn" />
              </button>
          </label>
          
        </div>
        <div className="header-right">
          <button className='camera-icon header-left-btn'>
            <img src={cameraIcon} alt="camera-icon" />
          </button>
          <button className='components-icon header-left-btn'>
            <img src={compIcon} alt="components-icon" />
          </button>
          <button className='bell-icon header-left-btn'>
            <img src={bellIcon} alt="bell-icon" />
          </button>
          <button onClick={handleSearch}  className='search-btn-media'>
            <img src={searchIcon} alt="search-btn" />
          </button>
          <Link className='account-link'></Link>
        </div>

        {
          
          openSearch && <div className="search-box-media">
            <label htmlFor="" className='search-media'>
              <button onClick={handleClose} className="close">X</button>
              <input type="text" name='text' className='search-input-media'/>
            </label>
          </div>
        }
      </div>
    </header>
  )
}

export default Header