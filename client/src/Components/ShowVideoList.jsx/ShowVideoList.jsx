import React from 'react';
import vid from '../../Components/Video/vid.mp4';
import ShowVideo from '../ShowVideo/ShowVideo';
import { useSelector } from 'react-redux';

const ShowVideoList = ({videoId}) => {
    const Vids=useSelector(state=>state.videoReducer);
    console.log(Vids.data);
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
        <div className='Container_showVideoGrid'>
        {Vids?.data.filter(q=>q._id===videoId).map((vi)=>{
            return <div key={vi._id} className="video_box_app">
            <ShowVideo vid={vi}/>
            </div>;
            
        })}
        
        </div>
     );
}

export default ShowVideoList;
