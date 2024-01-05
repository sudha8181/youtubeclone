import React from 'react';
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

const WatchHistory = () => {
   const watchHistoryList=useSelector(state=>state?.historyReducer);
   console.log(watchHistoryList)
    // const history=[
    //     { _id:1,
    //         video_src:vid,
    //         channel:"62bafe6752cea35a6c30685f",
    //         uploader:"ABC",
    //         title:"video 1",
    //         description:"description of video 1"
    //        },
    //        { _id:2,
    //         video_src:vid,
    //         channel:"cdd",
    //         uploader:"xyz",
    //         title:"video 2",
    //         description:"description of video 2"
    //        },
        
    //        { _id:3,
    //         video_src:vid,
    //         channel:"add",
    //         uploader:"kLM",
    //         title:"video 3",
    //         description:"description of video 3"
    //        },
    //        { _id:4,
    //         video_src:vid,
    //         channel:"add",
    //         uploader:"SQ",
    //         title:"video 4",
    //         description:"description of video 4"
    //        }
    // ];

    return (<div>
          <WHL page={"History"} videoList={watchHistoryList}/>
    </div>
   ) ;
          
   
}

export default WatchHistory;
 