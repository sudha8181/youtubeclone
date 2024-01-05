import React, { useEffect } from 'react';
// import vid from '../../Components/Video/vid.mp4';
import './VideoPage.css';
import LikeWatchLaterSaveBtn from './LikeWatchLaterSaveBtn';
import Comments from '../../Components/Comments/Comments';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { addToHistory } from '../../action/History';
import { viewVideo } from '../../action/video';


const VideoPage = () => {
  const {vid}=useParams();
  // console.log(vid);
  const vids=useSelector(state=>state.videoReducer)?.data;
  // console.log(vids[0]);
   const vv=vids?.filter(q=>q._id === vid)[0];
  //  console.log(vv);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);


  const handleHistory=()=>{
    dispatch(addToHistory({
      videoId: vid,
      Viewer: CurrentUser?.result._id,
    }));
  }

  const handleViews =()=>{
     dispatch(viewVideo({
      id:vid
     }))
  }
  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
    }
    handleViews();
  },[]);
   
 return (
        <div className='container_videoPage'>
          <div className="container2_videoPage">
            <div className="video_display_screen_videoPage">
               <video src={`http://localhost:5500/${vv?.filePath}`}
                className={"video_ShowVideo_videoPage"}
                controls
                autoPlay >
               </video>
               <div className="video_details_videoPage">
                <div className="video_btns_title_videoPage_cont">
                  <p className="video_title_VideoPage">{vv?.videoTitle}
                  </p>
                  <div className="views_date_btns_VideoPage">
                   <div className="views_videoPage">

                   
                   {vv?.Views} views<div className="dot"></div> {vv?.Uploder} {moment(vv?.createdAt).fromNow()}
                  </div>
                  <LikeWatchLaterSaveBtn vv={vv}  vid={vid}/>
                  </div>  
              
               </div>
              
               <Link to={`/chanelpage/${vv?.videoChanel}`} className="chanel_details_videoPage">
                <b className="chanel_logo_videoPage">
                  <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                </b>
                <p className='chanel_name_videoPage'>{vv?.Uploder}</p>
               </Link>
               <div className="comments_videoPage">
                <h2>
                <u> Comments</u>
               </h2>
               <Comments  videoId={vv?._id} />
               </div>
               </div>
            </div>
            <div className="moreVideoBar">
              More Video
            </div>
          </div>
        </div>
    );
};

export default VideoPage;
