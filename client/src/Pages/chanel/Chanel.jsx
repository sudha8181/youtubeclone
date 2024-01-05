import React from 'react';
import vid from '../../Components/Video/vid.mp4';
import LeftSidebar from '../../Components/LeftSideBar/LeftSidebar';
import ShowVideoGrid  from '../../Components/ShowVideoGrid/ShowVideoGrid';
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Chanel = ({ setEditCreateChanelBtn,setVidUploadPage}) => {
  const {cid}=useParams();
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel ===cid).reverse();

//   const vids=[
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
            <DescribeChanel  setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn} cid={cid}/>
         <ShowVideoGrid  vids={vids}/>
          </div>
        </div>
    );
}

export default Chanel;
