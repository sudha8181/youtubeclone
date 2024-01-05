import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Home from '../Pages/Home/Home.jsx';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Library from '../Pages/Library/Library.jsx';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory.jsx';
import YourVideo from '../Pages/YourVideo/YourVideo.jsx';
import WatchLater from '../Pages/WatchLater/WatchLater.jsx';
import Chanel from '../Pages/chanel/Chanel.jsx';
import Search from '../Pages/Search/Search.js';


const AllRoutes = ({ setEditCreateChanelBtn,setVidUploadPage}) => {
    return (
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/likedvideo" element={<LikedVideo/>}/>
        <Route path="/watchhistory" element={<WatchHistory/>}/>
        <Route path="/yourvideo" element={<YourVideo/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/videopage/:vid" element={<VideoPage/>}/>
        <Route  path='/chanelpage/:cid' element={<Chanel setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={ setEditCreateChanelBtn} />}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
      
    </Routes>
   
        
    );
}

export default AllRoutes;
