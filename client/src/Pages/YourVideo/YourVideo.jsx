import React from 'react';
import LeftSidebar from '../../Components/LeftSideBar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import {useSelector} from 'react-redux';
import './YourVideo.css';
const YourVideo = () => {

    const currentUser=useSelector(state=>state?.currentUserReducer);
    const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === currentUser?.result?._id).reverse();


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
          <div className="container_yourVideo">
          <h1>Your Videos</h1>
          {
            currentUser ?(<>
          <ShowVideoGrid vids={vids} />
            </>):<>
            <h3>Plz Login to see Your uploded video list</h3></>
          }
            
           </div>
          </div>
        </div>
    );
}

export default YourVideo;
