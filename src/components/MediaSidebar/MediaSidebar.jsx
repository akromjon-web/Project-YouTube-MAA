import React from 'react'
import homeIcon from '../../images/home-icon.svg'
import treydingIcon from '../../images/trending-icon.svg'
import subcIcon from '../../images/subs.svg'
import libraryIcon from '../../images/Library-icon.svg'
import { Link } from 'react-router-dom'
import './mediaSidebar.css'

const MediaSidebar = () => {
  return (
    <div className=''>
      <ul className="sidebar-media">
        <Link to={'/'} className="sidebar-media-item active">
          <img src={homeIcon} alt="home" className='sidebar-img-media'/>
          <p>Home</p>
        </Link>
        <li className="sidebar-media-item">
          <img src={treydingIcon} alt="treyding" className='sidebar-img-media sidebar-img-media2'/>
          <p>Treyding</p>
        </li>
        <li className="sidebar-media-item">
          <img src={subcIcon} alt="subc" className='sidebar-img-media'/>
          <p>Subcribe</p>
        </li>
        <li className="sidebar-media-item">
          <img src={libraryIcon} alt="library" className='sidebar-img-media'/>
          <p>Library</p>
        </li>
      </ul>
    </div>
  )
}

export default MediaSidebar