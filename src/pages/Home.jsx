import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <main>
      <Header/>
      <div className="main">
        <Sidebar/>
      </div>
    </main>
  )
}

export default Home