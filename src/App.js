import React, { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Video from './pages/Video/Video'
import Channel from './pages/Channel/Channel'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/channel' element={<Channel/>}/>
      </Routes>
    </div>
  );
}

export default App;
