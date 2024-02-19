import React from 'react'
import homeIcon from '../../images/home-icon.svg'
import treydingIcon from '../../images/trending-icon.svg'
import subcIcon from '../../images/subs.svg'
import libraryIcon from '../../images/Library-icon.svg'
import historyIcon from '../../images/history-icon.svg'
import watchLaterIcon from '../../images/watch-later-icon.svg'
import favouritesIcon from '../../images/favourites.svg'
import likedVideosIcon from '../../images/liked-videos-icon.svg'
import music from '../../images/music-icon.png'
import games from '../../images/games.icon.svg'
import setting from '../../images/setting-icon.svg'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-content'>
      <div className="top-sidebar">
        <nav className="top-list">
          <ul className="sidebar-list">
            <Link to={'/'} className="sidebar-item sidebar-item-active">
              <img src={homeIcon} alt="home-icon" className="sidebar-icon"/>
               <p>Home</p>
            </Link>
            <li className="sidebar-item">
              <img src={treydingIcon} alt="trending-icon" className="sidebar-icon"/>
              <p>Trending</p>
            </li>
            <li className="sidebar-item">
              <img src={subcIcon} alt="subsciptions-icon" className="sidebar-icon"/>
              <p>Subsciptions</p>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bottom-sidebar">
        <nav className="bottom-list">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <img src={libraryIcon} alt="library" className="sidebar-icon"/>
              <p>library</p>
            </li>
            <li className="sidebar-item">
              <img src={historyIcon} alt="history" className="sidebar-icon"/>
              <p>History</p>
            </li>
            <li className="sidebar-item">
              <img src={watchLaterIcon} alt="watch-later" className="sidebar-icon"/>
              <p>Watch later</p>
            </li>
            <li className="sidebar-item">
              <img src={favouritesIcon} alt="favourites" className="sidebar-icon"/>
              <p>Favourites</p>
            </li>
            <li className="sidebar-item">
              <img src={likedVideosIcon} alt="liked-videos" className="sidebar-icon"/>
              <p>Liked videos</p>
            </li>
            <li className="sidebar-item">
              <img src={music} alt="music" className="sidebar-icon"/>
              <p>Music</p>
            </li>
            <li className="sidebar-item">
              <img src={games} alt="games" className="sidebar-icon"/>
              <p className='sidebar-text'>Games</p>
            </li>
          </ul>
        </nav>
      </div>

      {/* <div className="subr-sidebar">
        <nav className="subr-list">
          <h1 className="subr-heading">Subscriptions</h1>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <img src={person1} alt="person1" className="sidebar-icon"/>
              <p>Gussie Singleton</p>
            </li>
            <li className="sidebar-item">
              <img src={person2} alt="person2" className="sidebar-icon"/>
              <p>Nora Francis</p>
            </li>
            <li className="sidebar-item">
              <img src={person3} alt="person3" className="sidebar-icon"/>
              <p>Belle Briggs</p>
            </li>
            <li className="sidebar-item">
              <img src={person4} alt="person4" className="sidebar-icon"/>
              <p>Eunice Cortez</p>
            </li>
            <li className="sidebar-item">
              <img src={person5} alt="person5" className="sidebar-icon"/>
              <p>Emma Hanson</p>
            </li>
            <li className="sidebar-item">
              <img src={person6} alt="person6" className="sidebar-icon"/>
              <p>Leah Berry</p>
            </li>
          </ul>
        </nav>
      </div> */}

      <div className="sidebar-bottom">
        <li className='sidebar-item'>
          <img src={setting} alt="setting" className="sidebar-icon"/>
          <p>Setting</p>
        </li>
      </div>

      
    </div>
  )
}

export default Sidebar