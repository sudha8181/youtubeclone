import React from 'react';
import './ShowVideo.css';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const ShowVideo = ({vid}) => {
  console.log(vid);
         
    return (
    <>
        <NavLink to={`/videopage/${vid?._id}`} style={{textDecoration:"none"}}>
         <video 
         src={`http://localhost:5500/${vid.filePath}`} 
         className="video_ShowVideo"

          />
            <div className="video_description">
              <div className='chanel_logo_App'>
               <div className='fstChar_logo_App'>
               <>{vid?.uploader?.charAt(0).toUpperCase()}</>
             </div> 
           </div>
           <div className="video_details">
                <p className='title_vid_ShowVideo'> {vid?.videoTitle}</p>
                <pre className='vid_views_UploadTime'>{vid?.createdAt}</pre>
                <pre className='vid_views_UploadTime'>
               {vid?.Views} <div className="dot"></div> {vid?.Uploder} {moment(vid?.createdAt).fromNow()}
                </pre>
            </div>
        </div>
        </NavLink>  
    </>
        
    );
};

export default ShowVideo;
