import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import topBg from '../../images/ChannelImg/topBg.png'
import per1 from '../../images/person-icon/person1.png'
import bellIcon from '../../images/ChannelImg/bellIcon.png'
import channelPer1 from '../../images/ChannelImg/channelPer1.png'
import channelPer2 from '../../images/ChannelImg/channelper2.png'
import channelPer3 from '../../images/ChannelImg/channelPer3.png'
import channelVideo from '../../images/ChannelImg/channelVideo.png'
import seactBtn from '../../images/ChannelImg/searchCHannel.png'
import leftBtn from '../../images/arrow-icon/Left-rrow.png'
import rightBtn from '../../images/arrow-icon/Right-Arrow.png'
import './Channel.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Channel = () => {

  const [videos, setVideos] = useState([])
  const [carsuolSize, setCarsuolSize] = useState(0)

  const handlePrev = () => {
    if(-920 < carsuolSize)setCarsuolSize(carsuolSize - 310) 
  }

  const handleBack = () => {
    if(0 > carsuolSize)setCarsuolSize(carsuolSize + 310) 
  }

  useEffect(() => {
    const getData = async() => {
      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/videos/',
        params: {
          id: 'UCZ1erfgItcyL2Z6ZLz-exfw',
          hl: 'en',
          gl: 'US'
        },
        headers: {
          'X-RapidAPI-Key': 'eccff347a8msha204b76eaa44a21p101bdfjsn25886563b6f5',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        const videos = response.data.contents
        setVideos(videos)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])
  return (
    <div>
      <div className="header-channel-box">
        <Header/>
      </div>
      <main>
        <div className="channel-left">
          <Sidebar/>
        </div>

        <div className="channel-right">
          <div className="main-container">
            <div className="top">
              <img src={topBg} alt="top-bg" className='top-img'/>
            </div>


            <div className="info-box">
              <div className="info-left-box">
                <img src={per1} alt="channel-avatar" className='channel-avatar'/>
                <div className="info-name">
                  <h1 className='channel-title'>Margaret Phelps</h1>
                  <p className='channel-subc'>245K subscribed </p>
                </div>
              </div>
              <div className="info-right-box">
                <img src={bellIcon} alt="bell-icon" />
                <button className='subr-btn'>Subscribe 2.3m</button>
              </div>
            </div>

            <nav className='nav'>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link className='active-link' to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <p>Videos</p>
                </li>
                <li className="nav-item">
                  <p>Playlists</p>
                </li>
                <li className="nav-item">
                  <p>Channels</p>
                </li>
                <li className="nav-item">
                  <p>Discussion</p>
                </li>
                <li className="nav-item">
                  <p>About</p>
                </li>
                <li className="nav-item">
                  <img src={seactBtn} alt="search-btn" />
                </li>
              </ul>
              <p className='rec-name'>Recommended channel</p>
            </nav>


            <div className="center-box">
              <div className="video-box">
                <Link to={'/video'}>
                  <img src={channelVideo} alt="video" className='channel-video-img'/>
                </Link>
                <div className="video-channel-info-box">
                  <h1 className="video-channel-title">Choosing The Best Audio Player Software For Your Computer</h1>
                  <p className="video-channel-text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                  <div className="views-box">
                    <p className="views-box">11k views  · 6 months ago</p>
                  </div>
                </div>
              </div>

              <ul className="subr-list">
                <li className='subr-item'>
                  <img src={channelPer1} alt="per1" className='subr-img'/>
                  <p className='subr-name'>Flora Benson</p>
                </li>
                <li className='subr-item'>
                  <img src={channelPer2} alt="per1" className='subr-img'/>
                  <p className='subr-name'>Violet Cobb</p>
                </li>
                <li className='subr-item'>
                  <img src={channelPer3} alt="per1" className='subr-img'/>
                  <p className='subr-name'>Phillip Mullins</p>
                </li>
              </ul>
            </div>

            <div className="carsuol-box">
                <div className="carsuol-top-box">
                  <h1 className="carsuol-channel-name">Margaret Phelps videos</h1>
                  <div className="btn-box-channel">
                    <button className='arrow-btn' onClick={handleBack}>
                      <img src={leftBtn} alt="left"/>
                    </button>
                    <button className='arrow-btn' onClick={handlePrev}>
                      <img src={rightBtn} alt="right"/>
                    </button>
                  </div>
                </div>
                  <div className="carsuol-list-box">
                    <ul style={{'--carsuolSize' : `${carsuolSize + 'px'}`}} className="carsuol-list">
                      {
                        videos.map(video => {
                          return(
                            <Link className="carsuol-item" to={'/video'} key={video.video.videoId}>
                              <li>
                                <img src={video.video.thumbnails[0].url} alt=""  className='video-img'/>
                                <p className='video-title'>{video.video.title}</p>
                              </li>
                            </Link>
                          )
                        })
                      }
                    </ul>
                  </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Channel