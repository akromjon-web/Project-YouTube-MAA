import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import left from '../../images/arrow-icon/Left-rrow.png'
import right from '../../images/arrow-icon/Right-Arrow.png'
import logoChannel from '../../images/logoUzb.jpg'
import channelIcon from '../../images/channelIcon.png'
import MediaSidebar from '../../components/MediaSidebar/MediaSidebar'



const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [videos, setVideos] = useState([])
  const [channelVideos, setChannelVideos] = useState([])
  const [channelBottom, setChannelBottom] = useState([])
  

  const [carsuol, setCarsoul] = useState(0)
  const [recCarsuol, setRecCarsoul] = useState(0)
  const [channelBottomCarsoul, setChannelBottomCarsuol] = useState(0)

  const handleCarsuolprev = () => {
    if(carsuol < 0) setCarsoul(carsuol + 260)
  }

  const handleCarsuolNext = () => {
    if(-7540 < carsuol) setCarsoul(carsuol - 260)
  }

  const handleCarsuolprevRec = () => {
    if(recCarsuol < 0) setRecCarsoul(recCarsuol + 310)
  }

  const handleCarsuolNextRec = () => {
    if(-5580 < recCarsuol) setRecCarsoul(recCarsuol - 310)
  }

  const handleCarsuolprevBottom = () => {
    if(channelBottomCarsoul < 0) setChannelBottomCarsuol(channelBottomCarsoul + 315)
  }

  const handleCarsuolNextBottom = () => {
    if(-620 < channelBottomCarsoul) setChannelBottomCarsuol(channelBottomCarsoul - 315)
  }

  useEffect(()=> {
    const getData = async() => {
      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/home/',
        params: {hl: 'en', gl: 'US'},
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

  useEffect(()=> {
    const getData = async() => {
      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/videos/',
        params: {
          id: 'UCW_jqO-PEvTcEoZXE0W0QZA',
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
        const channel = response.data.contents
        setChannelVideos(channel)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])

  useEffect(()=> {
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
        const channel = response.data.contents
        setChannelBottom(channel)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])
  
  return (
    <div>
      <div className="header-box">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>
      <main>
        <div className="main-left">
          {
            sidebarOpen && <Sidebar/>
          }
        </div>
        <div className={sidebarOpen ? "main-right" : "main-right-active"}>
          <div className="main-container">
            <div className="top-box">
              <div className="box">
                <div className="heading-box">
                  <img className='img-heading' src={channelIcon} alt="per1" />
                  <h1 className="heading-top">Food & Drink</h1>
                </div>
                <div className="btn-box">
                  <button onClick={handleCarsuolprev} className='prev'>
                    <img src={left} alt="left" />
                  </button>
                  <button onClick={handleCarsuolNext} className='next'>
                    <img src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="top-carsuol">
                <div style={{'--carsuolSize': `${carsuol + "px"}`}} className="carsuol-list-home">
                  {
                    channelVideos.map(channelVideo => {
                      return(
                        <>
                          <Link to={`/video`} key={channelVideo.video.videoId}    className='carsuol-item'>
                            <div>
                              <img className='item-img video-img' src={channelVideo.video.thumbnails[0].url} alt="" />
                              <p className='item-title'>{channelVideo.video.title.slice(0, 40)}...</p>
                            </div>
                          </Link>
                        </>
                      )
                    })
                  }
                </div>
              </div> 
            </div>
            <div className="center-box-home">
              <div className="box">
                <div className="heading-box">
                  <h1>Recommended</h1>
                </div>
                <div className="btn-box">
                  <button onClick={handleCarsuolprevRec} className='prev'>
                    <img src={left} alt="left" />
                  </button>
                  <button onClick={handleCarsuolNextRec} className='next'>
                    <img src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="carsuol-rec">
                <div style={{'--recCarsuolSize': `${recCarsuol + "px"}`}} className="rec-list">
                {
                    videos.map(video => {
                      return(
                        <Link to={`/video`} key={video.video.videoId}    className='rec-item'>
                          <div>
                            <img className='item-img-rec video-img' src={video.video.thumbnails[0].url} alt="" />
                            <p className='item-title'>{video.video.title}</p>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="top-box bottom-box-channel">
              <div className="box">
                <div className="heading-box">
                  <img className='img-heading' src={logoChannel} alt="per1" />
                  <h1 className="heading-top">UZB_FRONTEND</h1>
                </div>
                <div className="btn-box">
                  <button onClick={handleCarsuolprevBottom} className='prev'>
                    <img src={left} alt="left" />
                  </button>
                  <button onClick={handleCarsuolNextBottom} className='next'>
                    <img src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="top-carsuol ">
                <div style={{'--channelBottom': `${channelBottomCarsoul + "px"}`}} className="channel-list-bottom ">
                  {
                    channelBottom.map(channelVideo => {
                      return(
                        <>
                          <Link to={`/video`} key={channelVideo.video.videoId}    className='channel-item-bottom'>
                            <div>
                              <img className='item-img item-img-bottom video-img' src={channelVideo.video.thumbnails[0].url} alt="" />
                              <p className='item-title'>{channelVideo.video.title.slice(0, 40)}...</p>
                            </div>
                          </Link>
                        </>
                      )
                    })
                  }
                </div>
              </div> 

            </div>

          </div>
        </div>
      </main>
      <div className="media-sidebar">
        <div className="sidebar-content">
          <MediaSidebar/>
        </div>
      </div>
    </div>
  )
}

export default Home