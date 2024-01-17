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
import person1 from '../../images/person-icon/person1.png'
import person2 from '../../images/person-icon/person2.png'
import person3 from '../../images/person-icon/person3.png'
import person4 from '../../images/person-icon/person4.png'
import person5 from '../../images/person-icon/person5.png'
import person6 from '../../images/person-icon/person6.png'
import setting from '../../images/setting-icon.svg'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-content'>
      <div className="top-sidebar">
        <nav className="top-list">
          <ul className="sidebar-list">
            <li className="sidebar-item-active">
              <img src={homeIcon} alt="home-icon" />
               <h3>Home</h3>
            </li>
            <li className="sidebar-item">
              <img src={treydingIcon} alt="trending-icon" />
              <h3>Trending</h3>
            </li>
            <li className="sidebar-item">
              <img src={subcIcon} alt="subsciptions-icon" />
              <h3>Subsciptions</h3>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bottom-sidebar">
        <nav className="bottom-list">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <img src={libraryIcon} alt="library" />
              <h3>library</h3>
            </li>
            <li className="sidebar-item">
              <img src={historyIcon} alt="history" />
              <h3>History</h3>
            </li>
            <li className="sidebar-item">
              <img src={watchLaterIcon} alt="watch-later" />
              <h3>Watch later</h3>
            </li>
            <li className="sidebar-item">
              <img src={favouritesIcon} alt="favourites" />
              <h3>Favourites</h3>
            </li>
            <li className="sidebar-item">
              <img src={likedVideosIcon} alt="liked-videos" />
              <h3>Liked videos</h3>
            </li>
            <li className="sidebar-item">
              <img src={music} alt="music" />
              <h3>Music</h3>
            </li>
            <li className="sidebar-item">
              <img src={games} alt="games" />
              <h3 className='sidebar-text'>Games</h3>
            </li>
          </ul>
        </nav>
      </div>

      <div className="subr-sidebar">
        <nav className="subr-list">
          <h1 className="subr-heading">Subscriptions</h1>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <img src={person1} alt="person1" />
              <h3>Gussie Singleton</h3>
            </li>
            <li className="sidebar-item">
              <img src={person2} alt="person2" />
              <h3>Nora Francis</h3>
            </li>
            <li className="sidebar-item">
              <img src={person3} alt="person3" />
              <h3>Belle Briggs</h3>
            </li>
            <li className="sidebar-item">
              <img src={person4} alt="person4" />
              <h3>Eunice Cortez</h3>
            </li>
            <li className="sidebar-item">
              <img src={person5} alt="person5" />
              <h3>Emma Hanson</h3>
            </li>
            <li className="sidebar-item">
              <img src={person6} alt="person6" />
              <h3>Leah Berry</h3>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <li className='sidebar-item'>
          <img src={setting} alt="setting" />
          <h3>Setting</h3>
        </li>
      </div>
    </div>
  )
}

export default Sidebar