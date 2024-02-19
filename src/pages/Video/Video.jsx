import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import like from '../../images/VideoIcon/like.png'
import dislike from '../../images/VideoIcon/dislike.png'
import share from '../../images/VideoIcon/share.png'
import more from '../../images/VideoIcon/more.png'
import channelIcon from '../../images/channelIcon.png'
import './Video.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Video = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [onOff, setOnOff] = useState(false)
  const [size, setSize] = useState(0)
  const [recVideo, setRecVideo] = useState([])
  console.log(recVideo);

  const handleOnOff = () => {
    if (onOff === false) {
      setOnOff(true)
      setSize(40)
    } else if(onOff === true) {
      setOnOff(false)
      setSize(0)
    }
    
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
        setRecVideo(response.data.contents);
      } catch (error) {
        console.error(error);
      }
    } 
    getData()
  }, [])

  return (
    <div>
      <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
      {
        sidebarOpen &&
        <div className="sidebar-box">
          <div className="sidebar">
            <Sidebar/>
          </div>
        </div>
      }
      <main>
        <div className="container-video">
          <div className="left">
          <iframe width="900" height="500" src="https://www.youtube.com/embed/g9YBnxfXIdA?si=OvXrhymg5n4T77zQ" title="Ultra Pubgm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1 className='title'>Lorem ipsum dolor sit amet.</h1>
            <div className="video-info-box">
              <p className='views-info'>123k views</p>
              <div className="btn-like-box">
                <button className='video-btn'>
                  <img src={like} alt="like"/>
                  like
                </button>
                <button className='video-btn'>
                  <img src={dislike} alt="dislike"/>
                  dislike
                </button>
                <button className='video-btn'>
                  <img src={share} alt="share"/>
                  share
                </button>
                <button className='video-btn'>
                  <img src={more} alt="more"/>
                </button>
              </div>
            </div>  
            <div className="channel-info">
              <div className="info">
                <div className="">
                  <img src={channelIcon} alt="channelIcon" />
                </div>
                <Link to={'/channel'} className="video-info-box-bottom">
                  <h1 className="channel-name-info">Food & Drink</h1>
                  <p className="channel-info-data">Published on 14 Jun 2019</p>
                  <p className="channel-text">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                  <button className="more">Show more</button>
                </Link>
              </div>
              <button className='subr-btn'>Subscribe 2.3m</button>
            </div>
          </div>
          <div className="right">
            <div className="top-box-video">
              <p className='next-text'>Next</p>
              <button className='on-off' onClick={handleOnOff}>
                <span style={{'--onOff' : `${size + 'px'}`}} className='on-off-span'></span>
              </button>
            </div>
            <ul className="rec-list-video">
              {
                recVideo.map(video => {
                  return(
                    <Link className="rec-item-video" key={video.video.videoId} to={'/video'}>
                      <img src={video.video.thumbnails[0].url} alt="img" className='rec-img'/>
                      <p>{video.video.title}</p>
                    </Link>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Video