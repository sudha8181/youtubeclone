import React from 'react';
import './Library.css';
import vid from '../../Components/Video/vid.mp4';
import LeftSidebar from '../../Components/LeftSideBar/LeftSidebar';
import {FaHistory} from 'react-icons/fa';
import { MdOutlineWatchLater} from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';
import WHLVideoList from '../../Components/WHL/WHLVideoList';
import { useSelector } from 'react-redux';
const Library = () => {

  const currentUser=useSelector(state=>state?.currentUserReducer);
  const historyList=useSelector(state=>state.historyReducer);
  const likedVideoList=useSelector(state=>state.likedVideoReducer);
  const watchLaterList=useSelector(state=>state.watchLaterReducer);
    // const Vids=[
    //     { _id:1,
    //     video_src:vid,
    //     channel:"62bafe6752cea35a6c30685f",
    //     uploader:"ABC",
    //     title:"video 1",
    //     description:"description of video 1"
    //    },
    //    { _id:2,
    //     video_src:vid,
    //     channel:"cdd",
    //     uploader:"xyz",
    //     title:"video 2",
    //     description:"description of video 2"
    //    },
    
    //    { _id:3,
    //     video_src:vid,
    //     channel:"add",
    //     uploader:"kLM",
    //     title:"video 3",
    //     description:"description of video 3"
    //    },
    //    { _id:4,
    //     video_src:vid,
    //     channel:"add",
    //     uploader:"SQ",
    //     title:"video 4",
    //     description:"description of video 4"
    //    }
    
    // ];
    return (
        <div className='container_Pages_App'>
         <LeftSidebar/>
            <div className="container2_Pages_App">
              <div className="container_libraryPage">

                 <h1 className="title_container_LibraryPage">
                    <b> <FaHistory/></b>
                     <b>History</b>
                 </h1>
                 <div className="container_videoList_LibraryPage">
                    <WHLVideoList
                        page={"History"}
                        CurrentUser={currentUser?.result._id}
                        videoList={historyList}
                    />
                 </div>
               </div>

               <div className="container_libraryPage">

               <h1 className="title_container_LibraryPage">
                <b> <MdOutlineWatchLater/></b>
                 <b>Watch Later</b>
                </h1>
               <div className="container_videoList_LibraryPage">
                <WHLVideoList
              page={"History"}
              CurrentUser={currentUser?.result._id}
             videoList={watchLaterList}
               />
</div>
                </div> 

                  <div className="container_libraryPage">

               <h1 className="title_container_LibraryPage">
                <b> <AiOutlineLike/></b>
                 <b>Liked Video</b>
                </h1>
               <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                    page={"Liked Video"}
                    CurrentUser={currentUser?.result._id}
                    videoList={likedVideoList}
                   />
               </div>
                </div>   
           </div>
        </div>
        
    );
}

export default Library;
